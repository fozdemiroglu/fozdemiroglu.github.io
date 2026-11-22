# Neon Blok — FOZ Yapım

## [▶ TARAYICIDA OYNA](https://fozdemiroglu.github.io/neon-blok/)

[![Neon Blok oyun ekranı — oynamak için tıkla](https://raw.githubusercontent.com/fozdemiroglu/fozdemiroglu/main/assets/neon-blok-preview.jpg)](https://fozdemiroglu.github.io/neon-blok/)

**FOZ Yapım sunar · Fatih Özdemiroğlu**

Blokları yerleştir, satırları patlat, yıldız topla! Üç modlu neon blok oyunu. Ücretsiz ve reklamsızdır, hesap gerektirmez, internetsiz çalışır. Tek `index.html` dosyasından oluşur, harici kütüphane kullanmaz.

## Modlar

- **Düşen Bloklar:** Parçalar yukarıdan düşer; kaydır, döndür, yerleştir, dolan satır patlar.
  - Sıradaki üç parça görünür; bir parçayı kenara ayırıp sonra kullanabilirsin. Gölge parça nereye düşeceğini gösterir.
  - Her 10 satırda seviye ve hız artar. 4 satır birden, art arda temizlemeler (kombo 🔥) ve tahtayı tamamen boşaltmak ekstra puan verir.
  - Yığın tepeye yaklaşınca tahta kırmızı yanıp söner.
- **40 Satır Yarışı:** Aynı oyun, ama hedef 40 satırı (Minik'te 20) en kısa sürede temizlemek. En iyi süre saklanır.
- **Blok Yerleştir:** 8×8 tahta ve altta 3 parça. Parçaları sürükleyip bırakırsın.
  - Dolan satır ya da sütun patlar. Aynı anda birkaç tane ve art arda patlatmalar (seri 🔥) daha çok puan verir. Tahta tamamen boşalırsa +100.
  - Parçayı tutunca nereye düşeceği ve hangi satırların patlayacağı önceden görünür.
  - **Geri al:** son hamleyi geri alır (Minik'te 3, Klasik'te 1 hak).
  - **Yeni parçalar:** yer kalmazsa tepsiyi yeniler (Minik'te 3, Klasik'te 1 hak).
  - Oyun kendiliğinden kaydedilir; menüye dönsen ya da sayfayı kapatsan da kaldığın yerden devam edersin.

## Sürprizler

- **💣 Bomba:** Ara sıra bomba gelir; düştüğü ya da bırakıldığı yerde 3×3 alanı patlatır. Blok Yerleştir'de dolu karenin üstüne de bırakılabilir.
- **⭐ Yıldızlı bloklar:** Bazı blokların üstünde yıldız var; o blok patlayınca yıldız toplarsın. Her oyunun sonunda puanına göre de yıldız kazanırsın (Satır Yarışı'nı bitirmek +3).
- **🎨 Temalar:** Yıldızlarla yeni blok görünümleri açılır: Neon, Şeker (25 ⭐), Okyanus (60), Ateş (100), Piksel (150), Uzay (220).

## Zorluk

- **Minik:** Yavaş düşüş, uzun yerleşme süresi, belirgin gölge, küçük ve kolay parçalar, daha sık bomba ve yıldız, daha çok geri alma ve yeni parça hakkı.
- **Klasik:** Hızlanan oyun, büyük parçalar dahil hepsi.

## Kontroller

- **Düşen Bloklar (telefon):** sağa-sola kaydır → kayar · dokun → döner · aşağı kaydır → iner, hızlıca kaydır → çakılır · yukarı kaydır → kenara ayırır. Alttaki düğmeler de çalışır.
- **Düşen Bloklar (klavye):** ← → kaydır, ↓ hızlı in, ↑ / X döndür, Z ters döndür, Boşluk çakıla, C kenara ayır, P / Esc duraklat.
- **Blok Yerleştir:** parçayı parmakla ya da fareyle sürükle; telefonda parça parmağın biraz üstünde durur. R yeni parçalar, U geri al.

Web Audio sesleri (aç/kapa), patlama ve konfeti efektleri, azaltılmış hareket desteği var. Kayıtlar yalnızca cihazda tutulur (`foz-neon-blok-v1`).

[Diğer oyunlar](https://github.com/fozdemiroglu) · [Oyun Salonu](https://fozdemiroglu.github.io/oyun-salonu/)
