/* ===============================================
   📰 ÖNE ÇIKAN BLOGLAR - TEK PANEL KONTROL
   ===============================================
   
   ✅ Bu dosyadan düzenleyebileceğiniz bilgiler:
   
   📍 ANA SAYFADA (Featured Articles bölümü):
   - title (kısa başlık) → Makale kartlarında görünür
   - author (yazar) → Kart altında "Sadece Varım • 24 Şubat 2026" formatında
   - date (tarih) → Kart altında görünür (YYYY-MM-DD formatında yazın: 2026-02-24)
   - category (kategori) → Kart üstünde renkli etiket olarak
   - snippet (kısa açıklama) → Kart içeriğinde özet metin
   - headerImage → Kart kapak görseli
   - tags → Ana sayfada görünmez, makale içinde görünür
   
   📍 MAKALE DETAY SAYFASINDA:
   - fullTitle (uzun başlık - opsiyonel) → Büyük başlık olarak üstte
     * Eğer fullTitle yazmazsanız, title (kısa başlık) kullanılır
     * fullTitle'a özel uzun başlık yazabilirsiniz
   - author (yazar) → "By Sadece Varım" formatında görünür
   - date (tarih) → Header'da ve içerikte tarih bilgisi
   - category (kategori) → Üst kısımda renkli badge
   - tags (etiketler) → Makale sonunda hashtag'ler olarak
   - headerImage → Tam genişlik kapak fotoğrafı
   
   ⚡ DİKKAT:
   - Değişiklikler kaydettiğinizde otomatik yansır (hot reload)
   - Tarih formatı: YYYY-MM-DD (Örnek: 2026-02-24)
   - Her makale id'si için TR ve EN versiyonları var
  - İçerik metni için makale-yazi-edit.ts dosyasını düzenleyin
   
   =============================================== */

export interface ArticleConfig {
  id: number;
  title: {
    tr: string;  // Ana sayfa kartında görünen kısa başlık
    en: string;
  };
  fullTitle?: {  // Makale detay sayfasında görünen uzun başlık (opsiyonel)
    tr: string;
    en: string;
  };
  seo?: {
    title?: {
      tr: string;
      en: string;
    };
    keywords?: {
      tr: string;
      en: string;
    };
    description?: {
      tr: string;
      en: string;
    };
  };
  author: {
    tr: string;
    en: string;
  };
  date: string; // Format: YYYY-MM-DD
  category: {
    tr: string;
    en: string;
  };
  headerImage: string; // Filename from src/assets/posts/
  tags: {
    tr: string[]; // Turkish hashtags
    en: string[]; // English hashtags
  };
  snippet: {
    tr: string;
    en: string;
  };
}

/* ===============================================
   🎯 FEATURED ARTICLES (Home Page)
   =============================================== */

export const FEATURED_ARTICLES: ArticleConfig[] = [
  // 📄 ARTICLE 1: Masked Ball - Urban Sociology
  {
    id: 1,
    title: {
      tr: 'Maskeli Balo: Kamusal Performans',  // Ana sayfa kartı
      en: 'Masked Ball: Public Performance',
    },
    fullTitle: {
      tr: 'İzmir Sokaklarında Maskeli Balo: Kamusal Performans Bir Hayatta Kalma Stratejisi mi?',  // Makale detay sayfası
      en: 'Masked Ball in Izmir Streets: Is Public Performance a Survival Strategy?',
    },
    author: {
      tr: 'Sadece Varım',
      en: 'I Just Exist',
    },
    date: '2026-02-24',
    category: {
      tr: 'VAKA ÇALIŞMASI',
      en: 'CASE STUDY',
    },
    headerImage: 'blog 1 foto.jpg',
    tags: {
      tr: ['#Maskeleme', '#İzmirSokakları', '#GüvenliAlan', '#GörünürlükHakkı', '#QueerBellek', '#SadeceVarım', '#KentSosyolojisi'],
      en: ['#Masking', '#IzmirStreets', '#SafeSpace', '#RightToVisibility', '#QueerMemory', '#IJustExist', '#UrbanSociology'],
    },
    snippet: {
      tr: 'Görünürlük, maske ve kamusal alanda hayatta kalma stratejileri üzerine bir inceleme.',
      en: 'An examination of visibility, masking, and survival strategies in public life.',
    },
  },

  // 📄 ARTICLE 2: Digital Violence & Outing
  {
    id: 2,
    title: {
      tr: 'İfşa Karşısında Hukuki Haklarımız Neler?',
      en: 'What Are Our Legal Rights Against Disclosure?',
    },
    fullTitle: {
      tr: 'Dijital Şiddet ve İfşa (Outıng) Karşısında Hukuki Haklarımız Neler?',
      en: 'Digital Violence and Outing: What Are Our Legal Rights?',
    },
    author: {
      tr: 'Sadece Varım',
      en: 'I Just Exist',
    },
    date: '2026-02-25',
    category: {
      tr: 'HAKLARINI BİL',
      en: 'KNOW YOUR RIGHTS',
    },
    headerImage: 'blog 2 dijital siddet foto.jpg',
    tags: {
      tr: ['#DigitalŞiddet', '#İfşa', '#HukukBilgisi', '#LGBTİ+', '#Outing', '#DigitalGüvenlik', '#SadeceVarım'],
      en: ['#DigitalViolence', '#Outing', '#LegalRights', '#LGBTQ+', '#Blackmail', '#DigitalSafety', '#IJustExist'],
    },
    snippet: {
      tr: 'Flört uygulamalarında veya sosyal medyada ifşa, şantaj ve dijital şiddete maruz kaldığınızda yasal haklarınızın neler olduğunu inceliyoruz.',
      en: 'We examine your legal rights when facing outing, blackmail, and digital violence on dating apps or social media.',
    },
  },

  // 📄 ARTICLE 3: Digital Archive (Placeholder - Add your third article)
  {
    id: 3,
    title: {
      tr: 'KARŞI-ARŞİV',
      en: 'COUNTER-ARCHIVE',
    },
    fullTitle: {
      tr: 'Dijital Hafıza Neden Bir Direniş Biçimidir? Sokağın Kaydını Tutmak',
      en: 'Why Is Digital Memory a Form of Resistance? Keeping a Record of the Street',
    },
    seo: {
      title: {
        tr: 'Dijital Hafıza Neden Bir Direniş Biçimidir? Sokağın Kaydını Tutmak',
        en: 'Why Is Digital Memory a Form of Resistance? Keeping a Record of the Street',
      },
      keywords: {
        tr: 'queer bellek, karşı-arşiv, dijital aktivizm, İzmir queer tarihi, veri odaklı savunuculuk, Sadece Varım, kentsel silinme',
        en: 'queer memory, counter-archive, digital activism, Izmir queer history, data-driven advocacy, I Just Exist, urban erasure',
      },
      description: {
        tr: 'Fiziksel mekanlardan silinmeye çalışılan queer varoluşun, dijital bir bellek ve karşı-arşiv yaratarak nasıl güçlü bir direniş biçimine dönüştüğünü inceliyoruz.',
        en: 'We examine how queer existence, pushed out of physical spaces, becomes a powerful form of resistance by building a digital memory and counter-archive.',
      },
    },
    author: {
      tr: 'Sadece Varım',
      en: 'I Just Exist',
    },
    date: '2026-02-26',
    category: {
      tr: 'KARŞI-ARŞİV',
      en: 'COUNTER-ARCHIVE',
    },
    headerImage: 'blog 3 dijital arsiv foto.jpg',
    tags: {
      tr: ['#QueerBellek', '#KarşIArşiv', '#DijitalAktivizm', '#IzmirQueerTarihi', '#VeriOdakliSavunuculuk', '#SadeceVarim', '#KentselSilinme'],
      en: ['#QueerMemory', '#CounterArchive', '#DigitalActivism', '#IzmirQueerHistory', '#DataDrivenAdvocacy', '#IJustExist', '#UrbanErasure'],
    },
    snippet: {
      tr: 'Dijital bellek ve karşı-arşiv, queer varoluşun silinmeye karşı geliştirdiği en güçlü direniş biçimlerinden biridir.',
      en: 'Digital memory and counter-archives are among the strongest forms of resistance against erasure of queer existence.',
    },
  },
];

