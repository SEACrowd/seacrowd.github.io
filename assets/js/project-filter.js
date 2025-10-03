document.addEventListener("DOMContentLoaded", function () {
  const today = new Date()

  function getProjectStatus(project) {
    // Priority 1: Check status field for "completed"
    const explicitStatus = project.dataset.status
    if (explicitStatus === "completed") {
      return "completed"
    }

    // Priority 2: JavaScript client-side date comparison using fromDate and toDate
    const fromDateStr = project.dataset.fromDate
    const toDateStr = project.dataset.toDate

    if (fromDateStr && toDateStr) {
      const fromDate = new Date(fromDateStr)
      const toDate = new Date(toDateStr)

      if (!isNaN(fromDate) && !isNaN(toDate)) {
        // Project is completed if today is after toDate
        if (today > toDate) {
          return "completed"
        }
        // Project is ongoing if today is between fromDate and toDate
        if (today >= fromDate && today <= toDate) {
          return "ongoing"
        }
        // Project is upcoming if today is before fromDate
        if (today < fromDate) {
          return "upcoming"
        }
      }
    }

    // If only toDate exists, use it
    if (toDateStr) {
      const toDate = new Date(toDateStr)
      if (!isNaN(toDate) && today > toDate) {
        return "completed"
      }
    }

    // Priority 3: Fallback - if no dates or invalid dates, consider ongoing
    // (Jekyll build time fallback is handled in the HTML templates)
    return "ongoing"
  }

  // Update project status badges
  function updateStatusBadges() {
    const statusBadges = document.querySelectorAll(".project-status")
    statusBadges.forEach((badge) => {
      const projectItem =
        badge.closest(".project-item") || badge.closest("[data-from-date]")
      if (!projectItem) return

      const status = getProjectStatus(projectItem)

      if (status === "completed") {
        badge.textContent = "COMPLETED"
        badge.className = "badge bg-success ms-2 project-status"
      } else if (status === "upcoming") {
        badge.textContent = "UPCOMING"
        badge.className = "badge bg-info ms-2 project-status"
      } else {
        badge.textContent = "ONGOING"
        badge.className = "badge bg-warning text-dark ms-2 project-status"
      }
    })
  }

  function filterProjects() {
    // Filter all project items on the page
    const allProjectItems = document.querySelectorAll(".project-item")

    // Track counts for each section
    const ongoingContainer = document.querySelector(
      "#ongoing-projects-container"
    )
    const completedContainer = document.querySelector(
      "#completed-projects-container"
    )
    const ongoingMessage = document.querySelector(
      '.no-projects-message[data-type="ongoing"]'
    )
    const completedMessage = document.querySelector(
      '.no-projects-message[data-type="completed"]'
    )

    let ongoingCount = 0
    let completedCount = 0

    allProjectItems.forEach((item) => {
      const actualStatus = getProjectStatus(item)
      const isInOngoingSection =
        ongoingContainer && ongoingContainer.contains(item)
      const isInCompletedSection =
        completedContainer && completedContainer.contains(item)

      if (isInOngoingSection) {
        if (actualStatus === "ongoing" || actualStatus === "upcoming") {
          item.style.display = ""
          ongoingCount++
        } else {
          item.style.display = "none"
        }
      } else if (isInCompletedSection) {
        if (actualStatus === "completed") {
          item.style.display = ""
          completedCount++
        } else {
          item.style.display = "none"
        }
      }
    })

    // Show/hide no projects messages
    if (ongoingMessage) {
      ongoingMessage.style.display = ongoingCount === 0 ? "block" : "none"
    }
    if (completedMessage) {
      completedMessage.style.display = completedCount === 0 ? "block" : "none"
    }
  }

  // Update aside navigation
  function updateAsideNavigation() {
    const asideContainer = document.querySelector(".project-navigation")
    if (!asideContainer) return

    const projectLinks = asideContainer.querySelectorAll(
      "li[data-status], li[data-from-date], li[data-to-date]"
    )
    projectLinks.forEach((li) => {
      const status = getProjectStatus(li)
      const isInOngoingSection = li.closest("div:first-child")
      const isInCompletedSection = li.closest("div:last-child")

      if (
        isInOngoingSection &&
        (status === "ongoing" || status === "upcoming")
      ) {
        li.style.display = ""
      } else if (isInCompletedSection && status === "completed") {
        li.style.display = ""
      } else {
        li.style.display = "none"
      }
    })
  }

  // Update all project displays
  function updateProjectDisplays() {
    updateStatusBadges()
    filterProjects()
    updateAsideNavigation()
  }

  // Initial update
  updateProjectDisplays()

  // Export functions for external use
  window.projectFilter = {
    getProjectStatus,
    updateProjectDisplays,
    filterProjects
  }
})
