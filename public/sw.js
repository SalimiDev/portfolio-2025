const CACHE_NAME = 'portfolio-static-v2';

self.addEventListener('install', () => {
    self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys
                    .filter((key) => key.startsWith('portfolio-') && key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            )
        )
    );
    self.clients.claim();
});

// Hashed Next.js assets are immutable; public images use stale-while-revalidate.
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Only handle same-origin GET requests
    if (request.method !== 'GET' || url.origin !== self.location.origin) return;

    const isHashedAsset = url.pathname.startsWith('/_next/static/');
    const isPublicAsset =
        url.pathname.startsWith('/images/') ||
        url.pathname.endsWith('.webp') ||
        url.pathname.endsWith('.png') ||
        url.pathname.endsWith('.ico');

    if (isHashedAsset) {
        event.respondWith(
            (async () => {
                const cached = await caches.match(request);
                if (cached) return cached;
                const response = await fetch(request);
                if (response.ok) {
                    const cache = await caches.open(CACHE_NAME);
                    await cache.put(request, response.clone());
                }
                return response;
            })()
        );
        return;
    }

    if (isPublicAsset) {
        event.respondWith(
            (async () => {
                const cache = await caches.open(CACHE_NAME);
                const cached = await cache.match(request);
                const networkResponse = fetch(request).then(async (response) => {
                    if (response.ok) await cache.put(request, response.clone());

                    return response;
                });

                if (cached) {
                    event.waitUntil(networkResponse.then(() => undefined).catch(() => undefined));

                    return cached;
                }

                return networkResponse;
            })()
        );
    }
});
