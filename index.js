/**
 * Check if device is mobile
 *
 * @returns {Boolean}
 */
function isMobile () {
  var check = false;
  (function (a) {
    if (/(android|webOS|ip(hone|ad|od)|blackberry|windows phone)/i.test(a)) check = true
  })(navigator.userAgent || navigator.vendor || window.opera)
  return check
}

/**
 * Resize handler
 *
 * @arg cb {Event}
 */
function onResize (cb) {
  // Create resize handler
  function handler (e) {
    return cb(window.innerWidth, window.innerHeight, e)
  }

  // Add resize listeners
  window.addEventListener('resize', handler)
  window.addEventListener('orientationchange', handler)

  // Immediately execute the resize handler
  handler()
}

/**
 * setProperty function
 *
 * @void
 */
const setProp = (h) => {
  document.documentElement.style.setProperty('--vh', `${h}px`)
  window.vh = h
}

/**
 * Main execution function
 *
 * @void
 */
function main (width, height, e) {
  requestAnimationFrame(function () {
    var changedOrientation = e && e.type === 'orientationchange'
    var resize = e && e.type === 'resize'

    if (!isMobile() || changedOrientation || changedOrientation === undefined) {
      var calculatedHeight = changedOrientation ? width : height
      setProp(calculatedHeight)
    }
    if (!isMobile() || resize || resize === undefined) {
      var calculatedHeight = height
      setProp(calculatedHeight)
    }
  })
}

// Fire main function with resize listeners
function init () {
  onResize(main)
}

export default { init }