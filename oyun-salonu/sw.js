/* FOZ Yapım Oyun Salonu — service worker
   - Salonun kendi dosyalarını saklar.
   - /oyun-salonu/oyna/<oyun>/ adreslerini sitedeki gerçek oyuna (/<oyun>/) bağlar,
     internet varken en yeni sürümü getirir, yoksa saklanan kopyayı açar. */
const SHELL = 'foz-salon-kabuk-v7';
const GAMES = 'foz-salon-oyunlar-v1';
const BASE = new URL('./', self.location).pathname;          // /oyun-salonu/
const PROXY = BASE + 'oyna/';
const SHELL_FILES = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png',
  ...['shadow-runner','neon-drift','neon-tower','tas-kagit-makas','xox-sos','mayin-tarlasi','dordu-bir-yerde','neon-hafiza','neon-tugla','neon-yilan','neon-kelime','neon-hesap','neon-2048','neon-olimpiyat','hayal-evim','neon-english','neon-blok'].map(g => `./img/${g}.webp`)];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(SHELL_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('foz-salon-kabuk-') && k !== SHELL).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

function timeout(ms) { return new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms)); }

async function networkFirst(fetchUrl, cacheName, cacheKey, isNav) {
  const cache = await caches.open(cacheName);
  try {
    const res = await Promise.race([fetch(fetchUrl, { cache: 'no-cache', credentials: 'same-origin' }), timeout(6000)]);
    if (res && res.ok) { cache.put(cacheKey, res.clone()).catch(() => {}); return res; }
    const hit = await cache.match(cacheKey, { ignoreSearch: true });
    return hit || res;
  } catch (err) {
    let hit = await cache.match(cacheKey, { ignoreSearch: true });
    if (!hit && cacheKey.endsWith('/')) hit = await cache.match(cacheKey + 'index.html', { ignoreSearch: true });
    if (hit) return hit;
    if (isNav) return new Response(`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#07071a;color:#ecebff;font-family:system-ui;text-align:center;padding:24px"><div><div style="font-size:52px">📡</div><h2 style="color:#00f0ff">İnternet yok</h2><p>Bu oyun henüz bu cihaza kaydedilmedi.<br>İnternete bağlanınca bir kez aç, sonra internetsiz de oynanır.</p></div>`, { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
    return Response.error();
  }
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const isNav = req.mode === 'navigate';
  if (url.pathname.startsWith(PROXY)) {
    // /oyun-salonu/oyna/neon-kelime/sozluk.js  ->  /neon-kelime/sozluk.js
    const realPath = '/' + url.pathname.slice(PROXY.length);
    const real = new URL(realPath + url.search, url.origin).href;
    e.respondWith((async () => {
      const res = await networkFirst(real, GAMES, new URL(realPath, url.origin).href, isNav);
      // Yeni bir yanıt üret: belge adresi /oyun-salonu/oyna/... olarak kalsın, göreli dosyalar da buradan gelsin.
      if (!res || res.type === 'error') return res;
      const body = await res.blob();
      return new Response(body, { status: res.status, statusText: res.statusText, headers: res.headers });
    })());
    return;
  }
  if (url.pathname.startsWith(BASE)) {
    const key = isNav ? new URL(BASE, url.origin).href : url.href;
    e.respondWith(networkFirst(isNav ? key : url.href, SHELL, key, isNav));
  }
});
