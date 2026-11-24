// Live local time for each mentor UTC offset on an apprentice project page.
// Markup comes from _layouts/apprentice-project.html ([data-tz-clocks]).
document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("[data-tz-clocks]")
  if (!list) return

  // "UTC-5" -> -5; "UTC+5:30" -> 5.5
  const parseOffset = (text) => {
    const m = text.match(/UTC([+-])(\d{1,2})(?::(\d{2}))?/)
    if (!m) return null
    return (
      (m[1] === "-" ? -1 : 1) * (Number(m[2]) + (m[3] ? Number(m[3]) / 60 : 0))
    )
  }

  const fmt = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: "UTC"
  })
  const timeAt = (offsetHours) =>
    fmt.format(new Date(Date.now() + offsetHours * 3600 * 1000))

  const clocks = [...list.querySelectorAll("[data-utc-offset]")]
    .map((el) => ({
      out: el.querySelector("[data-tz-time]"),
      offset: parseOffset(el.dataset.utcOffset)
    }))
    .filter((c) => c.out && c.offset !== null)

  const local = document.querySelector("[data-tz-local]")
  const localOffset = -new Date().getTimezoneOffset() / 60
  const localLabel = `UTC${localOffset < 0 ? "-" : "+"}${Math.abs(localOffset)}`

  const render = () => {
    for (const { out, offset } of clocks)
      out.textContent = `· ${timeAt(offset)}`
    if (local) {
      local.textContent = `Your time: ${timeAt(localOffset)} (${localLabel})`
      local.hidden = false
    }
  }

  render()
  setInterval(render, 30 * 1000)
})
