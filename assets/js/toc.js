/**
 * Table of Contents - Active Heading Highlighter
 * Highlights the current section in the TOC based on scroll position
 */
;(function () {
  const tocNav = document.getElementById("toc-nav")
  if (!tocNav) return // Exit if no TOC on page

  const tocLinks = tocNav.querySelectorAll("a")
  const headings = Array.from(tocLinks).map((link) => {
    const id = link.getAttribute("href").slice(1)
    return document.getElementById(id)
  })

  // Intersection Observer for more accurate tracking
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0
  }

  let activeLink = null

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        const newActiveLink = tocNav.querySelector(`a[href="#${id}"]`)

        if (newActiveLink && newActiveLink !== activeLink) {
          // Remove active class from previous link
          if (activeLink) {
            activeLink.classList.remove("active")
          }

          // Add active class to new link
          newActiveLink.classList.add("active")
          activeLink = newActiveLink

          // Optionally scroll the TOC to keep active link visible
          if (newActiveLink.offsetTop < tocNav.scrollTop) {
            tocNav.scrollTop = newActiveLink.offsetTop - 30
          } else if (
            newActiveLink.offsetTop + newActiveLink.offsetHeight >
            tocNav.scrollTop + tocNav.clientHeight
          ) {
            tocNav.scrollTop =
              newActiveLink.offsetTop +
              newActiveLink.offsetHeight -
              tocNav.clientHeight +
              30
          }
        }
      }
    })
  }, observerOptions)

  // Observe all headings
  headings.forEach((heading) => {
    if (heading) observer.observe(heading)
  })

  // Set initial active link
  if (tocLinks.length > 0) {
    tocLinks[0].classList.add("active")
    activeLink = tocLinks[0]
  }

  // Cleanup on page unload
  window.addEventListener("beforeunload", () => {
    headings.forEach((heading) => {
      if (heading) observer.unobserve(heading)
    })
  })
})()
