/**
 * Sentis Internal Core System - Service Worker
 * PWA 渐进式 Web 应用缓存与离线可用性中枢
 */

const CACHE_NAME = 'sentis-crm-pwa-v3';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './crm-home.html',
  './crm-login.html',
  './document.html',
  './login.html',
  './prototype-crm.html',
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

// 3. 请求拦截：针对文档采用网络优先（断网回退缓存），针对静态资产采用缓存优先（后台更新）
self.addEventListener('fetch', (event) => {
  const req = event.request;

  if (req.method !== 'GET' || !req.url.startsWith('http')) {
    return;
  }

  // 页面导航请求：Network-First，断网回退至缓存页面
  if (req.mode === 'navigate') {
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
          return caches.match('./index.html');
        });
      })
    );
    return;
  }

  // 静态资源请求：Stale-While-Revalidate（缓存响应加速，后台拉取更新）
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
        // 静默捕获离线错误
      });

      return cachedRes || fetchPromise;
    })
  );
});
