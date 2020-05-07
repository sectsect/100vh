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
const onResize = (cb: any) => {
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
 * setProperty function
 *
 * @void
 */
const setProp = (h: number) => {
  document.documentElement.style.setProperty('--vh', `${h}px`);
  window.vh = h;
}

/**
 * Main execution function
 *
 * @void
 */
const main = (width: number, height: number, e: Event) => {
  requestAnimationFrame(function () {
    const changedOrientation = e && e.type === 'orientationchange';
    const resize = e && e.type === 'resize';

    setProp(height);
    if (!isMobile().any || changedOrientation || changedOrientation === undefined) {
      const calculatedHeight = changedOrientation ? width : height;
      setProp(calculatedHeight);
    }
    if (!isMobile().any || resize || resize === undefined) {
      const calculatedHeight = height;
      setProp(calculatedHeight);
    }
  })
}

// Fire main function with resize listeners
const init = () => {
  onResize(main);
}

export default { init };
