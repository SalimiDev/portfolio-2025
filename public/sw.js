const CACHE_NAME = 'portfolio-v1';

const PRECACHE_ASSETS = [
    '/fonts/poppins/poppins-regular.woff2',
    '/fonts/poppins/poppins-medium.woff2',
    '/fonts/poppins/poppins-semibold.woff2',
    '/fonts/poppins/poppins-bold.woff2',
    '/fonts/silka/silka-regular.woff2',
    '/fonts/silka/silka-regularitalic.woff2'
];

// Install: precache fonts
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
    );
    self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            )
        )
    );
    self.clients.claim();
});

// Fetch: cache-first for static assets, network-first for everything else
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Only handle same-origin GET requests
    if (request.method !== 'GET' || url.origin !== self.location.origin) return;

    // Cache-first for fonts, images, and hashed Next.js static assets
    if (
        url.pathname.startsWith('/fonts/') ||
        url.pathname.startsWith('/images/') ||
        url.pathname.startsWith('/_next/static/') ||
        url.pathname.endsWith('.woff2') ||
        url.pathname.endsWith('.webp') ||
        url.pathname.endsWith('.png') ||
        url.pathname.endsWith('.ico')
    ) {
        event.respondWith(
            caches.match(request).then((cached) => {
                if (cached) return cached;
                return fetch(request).then((response) => {
                    if (response.ok) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
                    }
                    return response;
                });
            })
        );
        return;
    }
});
