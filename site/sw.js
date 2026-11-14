/**
 * Sentis Internal Core System - Service Worker (v5)
 * PWA 渐进式 Web 应用缓存与离线可用性中枢
 */

const CACHE_NAME = 'sentis-crm-pwa-v5';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './crm-home.html',
  './crm-login.html',
  './document.html',
  './login.html',
  './prototype-crm.html',
  './assets/css/portal.css',
  './assets/css/slide-deck.css',
  './assets/css/sentis-horology-v2.css',
  './assets/js/slide-deck.js',
  './assets/js/flowchart.js',
  './assets/js/flows-data.js',
  './assets/js/sentis-horology-v2.js',
  './js/docs-data.js',
  './assets/logo/apple-touch-icon.png',
  './assets/logo/favicon-32x32.png',
  './assets/logo/favicon.ico',
  './icon-192.png',
  './icon-192-maskable.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './manifest.webmanifest'
];

// 1. 安装阶段：预缓存核心静态资产并立即生效
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        PRECACHE_ASSETS.map((url) => {
          return cache.add(url).catch((err) => {
            console.warn('[Sentis PWA] Precache warning for', url, err);
          });
        })
      );
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// 2. 激活阶段：清理旧版本缓存并取得所有客户端控制权
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// 3. 请求拦截：针对 HTML / JS / CSS 采用 Network-First（确保发布后立即呈现最新文档与流程图），针对图标/字体采用 Stale-While-Revalidate
self.addEventListener('fetch', (event) => {
  const req = event.request;

  if (req.method !== 'GET' || !req.url.startsWith('http')) {
    return;
  }

  const url = new URL(req.url);
  const isCodeOrDoc =
    req.mode === 'navigate' ||
    url.pathname.endsWith('.html') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.webmanifest');

  if (isCodeOrDoc) {
    event.respondWith(
      fetch(req).then((networkRes) => {
        if (networkRes && networkRes.status === 200) {
          const resClone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, resClone);
          });
        }
        return networkRes;
      }).catch(() => {
        return caches.match(req).then((cachedRes) => {
          if (cachedRes) return cachedRes;
          if (req.mode === 'navigate') return caches.match('./index.html');
          return new Response('/* Offline */', { status: 503, statusText: 'Offline' });
        });
      })
    );
    return;
  }

  // 图像与其它静态资产：Stale-While-Revalidate，确保离线未命中时始终返回合法 Response
  event.respondWith(
    caches.match(req).then((cachedRes) => {
      const fetchPromise = fetch(req).then((networkRes) => {
        if (networkRes && networkRes.status === 200) {
          const resClone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, resClone);
          });
        }
        return networkRes;
      }).catch(() => {
        return cachedRes || new Response('', { status: 504, statusText: 'Offline cache miss' });
      });

      return cachedRes || fetchPromise;
    })
  );
});
