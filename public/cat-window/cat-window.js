/* Official @rive-app/webgl2 2.46.0, self-hosted; no network CDN dependency. */
(() => {
  const figure = document.querySelector('.cat-scene');
  const canvas = document.querySelector('#cat-canvas');
  const toggle = document.querySelector('#motion-toggle');
  const status = document.querySelector('#status');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let player, loaded = false, visible = true, paused = false, disposed = false;

  const resize = () => {
    // Cap pixel density to limit GPU memory on very dense displays.
    if (loaded) player.resizeDrawingSurfaceToCanvas(Math.min(devicePixelRatio || 1, 2));
  };
  function sync() {
    const running = !reduced.matches && !paused && visible && !document.hidden;
    if (!player && running && !disposed) init();
    if (!loaded) return;
    toggle.hidden = reduced.matches;
    if (running) {
      player.play('CatStateMachine');
      player.startRendering();
    } else {
      player.pause('CatStateMachine');
      player.stopRendering();
    }
    // Reduced motion always shows the original resting SVG, even mid-loop.
    figure.classList.toggle('is-playing', !reduced.matches);
  }
  function init() {
    if (!window.rive) {
      status.textContent = 'Showing the still illustration; the animation runtime could not load.';
      return;
    }
    rive.RuntimeLoader.setWasmUrl(new URL('./vendor/rive.wasm', location.href).href);
    rive.RuntimeLoader.setWasmFallbackUrl(new URL('./vendor/rive_fallback.wasm', location.href).href);
    player = new rive.Rive({
      src: new URL('./cat-window.riv', location.href).href,
      canvas,
      artboard: 'CatWindow',
      stateMachine: 'CatStateMachine',
      autoplay: true,
      shouldDisableRiveListeners: true,
      layout: new rive.Layout({ fit: rive.Fit.Contain, alignment: rive.Alignment.Center }),
      onLoad: () => {
        if (disposed) return;
        loaded = true;
        resize();
        sync();
      },
      onLoadError: () => {
        figure.classList.remove('is-playing');
        toggle.hidden = true;
        status.textContent = 'Showing the still illustration; the animation could not load.';
        player?.cleanup();
        loaded = false;
      },
    });
  }
  function onToggle() {
    paused = !paused;
    toggle.textContent = paused ? 'Play animation' : 'Pause animation';
    sync();
  }
  toggle.addEventListener('click', onToggle);
  reduced.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  window.addEventListener('resize', resize, { passive: true });
  const sizeObserver = new ResizeObserver(resize);
  sizeObserver.observe(figure);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  });
  visibilityObserver.observe(figure);
  // pagehide covers navigation; keep the instance intact in the back/forward cache.
  window.addEventListener('pagehide', (event) => {
    if (event.persisted) { player?.stopRendering(); return; }
    disposed = true;
    sizeObserver.disconnect();
    visibilityObserver.disconnect();
    reduced.removeEventListener('change', sync);
    document.removeEventListener('visibilitychange', sync);
    window.removeEventListener('resize', resize);
    toggle.removeEventListener('click', onToggle);
    player?.cleanup();
  });
  window.addEventListener('pageshow', sync);
  sync();
})();
