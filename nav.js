// nav.js — optional site navigation bar
// Drop this file alongside any tool. If absent, nothing happens.
// Injects a slim "← gorgon.live" bar at the top of the page.

(function () {
  const BAR_HEIGHT = 36;

  const bar = document.createElement('div');
  bar.id = 'gorgon-nav';
  bar.style.cssText = [
    'position: fixed',
    'top: 0',
    'left: 0',
    'right: 0',
    'z-index: 9999',
    'height: ' + BAR_HEIGHT + 'px',
    'background: rgba(10,10,10,0.92)',
    'backdrop-filter: blur(8px)',
    '-webkit-backdrop-filter: blur(8px)',
    'border-bottom: 1px solid rgba(255,255,255,0.07)',
    'display: flex',
    'align-items: center',
    'padding: 0 20px',
    'gap: 16px',
    'font-family: "JetBrains Mono", "Fira Mono", "Courier New", monospace',
    'font-size: 11px',
    'letter-spacing: 0.08em',
  ].join(';');

  bar.innerHTML = `
    <a href="/"
       id="gorgon-nav-link"
       style="
         color: rgba(255,255,255,0.35);
         text-decoration: none;
         text-transform: uppercase;
         letter-spacing: 0.12em;
         transition: color 0.15s ease;
         display: flex;
         align-items: center;
         gap: 7px;
       "
    >
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0">
        <path d="M5 1L1 5L5 9M1 5H11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      gorgon.live
    </a>
  `;

  // Hover effect
  const link = bar.querySelector('#gorgon-nav-link');
  link.addEventListener('mouseenter', () => link.style.color = 'rgba(255,255,255,0.75)');
  link.addEventListener('mouseleave', () => link.style.color = 'rgba(255,255,255,0.35)');

  // Insert bar at top of body
  document.body.insertBefore(bar, document.body.firstChild);

  // Push any existing fixed nav bars down (e.g. NMS hub-nav)
  // and add padding to the body so content isn't hidden behind both bars
  function nudgeFixed() {
    // Any element with position:fixed and top:0 that isn't our bar
    const candidates = document.querySelectorAll(
      '.hub-nav, nav[style*="fixed"], header[style*="fixed"], [class*="nav"], [class*="header"]'
    );
    candidates.forEach(function(el) {
      if (el === bar) return;
      const computed = window.getComputedStyle(el);
      if (computed.position === 'fixed') {
        const currentTop = parseInt(computed.top) || 0;
        if (currentTop < BAR_HEIGHT) {
          el.style.top = (currentTop + BAR_HEIGHT) + 'px';
        }
      }
    });

    // Also bump body padding-top so page content clears both bars
    const currentPad = parseInt(window.getComputedStyle(document.body).paddingTop) || 0;
    if (currentPad < BAR_HEIGHT) {
      document.body.style.paddingTop = (currentPad + BAR_HEIGHT) + 'px';
    }
  }

  // Run after DOM is ready (handles cases where nav renders after script)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', nudgeFixed);
  } else {
    nudgeFixed();
  }
})();
