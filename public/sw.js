self.addEventListener('install', function (event) {
    console.log('Service Worker installing.', event);
});

self.addEventListener('activate', function (event) {
    console.log('Service Worker activating.', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    event.respondWith(fetch(event.request));
});