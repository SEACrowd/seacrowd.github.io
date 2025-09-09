/**
 * Apprenticeship Date Manager
 * Handles dynamic date calculations and alert rendering for the apprenticeship program
 */
class ApprenticeshipDateManager {
  constructor(openDate, closeDate, formUrl, config = {}) {
    this.openDate = new Date(openDate) // ISO string with tz
    this.closeDate = new Date(closeDate)
    this.formUrl = formUrl
    this.now = new Date()

    // Support for international datetime
    this.locale = config.locale || navigator.language || "en-US"
    this.timezone =
      config.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone

    // Cache for expensive computations
    this._cache = { status: null, lastUpdate: 0, formats: new Map() }

    this.config = {
      alertClasses: {
        upcoming: "alert alert-info text-center",
        open: "alert alert-success text-center",
        closing_soon: "alert alert-warning text-center",
        closed: "alert alert-secondary text-center"
      },
      buttonClasses: {
        open: "alert-link btn btn-outline-success btn-sm mt-2",
        closing_soon: "alert-link btn btn-warning btn-sm mt-2"
      },
      badgeClasses: {
        upcoming: "text-info fw-bold p-1",
        open: "text-success fw-bold p-1",
        closing_soon: "text-warning fw-bold p-1",
        closed: "text-muted fw-bold p-1"
      },
      badgeLabels: {
        upcoming: "Soon",
        open: "Open",
        closing_soon: "Closing",
        closed: "Closed"
      },
      icons: { warning: "⚠️" },
      ...config
    }
  }

  /** Helper: days between now and a target date */
  daysUntil(date) {
    return Math.ceil((date - this.now) / 86400000) // ms in a day
  }

  /** Format day count with context */
  formatDaysText(days, context = "remaining") {
    if (days < 0) return "expired"
    const phrases = {
      until: ["today", "tomorrow", `in ${days} days`],
      in: ["today", "1 day", `${days} days`],
      remaining: [
        "today is the last day",
        "1 day remaining",
        `${days} days remaining`
      ]
    }
    return phrases[context]?.[Math.min(days, 2)] || phrases[context][2]
  }

  /** Get status with caching: 'upcoming', 'open', 'closing_soon', 'closed' */
  getStatus() {
    const elapsedHrs = (Date.now() - this._cache.lastUpdate) / 36e5
    if (this._cache.status && elapsedHrs < 1) return this._cache.status

    let status
    if (this.now < this.openDate) {
      status = "upcoming"
    } else if (this.now <= this.closeDate) {
      status = this.daysUntil(this.closeDate) <= 7 ? "closing_soon" : "open"
    } else {
      status = "closed"
    }

    this._cache.status = status
    this._cache.lastUpdate = Date.now()
    return status
  }

  /** Format date with locale + timezone, with caching */
  formatDate(
    date,
    style = "long",
    includeTime = false,
    includeTimezone = false
  ) {
    const cacheKey = `${date.getTime()}-${style}-${includeTime}-${includeTimezone}`
    if (this._cache.formats.has(cacheKey)) {
      return this._cache.formats.get(cacheKey)
    }

    const styleOptions = {
      full: { weekday: "long", year: "numeric", month: "long", day: "numeric" },
      long: { year: "numeric", month: "long", day: "numeric" },
      medium: { year: "numeric", month: "short", day: "numeric" },
      short: { year: "2-digit", month: "numeric", day: "numeric" }
    }

    const options = { timeZone: this.timezone, ...styleOptions[style] }
    if (includeTime)
      Object.assign(options, { hour: "2-digit", minute: "2-digit" })
    if (includeTimezone) options.timeZoneName = "short"

    const result =
      includeTime || includeTimezone
        ? date.toLocaleString(this.locale, options)
        : date.toLocaleDateString(this.locale, options)

    this._cache.formats.set(cacheKey, result)
    return result
  }

  /** Combined date + time + timezone string */
  formatDateTime(date) {
    const dateStr = this.formatDate(date, "long")
    const timeOptions = {
      timeZone: this.timezone,
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short"
    }
    const timeStr = date.toLocaleTimeString(this.locale, timeOptions)
    return `${dateStr} at ${timeStr}`
  }

  /** Get urgency button text */
  urgencyButtonText(days) {
    if (days <= 0) return "Apply now - last day!"
    if (days === 1) return "Apply now - 1 day left!"
    return `Apply now - only ${days} days left!`
  }

