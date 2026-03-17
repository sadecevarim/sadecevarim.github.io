# 📝 BLOG DÜZENLEMEREHBERİ

## 🎯 ÖNEMLİ: İKİ DOSYADAN KONTROL EDİYORSUNUZ

### 1️⃣ **src/config/ONE CIKANLAR EDIT.ts**
**Buradan düzenlenen bilgiler:**

#### 📍 Ana Sayfada Görünen:
- ✅ **title** (Kısa Başlık) → Makale kartındaki büyük başlık
- ✅ **author** (Yazar) → "Sadece Varım • 28 Şubat 2026" formatında
- ✅ **date** (Tarih) → Format: `'2026-02-28'` (YYYY-MM-DD)
- ✅ **category** (Kategori) → Renkli badge: "VAKA ÇALIŞMASI", "HAKLARINI BİL", vs.
- ✅ **snippet** (Kısa Açıklama) → Kart içinde kısa açıklama metni
- ✅ **headerImage** (Header Resmi) → Kart kapak görseli

#### 📍 Makale Detay Sayfasında Görünen:
- ✅ **fullTitle** (Uzun Başlık - Opsiyonel) → Header'da büyük beyaz yazı
  - fullTitle yazmadıysanız, title (kısa başlık) kullanılır
  - fullTitle'a özel uzun başlık yazabilirsiniz
- ✅ **title** (Kısa Başlık) → fullTitle yoksa bu kullanılır
- ✅ **author** (Yazar) → "By Sadece Varım" formatında
- ✅ **date** (Tarih) → "28 Şubat 2026" formatında otomatik
- ✅ **category** (Kategori) → Üstte renkli badge
- ✅ **tags** (Etiketler) → Makale sonunda hashtag'ler (#Maskeleme, #İzmirSokakları)
- ✅ **headerImage** → Tam genişlik kapak fotoğrafı

---

### 2️⃣ **src/content/makale-yazi-edit.ts**
**Buradan düzenlenen bilgiler:**

#### 📍 Makale Detay Sayfasında Görünen:
- ✅ **İçerik Metni** (`content`) → Tüm paragraflar, alt başlıklar
- ✅ **Numaralı Başlıklar** → "1. Başlık", "2. Başlık" formatı
- ✅ **Görsel Markerları** → `(Görsel:blog 2 ilk)` formatında resim yerleştirme

**⚠️ DİKKAT:** makale-yazi-edit.ts içindeki `title` ve `author` alanları KULLANILMIYOR!  
Sadece `content` alanı kullanılıyor. Başlık ve yazar bilgisi **ONE CIKANLAR EDIT.ts** dosyasından geliyor.

---

## 🔧 NASIL DÜZENLERİM?

### ✏️ Başlık, Yazar, Tarih, Kategori Değiştirmek İçin:
1. `src/config/ONE CIKANLAR EDIT.ts` dosyasını aç
2. İlgili blog'un `id` numarasını bul (1, 2, veya 3)
3. Değiştirmek istediğin alanı düzenle:

```typescript
{
  id: 1,
  title: {
    tr: 'Kısa Başlık',  // ⬅️ Ana sayfa kartında görünür
    en: 'Short Title',
  },
  fullTitle: {  // ⬅️ OPSIYONEL: Makale detayında uzun başlık göstermek için
    tr: 'Çok Daha Uzun ve Detaylı Başlık Burada Yazılabilir',
    en: 'A Much Longer and Detailed Title Can Be Written Here',
  },
  author: {
    tr: 'Yeni Yazar',  // ⬅️ Burası
    en: 'New Author',
  },
  date: '2026-03-15',  // ⬅️ Burası (YYYY-MM-DD formatı)
  category: {
    tr: 'YENİ KATEGORİ',  // ⬅️ Burası
    en: 'NEW CATEGORY',
  },
}
```

💡 **fullTitle yazmadınız mı?** O zaman `title` (kısa başlık) her yerde kullanılır.

4. **Ctrl+S** ile kaydet
5. Tarayıcı otomatik yenilenecek (hot reload)

### ✏️ Makale İçeriğini (Paragrafları) Değiştirmek İçin:
1. `src/content/makale-yazi-edit.ts` dosyasını aç
2. `story2`, `story3`, vb. bul (id 1 değil, id 2 → story2)
3. `content:` alanını düzenle:

```typescript
story2: {
  content: `Bu ilk paragraf.

Bu ikinci paragraf. İki satır boşluk bırakarak ayırıyoruz.

1. Bu Numaralı Başlık

Alt başlıklardan sonra içerik devam eder.

(Görsel:blog 2 ilk)

