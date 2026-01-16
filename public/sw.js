// Service Worker for HDI SCA Practice
// Strategy: Stale-While-Revalidate for Assets, Cache First for Fonts/Images
const CACHE_NAME = 'hdi-sca-v2';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  // Adicione aqui outros assets estáticos conhecidos se necessário
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => console.error('Cache init failed', err));
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Ignora requests que não sejam HTTP (ex: chrome-extension)
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Stale-While-Revalidate Strategy
      // 1. Return cached response immediately if available
      // 2. Fetch from network in background to update cache
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(err => {
         // Network failed, nothing to do (user gets cached version)
         console.log('Offline mode - network fail', err);
      });

      return cachedResponse || fetchPromise;
    })
  );
});
