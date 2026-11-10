// Service worker mínimo solo para instalar el lanzador. NO almacena datos de Campy.
const CACHE='campy-launcher-v320';
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png']))));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(url.origin===self.location.origin&&event.request.method==='GET')event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)))});
