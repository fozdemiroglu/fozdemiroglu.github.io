# FOZ Yapım Oyun Salonu

## [▶ AÇ: fozdemiroglu.github.io/oyun-salonu](https://fozdemiroglu.github.io/oyun-salonu/)

**FOZ Yapım sunar · Fatih Özdemiroğlu**

FOZ Yapım'ın 17 oyunu tek uygulamada. Telefona, tablete veya bilgisayara **ana ekrana ekle**, simgeye dokun, oyunu seç. Reklamsızdır, veri toplamaz, hesap gerektirmez.

- **Tek uygulama gibi:** Oyunlar Oyun Salonu'nun içinde açılır. Üst çubukta 🏠 Oyunlar, 🔄 yeniden başlat, ⛶ tam ekran ve ✕ kapat düğmeleri var. Telefonun geri tuşu da oyunu kapatıp salona döner.
- **Ana ekrana ekle:** Android ve bilgisayarda Chrome / Edge tek dokunuşla yükler. iPhone / iPad'de Safari'de Paylaş → Ana Ekrana Ekle. Simgeye basılı tutunca Hayal Evim, Neon Tuğla, Neon Yılan ve Shadow Runner'a doğrudan girilir.
- **İnternetsiz:** Bütün oyunlar ilk açılışta cihaza kaydedilir, sonra internet olmadan da oynanır. İnternet varken her zaman en yeni sürüm açılır.
- Türlere göre süzme (Aksiyon, Akıl & Bulmaca, Eğitici, Küçükler İçin, 2 Kişilik), ⭐ favoriler ve son oynananlar.
- Rekorlar ve kayıtlar oyunların kendi kayıtlarıyla aynıdır; salondan da tarayıcıdan da oynasan kaldığın yerden devam eder.

**Teknik:** `index.html` (salon), `sw.js` (service worker: `/oyun-salonu/oyna/<oyun>/` adreslerini sitedeki oyuna bağlar, ağ öncelikli, çevrimdışında saklanan kopyayı açar), `manifest.webmanifest`, `icons/`, `img/` (oyun görselleri). Yeni oyun eklemek için `index.html` içindeki `GAMES` listesine bir satır, `img/` klasörüne görsel ve `sw.js` içindeki listeye adı eklenir.

[Diğer oyunlar](https://github.com/fozdemiroglu)
