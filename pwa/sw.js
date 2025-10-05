const CACHE_NAME = 'rb-logger-v1';
const ASSETS = [
  '.',
  'index.html',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', event => {
  // Pre-cache assets for offline use
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // Serve cached assets if available
  if (url.origin === location.origin) {
    const path = url.pathname.startsWith('/') ? url.pathname.slice(1) : url.pathname;
    if (ASSETS.includes(path) || path === '') {
      event.respondWith(
        caches.match(event.request).then(resp => resp || fetch(event.request))
      );
      return;
    }
  }
  // Default: network first, fallback to offline response
  event.respondWith(
    fetch(event.request).catch(() => new Response('Offline', {status: 503, statusText:'Offline'}))
  );
});
