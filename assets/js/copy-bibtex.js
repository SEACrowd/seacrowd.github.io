async function writeClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text)
    return
  }
  const area = document.createElement("textarea")
  area.value = text
  area.setAttribute("readonly", "")
  area.style.position = "fixed"
  area.style.opacity = "0"
  document.body.appendChild(area)
  area.select()
  try {
    if (!document.execCommand("copy")) throw new Error("copy command failed")
  } finally {
    document.body.removeChild(area)
  }
}

document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-bibtex]")
  if (!button) return

  const idleLabel = button.dataset.idleLabel || button.textContent.trim()
  button.dataset.idleLabel = idleLabel
  clearTimeout(button.resetTimer)

  try {
    await writeClipboard(button.dataset.copyBibtex)
    button.textContent = "Copied!"
  } catch (err) {
    console.error("Copy BibTeX failed", err)
    button.textContent = "Copy failed"
  }
  button.resetTimer = setTimeout(() => {
    button.textContent = idleLabel
  }, 2000)
})
