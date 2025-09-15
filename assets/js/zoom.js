// Modern image zoom using medium-zoom
document.addEventListener("DOMContentLoaded", function () {
  // Use CSS selector to exclude images we don't want to zoom
  const images = document.querySelectorAll(
    "main img:not(.profile-thumbnail):not(a img):not(.card img):not(.clickable-card img), main .bibliography-preview"
  )

  if (images.length) {
    mediumZoom(images, {
      background: "rgba(255, 255, 255, 0.8)",
      scrollOffset: 40,
      container: { top: 20, bottom: 20, left: 10, right: 10 }
    })
  }
})
