// Search + time zone + tag filtering for the apprentice project list.
// Markup comes from _includes/project-cards.html (filters=true).
document.addEventListener("DOMContentLoaded", () => {
  const NEARBY_HOURS = 3

  const bar = document.querySelector("[data-project-filters]")
  const list = document.querySelector("[data-project-list]")
  if (!bar || !list) return

  const rows = [...list.querySelectorAll(".project-row")]
  const search = bar.querySelector("[data-filter-search]")
  const tzSelect = bar.querySelector("[data-filter-tz]")
  const nearbyLabel = bar.querySelector("[data-filter-nearby-label]")
  const nearby = bar.querySelector("[data-filter-nearby]")
  const chips = [...bar.querySelectorAll("[data-filter-tag]")]
  const clearBtn = bar.querySelector("[data-filter-clear]")
  const status = bar.querySelector("[data-filter-status]")
  const empty = list.querySelector("[data-filter-empty]")

  // "UTC-5 / UTC+8" -> [-5, 8]; "UTC+5:30" -> [5.5]
  const parseOffsets = (text) =>
    [...text.matchAll(/UTC([+-])(\d{1,2})(?::(\d{2}))?/g)].map(
      ([, sign, h, m]) =>
        (sign === "-" ? -1 : 1) * (Number(h) + (m ? Number(m) / 60 : 0))
    )
  const formatOffset = (o) => {
    const sign = o < 0 ? "-" : "+"
    const abs = Math.abs(o)
    const h = Math.floor(abs)
    const m = Math.round((abs - h) * 60)
    return `UTC${sign}${h}${m ? ":" + String(m).padStart(2, "0") : ""}`
  }

  const items = rows.map((el) => ({
    el,
    tags: el.dataset.tags ? el.dataset.tags.split("|") : [],
    offsets: parseOffsets(el.dataset.timezone || ""),
    text: el.textContent.toLowerCase().replace(/\s+/g, " ")
  }))

  // Time zone options: every offset used by at least one mentor
  const allOffsets = [...new Set(items.flatMap((i) => i.offsets))].sort(
    (a, b) => a - b
  )
  if (allOffsets.length > 0) {
    for (const o of allOffsets) {
      const opt = document.createElement("option")
      opt.value = String(o)
      opt.textContent = formatOffset(o)
      tzSelect.append(opt)
    }
    tzSelect.hidden = false
    nearbyLabel.hidden = false
  }

  // Tag counts
  for (const chip of chips) {
    const tag = chip.dataset.filterTag
    chip.querySelector("[data-tag-count]").textContent = items.filter((i) =>
      i.tags.includes(tag)
    ).length
  }

  const selectedTags = new Set()

  function apply() {
    const query = search.value.trim().toLowerCase()
    const tz = tzSelect.value === "" ? null : Number(tzSelect.value)
    const window = nearby.checked ? NEARBY_HOURS : 0
    let shown = 0

    for (const item of items) {
      const matchesText =
        query === "" || query.split(" ").every((w) => item.text.includes(w))
      const matchesTags =
        selectedTags.size === 0 || item.tags.some((t) => selectedTags.has(t))
      const matchesTz =
        tz === null || item.offsets.some((o) => Math.abs(o - tz) <= window)
      const visible = matchesText && matchesTags && matchesTz
      item.el.hidden = !visible
      if (visible) shown++
    }

    const filtering = query !== "" || tz !== null || selectedTags.size > 0
    empty.hidden = shown !== 0
    if (clearBtn) clearBtn.hidden = !filtering
    status.textContent = filtering
      ? `Showing ${shown} of ${items.length} projects`
      : `${items.length} projects`
  }

  search.addEventListener("input", apply)
  tzSelect.addEventListener("change", apply)
  nearby.addEventListener("change", apply)
  for (const chip of chips) {
    chip.addEventListener("click", () => {
      const tag = chip.dataset.filterTag
      const on = !selectedTags.has(tag)
      on ? selectedTags.add(tag) : selectedTags.delete(tag)
      chip.setAttribute("aria-pressed", String(on))
      apply()
    })
  }
  clearBtn?.addEventListener("click", () => {
    search.value = ""
    tzSelect.value = ""
    nearby.checked = false
    selectedTags.clear()
    for (const chip of chips) chip.setAttribute("aria-pressed", "false")
    apply()
  })

  bar.hidden = false
  apply()
})
