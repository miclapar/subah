self.addEventListener('install', (e) => {
      e.waitUntil(caches.open('v1').then((cache) => cache.addAll(['index.html'])));
    });
    self.addEventListener('fetch', (e) => {
      e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
    });
    ```

**Selesai!** Sekarang website Anda sudah memiliki fitur lengkap: Portal informasi, Agenda terbaru, dan Aplikasi Mobile yang bisa diinstal orang tua.
