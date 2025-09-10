/**
 * Handles dynamic date calculations and alert rendering for the apprenticeship program
 */
class ApprenticeshipDateManager {
  constructor(openDate, closeDate, formUrl, config = {}) {
    this.openDate = new Date(openDate)
    this.closeDate = new Date(closeDate)
    this.formUrl = formUrl
    this.now = new Date()

    this.locale = config.locale || navigator.language || "en-US"
    this.timezone =
      config.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone

    // Cache for formatting
    this._cache = { status: null, formats: new Map() }

    this.config = {
      alertClasses: {
        upcoming: "alert alert-info text-center",
        open: "alert alert-success text-center",
        closed: "alert alert-secondary text-center"
      },
      buttonClasses: {
        open: "alert-link btn btn-outline-success btn-sm mt-2"
      },
      badgeClasses: {
        upcoming: "text-info fw-bold p-1",
        open: "text-success fw-bold p-1",
        closed: "text-muted fw-bold p-1"
      },
      badgeLabels: {
        upcoming: "soon",
        open: "open",
        closed: "closed"
      },
      ...config
    }
  }

  /** Helper: days between now and a target date */
  daysUntil(date) {
    return Math.ceil((date - this.now) / 86400000)
  }

  /** Format day count */
  formatDaysText(days, mode = "remaining") {
    if (days < 0) return "expired"
    const templates = {
      until: ["today", "tomorrow", `in ${days} days`],
      remaining: [
        "today is the last day",
        "1 day remaining",
        `${days} days remaining`
      ]
    }
    return templates[mode]?.[Math.min(days, 2)] || templates[mode][2]
  }

  /** Get status with simple caching */
  getStatus() {
    if (this._cache.status) return this._cache.status
    this.now = new Date()
    let status
    if (this.now < this.openDate) status = "upcoming"
    else if (this.now <= this.closeDate) status = "open"
    else status = "closed"
    this._cache.status = status
    return status
  }

  /** Locale + timezone formatting, with cache */
  formatDate(
    date,
    { style = "long", includeTime = false, includeTZ = false } = {}
  ) {
    const key = `${date.getTime()}-${style}-${includeTime}-${includeTZ}`
    if (this._cache.formats.has(key)) return this._cache.formats.get(key)

    const styleOptions = {
      full: { weekday: "long", year: "numeric", month: "long", day: "numeric" },
      long: { year: "numeric", month: "long", day: "numeric" },
      medium: { year: "numeric", month: "short", day: "numeric" },
      short: { year: "2-digit", month: "numeric", day: "numeric" }
    }

    const options = { timeZone: this.timezone, ...styleOptions[style] }
    if (includeTime)
      Object.assign(options, { hour: "2-digit", minute: "2-digit" })
    if (includeTZ) options.timeZoneName = "short"

    const result =
      includeTime || includeTZ
        ? date.toLocaleString(this.locale, options)
        : date.toLocaleDateString(this.locale, options)

    this._cache.formats.set(key, result)
    return result
  }

  /** Get alert data (status-based) */
  getAlertData() {
    const status = this.getStatus()
    const dUntilOpen = this.daysUntil(this.openDate)
    const dUntilClose = this.daysUntil(this.closeDate)

    const alerts = {
      upcoming: {
        title: "Applications will open soon!",
        content: `Applications open on ${this.formatDate(this.openDate, {
          includeTime: true,
          includeTZ: true
        })} (${this.formatDaysText(dUntilOpen, "until")}).`
      },
      open: {
        title: "Applications for the apprenticeship program are now open!",
        content: `Applications close on ${this.formatDate(this.closeDate, {
          includeTime: true,
          includeTZ: true
        })} (${this.formatDaysText(dUntilClose, "remaining")}).`,
        hasButton: !!this.formUrl,
        button: {
          url: this.formUrl,
          text: "Apply now",
          classes: this.config.buttonClasses.open
        }
      },
      closed: {
        title:
          "Applications for the apprenticeship program are currently closed.",
        content: `Last application period ended on ${this.formatDate(
          this.closeDate,
          {
            includeTime: true,
            includeTZ: true
          }
        )}.<br> Information for the next application opening will be released soon.`
      }
    }

    return {
      status,
      classes: this.config.alertClasses[status],
      ...alerts[status]
    }
  }

  /** Alert HTML */
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

  /** Badge data + HTML */
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

  /** Update alert + badges */
  update({ badgesOnly = false } = {}) {
    if (!badgesOnly) {
      const el = document.getElementById("apprenticeship-alert")
      if (el) el.innerHTML = this.generateAlertHTML(this.getAlertData())
    }
    const html = this.generateBadgeHTML()
    document
      .querySelectorAll(".apprenticeship-badge")
      .forEach((el) => (el.innerHTML = html))
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
  mgr.update(options)

  function scheduleNextUpdate() {
    mgr._cache.status = null
    mgr.update(options)

    const status = mgr.getStatus()
    let nextInterval = 24 * 3600000 // 24h default

    if (status === "open") {
      const daysLeft = mgr.daysUntil(mgr.closeDate)
      nextInterval =
        daysLeft <= 1 ? 5 * 60000 : daysLeft <= 7 ? 3600000 : 12 * 3600000
    } else if (status === "upcoming" && mgr.daysUntil(mgr.openDate) <= 1) {
      nextInterval = 3600000
    } else if (status === "closed") {
      return // stop scheduling after closed
    }

    setTimeout(scheduleNextUpdate, nextInterval)
  }

  scheduleNextUpdate()
  window.apprenticeshipDateManager = mgr
  return mgr
}

const initApprenticeshipBadges = (o, c, f, cfg) =>
  initApprenticeshipManager(o, c, f, cfg, { badgesOnly: true })

window.initApprenticeshipManager = initApprenticeshipManager
window.initApprenticeshipBadges = initApprenticeshipBadges
