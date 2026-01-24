document.addEventListener("DOMContentLoaded", () => {
  const statusTimeouts = new WeakMap()

  const htmlToMarkdown = (element) => {
    const lines = []
    const walk = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        lines.push(node.textContent)
        return
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return

      const tag = node.tagName.toLowerCase()
      switch (tag) {
        case "h1":
          lines.push("\n# " + node.textContent.trim() + "\n")
          break
        case "h2":
          lines.push("\n## " + node.textContent.trim() + "\n")
          break
        case "h3":
          lines.push("\n### " + node.textContent.trim() + "\n")
          break
        case "h4":
          lines.push("\n#### " + node.textContent.trim() + "\n")
          break
        case "h5":
          lines.push("\n##### " + node.textContent.trim() + "\n")
          break
        case "h6":
          lines.push("\n###### " + node.textContent.trim() + "\n")
          break
        case "p":
          node.childNodes.forEach(walk)
          lines.push("\n\n")
          break
        case "strong":
        case "b":
          lines.push("**" + node.textContent + "**")
          break
        case "em":
        case "i":
          lines.push("*" + node.textContent + "*")
          break
        case "a":
          lines.push("[" + node.textContent + "](" + node.href + ")")
          break
        case "ul":
        case "ol":
          lines.push("\n")
          node.childNodes.forEach(walk)
          lines.push("\n")
          break
        case "li":
          lines.push("- " + node.textContent.trim() + "\n")
          break
        case "br":
          lines.push("\n")
          break
        case "code":
          lines.push("`" + node.textContent + "`")
          break
        case "pre":
          lines.push("\n```\n" + node.textContent + "\n```\n")
          break
        default:
          node.childNodes.forEach(walk)
      }
    }
    element.childNodes.forEach(walk)
    return lines
      .join("")
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  }

  const buildMarkdown = (modal) => {
    const title = modal.querySelector(".modal-title")?.textContent?.trim() || ""
    const body = modal.querySelector(".modal-body")
    if (!body) return ""

    const parts = ["# " + title + "\n"]

    const summary = body.querySelector(".project-modal-summary")
    if (summary) {
      parts.push("\n" + summary.textContent.trim() + "\n")
    }

    body.querySelectorAll(".project-modal-meta").forEach((meta) => {
      parts.push("\n" + htmlToMarkdown(meta))
    })

    const links = body.querySelector(".project-modal-links")
    if (links) {
      parts.push("\n\n**Resources:**\n")
      links.querySelectorAll("a").forEach((a) => {
        parts.push("- [" + a.textContent + "](" + a.href + ")\n")
      })
    }

    const proposal = body.querySelector(".project-modal-proposal")
    if (proposal) {
      parts.push("\n\n## Project proposal\n\n")
      const content = proposal.cloneNode(true)
      const heading = content.querySelector("h6")
      if (heading) heading.remove()
      parts.push(htmlToMarkdown(content))
    }

    return parts
      .join("")
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  }

  const copyText = async (text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
      return
    }

    const textarea = document.createElement("textarea")
    textarea.value = text
    textarea.setAttribute("readonly", "")
    textarea.style.position = "fixed"
    textarea.style.opacity = "0"
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    document.body.removeChild(textarea)
  }

  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-copy-markdown]")
    if (!button) return

    const modal = button.closest(".modal")
    if (!modal) return

    try {
      const markdown = buildMarkdown(modal)
      await copyText(markdown)

      const status = modal.querySelector(".project-copy-status")
      if (status) {
        status.textContent = "Copied!"
        const prev = statusTimeouts.get(status)
        if (prev) clearTimeout(prev)
        statusTimeouts.set(
          status,
          setTimeout(() => {
            status.textContent = ""
          }, 2000)
        )
      }
    } catch (error) {
      console.error("Copy failed", error)
    }
  })
})
