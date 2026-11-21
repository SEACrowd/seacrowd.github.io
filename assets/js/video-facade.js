// Click-to-load embeds: the YouTube iframe (and its ~1 MB of scripts) only loads
// after the visitor clicks the thumbnail. Markup: _includes/video.html.
document.addEventListener("DOMContentLoaded", () => {
  for (const facade of document.querySelectorAll("[data-video-id]")) {
    const button = facade.querySelector(".video-facade__button")
    if (!button) continue

    button.addEventListener(
      "click",
      () => {
        const iframe = document.createElement("iframe")
        iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
          facade.dataset.videoId
        )}?autoplay=1&rel=0&modestbranding=1`
        iframe.title = facade.dataset.title || "Video"
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true
        facade.replaceChildren(iframe)
      },
      { once: true }
    )
  }
})
