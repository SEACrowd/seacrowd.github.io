document.addEventListener("DOMContentLoaded", function () {
  const today = new Date()

  // Update project status badges
  function updateStatusBadges() {
    const statusBadges = document.querySelectorAll(".project-status")
    statusBadges.forEach((badge) => {
      const toDateStr = badge.dataset.toDate
      const toDate = toDateStr ? new Date(toDateStr) : null

      if (toDate && !isNaN(toDate) && toDate < today) {
        badge.textContent = "COMPLETED"
        badge.className = "badge bg-success ms-2 project-status"
      } else {
        badge.textContent = "ONGOING"
        badge.className = "badge bg-warning text-dark ms-2 project-status"
      }
    })
  }

  function filterProjects(type) {
    const items = document.querySelectorAll(`.project-item.${type}`)
    const message = document.querySelector(
      `.no-projects-message[data-type="${type}"]`
    )
    let visible = 0

    items.forEach((item) => {
      const toDateStr = item.dataset.toDate
      const toDate = toDateStr ? new Date(toDateStr) : null

      if (type === "ongoing") {
        if (!toDate || (!isNaN(toDate) && toDate >= today)) {
          item.style.display = ""
          visible++
        } else {
          item.style.display = "none"
        }
      } else if (type === "completed") {
        if (toDate && !isNaN(toDate) && toDate < today) {
          item.style.display = ""
          visible++
        } else {
          item.style.display = "none"
        }
      }
    })

    if (visible === 0 && message) {
      message.style.display = "block"
    }
  }

  // Update status badges first
  updateStatusBadges()

  // Then filter projects
  filterProjects("ongoing")
  filterProjects("completed")
})
