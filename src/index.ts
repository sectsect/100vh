import isMobile from 'ismobilejs';

declare global {
  interface Window {
    opera: string,
    vh: number
  }
}

/**
 * Resize handler
 *
 * @arg cb {Event}
 */
function onResize (cb: any) {
  // Create resize handler
  function handler (e: Event) {
    return cb(window.innerWidth, window.innerHeight, e);
  }

  // Add resize listeners
  window.addEventListener('resize', handler);
  window.addEventListener('orientationchange', handler);

  // Immediately execute the resize handler
  handler(cb);
}


/**
 * Main execution function
 *
 * @void
 */
function main (width: number, height: number, e: Event) {
  requestAnimationFrame(() => {
    const changedOrientation = e && e.type === 'orientationchange';

    if (!isMobile().phone || changedOrientation || changedOrientation === undefined) {
      const calculatedHeight = changedOrientation ? width : height;
      document.documentElement.style.setProperty('--vh', `${calculatedHeight}px`);
      window.vh = calculatedHeight;
    }
  })
}

// Fire main function with resize listeners
function init () {
  onResize(main);
}

export default { init };