Görsel marker'dan sonra da devam edebilir.`,
}
```

4. **Ctrl+S** ile kaydet

---

## 🎨 ÖZEL FORMATLAR

### Numaralı Başlıklar (Otomatik Büyük Font):
```
1. İlk Başlık

2. İkinci Başlık
```
→ Bunlar otomatik olarak **büyük, kalın, renkli** başlık olarak görünür.

### Görsel Eklemek:
```
(Görsel:blog 2 ilk)
```
→ Bu satır, `src/components/ArticlePage.tsx` dosyasındaki `IMAGE_MAP` ile eşleşir.

**Desteklenen Görseller:**
- `blog1-ayna` → blog1 ayna.jpg
- `blog1-foto` → blog 1 foto.jpg
- `blog1-maske` → blog1 maske gorsel.jpg
- `blog 2 ilk` → blog 2 ilk.jpg
- `blog 2 dijital siddet foto` → blog 2 dijital siddet foto.jpg
- `blog2 3` → blog2 3.jpg

### Etiketler (Hashtags):
```typescript
tags: {
  tr: ['#Maskeleme', '#İzmirSokakları'],  // ⬅️ Türkçe
  en: ['#Masking', '#IzmirStreets'],      // ⬅️ İngilizce
},
```
→ Makale sonunda görünür.

---

## 🐛 SORUN GİDERME

### "Değişiklikler Görünmüyor"
1. **Hard Refresh:** Ctrl+Shift+R veya Ctrl+F5
2. **Cache Temizle:** Browser Console → F12 → Network sekmesi → "Disable cache" işaretle
3. **Dev Server'ı Yeniden Başlat:** Terminal'de Ctrl+C sonra `npm run dev`

### "Başlık Yanlış Görünüyor"
- ✅ **ONE CIKANLAR EDIT.ts** dosyasını kontrol et (burası öncelikli)
- ❌ makale-yazi-edit.ts'deki `title` alanı artık kullanılmıyor

### "Tarih Formatı Hatalı"
- ✅ Doğru: `'2026-02-28'` (YYYY-MM-DD, tırnak içinde string)
- ❌ Yanlış: `2026-02-28` (tırnak yok), `'28-02-2026'` (ters sıra)

### "Console'da Hatalar Görmek İçin"
- Browser'da **F12** bas
- **Console** sekmesine bak
- `🔍 DEBUG` ile başlayan logları kontrol et

---

## 📦 DOSYA YAPISI ÖZETİ

```
src/
├── config/
│   └── ONE CIKANLAR EDIT.ts  ← Başlık, yazar, tarih, kategori, tags, snippet
├── content/
│   └── makale-yazi-edit.ts    ← Makale içeriği (paragraflar)
├── components/
│   ├── HomePage.tsx           ← Ana sayfa kartları
│   └── ArticlePage.tsx        ← Makale detay sayfası
└── assets/
    └── posts/                 ← Görseller (JPG/PNG)
```

---

## 💡 İPUÇLARI

1. **Her zaman iki dosyayı birlikte düzenle:**
   - Önce `ONE CIKANLAR EDIT.ts` → metadata
  - Sonra `makale-yazi-edit.ts` → içerik

2. **Türkçe ve İngilizce versiyonları unutma:**
   - Her alan `tr:` ve `en:` içeriyor
   - İkisini de güncelle

3. **Görsel isimleri eşleştir:**
   - `ONE CIKANLAR EDIT.ts` → `headerImage: 'blog 2 foto.jpg'`
  - `makale-yazi-edit.ts` → `(Görsel:blog 2 ilk)`
   - `ArticlePage.tsx` → `IMAGE_MAP` → `'blog 2 ilk': 'blog 2 ilk.jpg'`

4. **Yedek al:**
   - Büyük değişiklik yapmadan önce dosyaları kopyala
   - Git kullanıyorsan commit at

---

## ✅ TEST CHECKLIST

Değişiklik yaptıktan sonra kontrol et:

- [ ] Ana sayfada kart başlığı doğru mu?
- [ ] Ana sayfada yazar ismi doğru mu?
- [ ] Ana sayfada tarih doğru mu?
- [ ] Makaleye tıklayınca header'da başlık doğru mu?
- [ ] Makale içinde yazar ismi doğru mu?
- [ ] Makale içinde kategori doğru mu?
- [ ] Numaralı başlıklar büyük font ile görünüyor mu?
- [ ] Görseller doğru yerlerde mi?
- [ ] Etiketler makale sonunda hashtag olarak görünüyor mu?
- [ ] Dil değiştir butonuna basınca İngilizce versiyonlar geliyor mu?

---

**🎉 Artık bloglarınızı tam kontrolde düzenleyebilirsiniz!**

Sorun olursa browser console'u kontrol edin (F12 → Console).  
Debug logları `🔍 DEBUG` prefix'i ile görünecek.