/* ===============================================
   🔧 HELPER FUNCTIONS
   =============================================== */

/**
 * Get article configuration by ID
 */
export function getArticleConfig(id: number): ArticleConfig | undefined {
  return FEATURED_ARTICLES.find(article => article.id === id);
}

/**
 * Get all article IDs
 */
export function getArticleIds(): number[] {
  return FEATURED_ARTICLES.map(article => article.id);
}

/**
 * Get article metadata for a specific language
 */
export function getArticleMeta(id: number, language: 'tr' | 'en') {
  const article = getArticleConfig(id);
  if (!article) return null;

  return {
    title: article.title[language],
    author: article.author[language],
    date: article.date,
    category: article.category[language],
    headerImage: article.headerImage,
    tags: article.tags[language],
    snippet: article.snippet[language],
  };
}

/* ===============================================
   📖 KULLANIM REHBERİ / USAGE GUIDE
   ===============================================
   
   🔄 NASIL DEĞİŞTİRİRİM? / HOW TO EDIT?
   
   1. BAŞLIK DEĞİŞTİRMEK İÇİN:
      
      a) KISA BAŞLIK (ana sayfa kartları için):
      title: {
        tr: 'Kısa Başlık',  ← Ana sayfa kartında görünür
        en: 'Short Title',
      },
      
      b) UZUN BAŞLIK (makale detay sayfası için - opsiyonel):
      fullTitle: {
        tr: 'Çok Daha Detaylı ve Uzun Başlık Yazabilirsiniz',  ← Makale içinde görünür
        en: 'You Can Write a Much More Detailed and Long Title',
      },
      
      💡 fullTitle yazmadınız mı? O zaman title (kısa başlık) her yerde kullanılır.
   
   2. YAZAR İSMİ DEĞİŞTİRMEK İÇİN:
      author: {
        tr: 'Yeni Yazar Adı',  ← Makale kartında ve detay sayfasında görünür
        en: 'New Author Name',
      },
   
   3. TARİH DEĞİŞTİRMEK İÇİN:
      date: '2026-03-15',  ← Format: YYYY-MM-DD (Yıl-Ay-Gün)
      
   4. KATEGORİ DEĞİŞTİRMEK İÇİN:
      category: {
        tr: 'YENİ KATEGORİ',  ← Ana sayfada renkli badge olarak görünür
        en: 'NEW CATEGORY',
      },
   
   5. ETİKETLER EKLEMEK/SİLMEK İÇİN:
      tags: {
        tr: ['#Etiket1', '#Etiket2', '#Etiket3'],  ← Makale sonunda görünür
        en: ['#Tag1', '#Tag2', '#Tag3'],
      },
   
   6. KISA AÇIKLAMA (SNIPPET) DEĞİŞTİRMEK İÇİN:
      snippet: {
        tr: 'Yeni kısa açıklama metni...',  ← Ana sayfa kartlarında görünür
        en: 'New short description...',
      },
   
   💡 İPUCU: Kaydettiğinizde (Ctrl+S) otomatik güncellenir!
   
   =============================================== */