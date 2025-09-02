;(function () {
  "use strict"

  /**
   * The zoom service
   */
  function ZoomService() {
    this._activeZoom =
      this._initialScrollPosition =
      this._initialTouchPosition =
      this._touchMoveListener =
        null

    this._boundClick = this._clickHandler.bind(this)
  }

  ZoomService.prototype.listen = function () {
    document.body.addEventListener("click", this._handleClick.bind(this))
  }

  ZoomService.prototype._handleClick = function (e) {
    if (e.target.matches('[data-action="zoom"]')) {
      this._zoom(e)
    }
  }

  ZoomService.prototype._zoom = function (e) {
    var target = e.target

    if (!target || target.tagName != "IMG") return

    if (document.body.classList.contains("zoom-overlay-open")) return

    if (e.metaKey || e.ctrlKey) {
      return window.open(e.target.getAttribute("data-original") || e.target.src, "_blank")
    }

    if (target.width >= window.innerWidth - Zoom.OFFSET) return

    this._activeZoomClose(true)

    this._activeZoom = new Zoom(target)
    this._activeZoom.zoomImage()

    window.addEventListener("scroll", this._scrollHandler.bind(this), { passive: true })
    document.addEventListener("keyup", this._keyHandler.bind(this))
    document.addEventListener("touchstart", this._touchStart.bind(this), { passive: true })
    document.addEventListener("click", this._boundClick, true)

    e.stopPropagation()
  }

  ZoomService.prototype._activeZoomClose = function (forceDispose) {
    if (!this._activeZoom) return

    if (forceDispose) {
      this._activeZoom.dispose()
    } else {
      this._activeZoom.close()
    }

    window.removeEventListener("scroll", this._scrollHandler)
    document.removeEventListener("keyup", this._keyHandler)
    document.removeEventListener("touchstart", this._touchStart)
    document.removeEventListener("click", this._boundClick, true)

    this._activeZoom = null
  }

  ZoomService.prototype._scrollHandler = function (e) {
    if (this._initialScrollPosition === null) this._initialScrollPosition = window.pageYOffset
    var deltaY = this._initialScrollPosition - window.pageYOffset
    if (Math.abs(deltaY) >= 40) this._activeZoomClose()
  }

  ZoomService.prototype._keyHandler = function (e) {
    if (e.keyCode == 27) this._activeZoomClose()
  }

  ZoomService.prototype._clickHandler = function (e) {
    e.preventDefault()
    e.stopPropagation()
    this._activeZoomClose()
  }

  ZoomService.prototype._touchStart = function (e) {
    this._initialTouchPosition = e.touches[0].pageY
    e.target.addEventListener("touchmove", this._touchMove.bind(this), { passive: true })
  }

  ZoomService.prototype._touchMove = function (e) {
    if (Math.abs(e.touches[0].pageY - this._initialTouchPosition) > 10) {
      this._activeZoomClose()
      e.target.removeEventListener("touchmove", this._touchMove)
    }
  }

  /**
   * The zoom object
   */
  function Zoom(img) {
    this._fullHeight = this._fullWidth = this._overlay = this._targetImageWrap = null
    this._targetImage = img
  }

  Zoom.OFFSET = 80
  Zoom._MAX_WIDTH = 2560
  Zoom._MAX_HEIGHT = 4096

  Zoom.prototype.zoomImage = function () {
    var img = document.createElement("img")
    img.onload = function () {
      this._fullHeight = Number(img.height)
      this._fullWidth = Number(img.width)
      this._zoomOriginal()
    }.bind(this)
    img.src = this._targetImage.src
  }

  Zoom.prototype._zoomOriginal = function () {
    this._targetImageWrap = document.createElement("div")
    this._targetImageWrap.className = "zoom-img-wrap"

    this._targetImage.parentNode.insertBefore(this._targetImageWrap, this._targetImage)
    this._targetImageWrap.appendChild(this._targetImage)

    this._targetImage.classList.add("zoom-img")
    this._targetImage.setAttribute("data-action", "zoom-out")

    this._overlay = document.createElement("div")
    this._overlay.className = "zoom-overlay"

    document.body.appendChild(this._overlay)

    this._calculateZoom()
    this._triggerAnimation()
  }

  Zoom.prototype._calculateZoom = function () {
    this._targetImage.offsetWidth // repaint before animating

    var originalFullImageWidth = this._fullWidth
    var originalFullImageHeight = this._fullHeight

    var scrollTop = window.pageYOffset

    var maxScaleFactor = originalFullImageWidth / this._targetImage.width

    var viewportHeight = window.innerHeight - Zoom.OFFSET
    var viewportWidth = window.innerWidth - Zoom.OFFSET

    var imageAspectRatio = originalFullImageWidth / originalFullImageHeight
    var viewportAspectRatio = viewportWidth / viewportHeight

    if (originalFullImageWidth < viewportWidth && originalFullImageHeight < viewportHeight) {
      this._imgScaleFactor = maxScaleFactor
    } else if (imageAspectRatio < viewportAspectRatio) {
      this._imgScaleFactor = (viewportHeight / originalFullImageHeight) * maxScaleFactor
    } else {
      this._imgScaleFactor = (viewportWidth / originalFullImageWidth) * maxScaleFactor
    }
  }

  Zoom.prototype._triggerAnimation = function () {
    this._targetImage.offsetWidth // repaint before animating

    var imageRect = this._targetImage.getBoundingClientRect()
    var scrollTop = window.pageYOffset

    var viewportY = scrollTop + window.innerHeight / 2
    var viewportX = window.innerWidth / 2

    var imageCenterY = imageRect.top + scrollTop + this._targetImage.height / 2
    var imageCenterX = imageRect.left + this._targetImage.width / 2

    this._translateY = viewportY - imageCenterY
    this._translateX = viewportX - imageCenterX

    var targetTransform = "scale(" + this._imgScaleFactor + ")"
    var imageWrapTransform =
      "translate(" + this._translateX + "px, " + this._translateY + "px) translateZ(0)"

    this._targetImage.style.transform = targetTransform
    this._targetImageWrap.style.transform = imageWrapTransform

    document.body.classList.add("zoom-overlay-open")
  }

  Zoom.prototype.close = function () {
    document.body.classList.remove("zoom-overlay-open")
    document.body.classList.add("zoom-overlay-transitioning")

    this._targetImage.style.transform = ""
    this._targetImageWrap.style.transform = ""

    this._targetImage.addEventListener("transitionend", this.dispose.bind(this), { once: true })

    // Fallback for browsers without transition support
    setTimeout(this.dispose.bind(this), 300)
  }

  Zoom.prototype.dispose = function () {
    if (this._targetImageWrap && this._targetImageWrap.parentNode) {
      this._targetImage.classList.remove("zoom-img")
      this._targetImage.setAttribute("data-action", "zoom")

      this._targetImageWrap.parentNode.replaceChild(this._targetImage, this._targetImageWrap)
      if (this._overlay && this._overlay.parentNode) {
        this._overlay.parentNode.removeChild(this._overlay)
      }

      document.body.classList.remove("zoom-overlay-transitioning")
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      new ZoomService().listen()
    })
  } else {
    new ZoomService().listen()
  }
})()