  /** Alert content builder */
  getAlertData() {
    const status = this.getStatus()
    const base = { status, classes: this.config.alertClasses[status] }
    const dUntilOpen = this.daysUntil(this.openDate)
    const dUntilClose = this.daysUntil(this.closeDate)

    const alerts = {
      upcoming: {
        title: "Applications will open soon!",
        content: `Applications open on ${this.formatDateTime(this.openDate)} (${this.formatDaysText(
          dUntilOpen,
          "until"
        )}).`
      },
      open: {
        title: "Applications for the apprenticeship program are now open!",
        content: `Applications close on ${this.formatDateTime(this.closeDate)} (${this.formatDaysText(
          dUntilClose,
          "remaining"
        )}).`,
        hasButton: !!this.formUrl,
        button: {
          url: this.formUrl,
          text: "Apply now",
          classes: this.config.buttonClasses.open
        }
      },
      closing_soon: {
        title: `${this.config.icons.warning} Applications closing soon!`,
        content: `Applications close on ${this.formatDateTime(this.closeDate)}.`,
        hasButton: !!this.formUrl,
        button: {
          url: this.formUrl,
          text: this.urgencyButtonText(dUntilClose),
          classes: this.config.buttonClasses.closing_soon
        }
      },
      closed: {
        title:
          "Applications for the apprenticeship program are currently closed.",
        content: `Last application period ended on ${this.formatDateTime(this.closeDate)}.<br>
          Information for the next application opening will be released soon.`
      }
    }

    return { ...base, ...alerts[status] }
  }

  /** Generate alert HTML */
  generateAlertHTML(data) {
    const buttonHTML = data.hasButton
      ? `<a href="${data.button.url}" class="${data.button.classes}">${data.button.text}</a><br>`
      : ""
    const contentHTML =
      data.status === "open" ? `<small>${data.content}</small>` : data.content

    return `
      <div class="${data.classes}" role="alert">
        <strong>${data.title}</strong><br>
        ${buttonHTML}${contentHTML}
      </div>`
  }

  /** Navbar badge data + HTML */
  getBadgeData() {
    const status = this.getStatus()
    return {
      status,
      label: this.config.badgeLabels[status],
      classes: this.config.badgeClasses[status]
    }
  }

  generateBadgeHTML() {
    const { label, classes } = this.getBadgeData()
    return `<sup><small class="${classes}">${label}</small></sup>`
  }

  renderAlert() {
    const el = document.getElementById("apprenticeship-alert")
    if (el) el.innerHTML = this.generateAlertHTML(this.getAlertData())
  }

  updateBadges() {
    const html = this.generateBadgeHTML()
    document.querySelectorAll(".apprenticeship-badge").forEach((el) => {
      el.innerHTML = html
    })
  }

  updateAll() {
    this.renderAlert()
    this.updateBadges()
  }

  /** Refresh current time + invalidate cache */
  refreshNow() {
    this.now = new Date()
    this._cache.status = null
  }
}

/** Universal initialization with adaptive refresh */
function initApprenticeshipManager(
  openDate,
  closeDate,
  formUrl = "",
  config = {},
  options = {}
) {
  const mgr = new ApprenticeshipDateManager(
    openDate,
    closeDate,
    formUrl,
    config
  )
  options.badgesOnly ? mgr.updateBadges() : mgr.updateAll()

  function scheduleNextUpdate() {
    mgr.refreshNow()
    options.badgesOnly ? mgr.updateBadges() : mgr.updateAll()

    const status = mgr.getStatus()
    let nextInterval = 6 * 3600000 // default: 6h

    if (status === "open" || status === "closing_soon") {
      const daysLeft = mgr.daysUntil(mgr.closeDate)
      if (daysLeft <= 1) {
        nextInterval = 5 * 60000 // every 5 min
      } else if (daysLeft <= 7) {
        nextInterval = 3600000 // every 1h
      }
    } else if (status === "upcoming") {
      const daysUntilOpen = mgr.daysUntil(mgr.openDate)
      if (daysUntilOpen <= 1) {
        nextInterval = 3600000 // check hourly on last day before open
      }
    }

    setTimeout(scheduleNextUpdate, nextInterval)
  }

  // Start adaptive loop
  scheduleNextUpdate()

  window.apprenticeshipDateManager = mgr
  return mgr
}

const initApprenticeshipBadges = (o, c, f, cfg) =>
  initApprenticeshipManager(o, c, f, cfg, { badgesOnly: true })

// Make functions globally accessible
window.initApprenticeshipManager = initApprenticeshipManager
window.initApprenticeshipBadges = initApprenticeshipBadges
