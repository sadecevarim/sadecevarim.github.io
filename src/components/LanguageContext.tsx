import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    // Navigation
    'nav.home': 'Anasayfa',
    'nav.stories': 'Hikayeler',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'nav.shareStory': 'Hikayeni Paylaş',
    
    // Hero
    'hero.title': 'SADECE VARIM',
    'hero.subtitle': 'Queer bireylerin hikayelerini özgürce paylaştığı, varoluşlarını haykırdığı platform.',
    'hero.cta': 'HİKAYENİ PAYLAŞ',
    'hero.read': 'HİKAYELERİ OKU',
    
    // Home Page
    'home.featured.title': 'ÖNE ÇIKAN HİKAYELER',
    'home.featured.subtitle': 'Toplumun gördüğü hikayelere kulak ver, görünmeyenleri görünür kıl.',
    'home.read': 'OKU',
    'home.anonymous': 'Anonim',
    'home.hero.subtitle': 'Görünürlük bir haktır. Sesimiz yankılanıyor, hikayelerimiz açığa çıkıyor. İzmir sokaklarından dünyaya, queer varlık direnişle büyüyor.',
    'home.hero.btn1': 'HİKAYELERİ OKU',
    'home.hero.btn2': 'GALERİYİ KEŞFET',
    'home.concept.title': 'KONSEPT',
    'home.concept.1.title': 'Görünmezden Görünüre',
    'home.concept.1.text': 'Var olmak başlı başına bir direnişti. Artık sesimiz yankılanıyor.',
    'home.concept.2.title': 'Karanlık Aydınlığa Dönüşüyor',
    'home.concept.2.text': 'Sessizliği bozuyoruz, gölgeleri aydınlatıyoruz. Varlığımız baş kaldırıyor.',
    'home.concept.3.title': 'Güvenli Alan Yaratıyoruz',
    'home.concept.3.text': 'Her hikaye anonim kalabilir, her ses korunarak yükseliyor.',
    'home.collage.title': 'Pembe Vurgulu:',
    'home.collage.subtitle': 'Görünürlüğün Paylaşımı',
    'home.collage.card1.title': 'Siyah Zeminli',
    'home.collage.card1.text': 'Normatif Yasa',
    'home.collage.card2.title': 'Kentsel Yaşam',
    'home.collage.card2.text': 'Gizlilikle, Güvenlik',
    'home.collage.card3.title': 'Yalnızlık',
    'home.collage.card3.text': 'Pembe Vurgulu Direniş',
    'home.articles.title': 'Öne Çıkan Yazılar',
    'home.articles.category1': 'Düşünce',
    'home.articles.category2': 'Sanat',
    'home.articles.category3': 'Felsefe',
    'home.articles.read': 'Devamını Oku',
    'home.cta.title': 'BİZE KATIL',
    'home.cta.subtitle': 'Sadece varoluşun gücüne inan. Sesini duyur, izini bırak.',
    'home.cta.button': 'İLETİŞİME GEÇ',
    'home.stats.stories': 'Hikaye',
    'home.stats.voices': 'Ses',
    'home.stats.countries': 'Ülke',
    'home.impact.title': 'BİR HİKAYE, BİN ETKİ',
    'home.impact.subtitle': 'Her paylaşılan hikaye, bir başkasına cesaret verir. Senin hikayen de birilerini güçlendirebilir.',
    'home.impact.share': 'Hikayeni Paylaş',
    'home.impact.read': 'Hikayeleri Oku',
    'home.impact.support': 'Destek Ol',
    'home.community.title': 'TOPLULUK',
    'home.community.subtitle': 'Yalnız değilsin. Binlerce queer birey hikayelerini paylaşıyor, varoluşlarını haykırıyor.',
    
    // Stories Page
    'stories.title': 'HİKAYELER',
    'stories.subtitle': 'Herkes kendi hikayesinin kahramanıdır. Burada sesler yankılanıyor, varoluşlar çoğalıyor. Her hikaye bir direniş, her kelime bir manifesto.',
    'stories.filter.all': 'TÜMÜ',
    'stories.filter.text': 'METİN',
    'stories.filter.visual': 'GÖRSEL',
    'stories.filter.video': 'VİDEO',
    'stories.empty': 'Henüz hikaye yok. İlk hikayeyi paylaş!',
    'stories.readMore': 'Devamını Oku',
    'stories.read': 'Oku',
    'stories.anonymous': 'Anonim',
    'stories.visual.badge': 'Görsel',
    'stories.text.badge': 'Yazılı',
    'stories.cta.title': 'Senin Sesini Duyurmak İstiyoruz',
    'stories.cta.text': 'Her hikaye bir direniş. Her kelime bir varoluş. Anonim kal ya da adınla yaz, önemli olan senin gerçek hikayeni anlatman.',
    'stories.cta.button': 'Hikayeni Anlat',
    
    // Mock Stories Content
    'stories.story1.title': 'Özgürce Var Olmak',
    'stories.story1.excerpt': 'Yıllarca kendimi gizledim. Artık sadece varım ve bu yeter.',
    'stories.story1.author': 'Anonim',
    'stories.story1.category': 'Kişisel',
    'stories.story2.title': 'İlk Pride\'ım',
    'stories.story2.excerpt': 'İlk kez bir toplulukta kendimi güvende hissettim. Renkler, sevgi, özgürlük...',
    'stories.story2.author': 'Deniz A.',
    'stories.story2.category': 'Deneyim',
    'stories.story3.title': 'Ailem ve Ben',
    'stories.story3.excerpt': 'Coming out süreci zorlu oldu ama artık daha güçlüyüm.',
    'stories.story3.author': 'Anonim',
    'stories.story3.category': 'Kişisel',
    'stories.story4.title': 'Trans Olmak',
    'stories.story4.excerpt': 'Kimliğimi kabul etmek en büyük özgürlüğümdü.',
    'stories.story4.author': 'Eylül K.',
    'stories.story4.category': 'Deneyim',
    
    // Sample Stories from AuthContext
    'sample.story1.title': 'İlk Defa Kendim Olduğum Gün',
    'sample.story1.content': `Yirmi beş yıl boyunca başkalarının beklentilerine göre yaşadım. Ailem için "iyi oğul", arkadaşlarım için "normal", toplum için "görünmez" biri oldum. Her sabah aynaya bakarken, oradan bana bakan kişiyi tanımıyordum.

O gün, küçük bir kafede oturuyordum. Karşımdaki masada iki erkek el ele tutuşmuş, birbirlerine gülümsüyordu. O an fark ettim ki, mutluluk bu kadar basit olabilir. Sadece var olmak, sadece kendini olmak.

Eve döndüğümde aileme her şeyi anlattım. Sessizlik vardı, gözyaşları vardı, ama sonunda kabul vardı. O gece ilk defa kendim olarak uyudum. Artık bir maske takmıyordum.

Bugün mutluyum. Mükemmel değil hayatım, ama gerçek. Ve bu yeterli. Sadece varım, ve bu yeterli.`,
    'sample.story1.author': 'Ege',
    
    'sample.story2.title': 'Kendi Bedenim, Kendi Kararım',
    'sample.story2.content': `Trans olmak bir hastalık değil, tedaviye ihtiyacı olan bir durum değil. Bu benim varoluşum, benim gerçekliğim.

Yıllarca yanlış bedende sıkışmış gibi hissettim. Aynaya her baktığımda bir yabancı görüyordum. İçimdeki kadın dışarıya çıkmak için çığlık atıyordu.

Hormon tedavisine başladığım gün, hayatımın ilk günüydü. Her geçen gün kendime biraz daha yaklaştım. Her değişiklik, her küçük adım bir zaferdi.

Toplum beni anlamak zorunda değil. Ama beni olduğum gibi kabul etmek zorunda. Ben buradayım, ben gerçeğim. Benim varlığım kimsenin iznine tabi değil.

Sadece varım. Sonunda ben, gerçek ben.`,
    'sample.story2.author': 'Aylin',
    
    'sample.story3.title': 'İki Dünya Arasında',
    'sample.story3.content': `Biseksüel olduğumu söylediğimde en çok "karar ver" cümlesini duydum. Sanki aşk bir seçim yapmak, bir tarafa geçmek gerektiriyormuş gibi.

Ama ben böyleyim. Hem kadınları hem erkekleri sevebiliyorum. Bu beni kararsız yapmıyor, bu beni ben yapıyor.

Queer topluluğunda bile bazen dışlanıyorum. "Yeterince gay değil" diyorlar. Heteroseksüel dünyada ise zaten hep yabancı oldum.

Ama artık kimsenin tanımına sığmam gerektiğini düşünmüyorum. Ben bir spektrumum, bir renk paletiymişim. Ve bu güzel.

Aşk aşktır. Ben ben'im. Sadece varım, ve bu yeterince queer.`,
    
    'sample.story4.title': 'Sessizliğimi Bozdum',
    'sample.story4.content': `Lezbiyen olduğumu ilk kez on altı yaşında fark ettim. Yirmi beş yaşında söyledim.

Dokuz yıl süren bir sessizlik. Dokuz yıl boyunca kendimden kaçtım, gerçeklerden saklandım. "Belki bir faz", "belki geçer" dedim. Ama aşk geçmiyor, kimlik geçmiyor.

En yakın arkadaşıma söylediğim gün titreyen ellerimle çay bardağını tutuyordum. O sadece gülümsedi ve "biliyordum" dedi. O kadar basitti.

Aileme söylemek daha zordu. Gözyaşları döküldü, kapılar çarpıldı. Ama ben vazgeçmedim. Çünkü artık kendimden vazgeçemezdim.

Bugün sevgilimle mutluyum. Günlerce elimizi sokakta tutamıyoruz ama evimizde özgürüz. Her gün biraz daha güçleniyoruz.

Sesimiz var, varlığımız var. Sadece varız.`,
    'sample.story4.author': 'Deniz',
    
    'sample.story5.title': 'Being Non-Binary: Not Fitting the Binary',
    'sample.story5.content': `"Erkek misin, kız mısın?" sorusu hayatım boyunca peşimi bırakmadı. Cevabım hep aynı: ikisi de değilim.

Toplum ikili sistemler sever. Siyah-beyaz, erkek-kadın, iyi-kötü. Ama ben griyim, ben aradayım, ben spektrumum.

Zamirler sıkıntılıydı. "O" demeyi öğrenmek kimse için kolay değil ama bu benim hakkım. Adımı, zamirleri seçme hakkım var.

Görünmez olmak zor. Queer olmak ama "yeterince queer" görünmemek. Trans olmak ama "geleneksel trans" anlatılarına uymamak.

Ama ben buradayım. Kategorilere sığmayan, etiketlere isyan eden, sadece kendisi olmaya çalışan bir insan.

Sadece varım. Tanımlanamaz ama gerçek.`,
    
    'sample.story6.title': 'Reconciling with My Family',
    'sample.story6.content': `Babam üç yıl konuşmadı benimle. Gay olduğumu söylediğim gün oğlunu kaybetmiş gibi ağladı.

Annem daha farklıydı. "Seni seviyorum ama bunu anlamıyorum" dedi. Dürüsttü en azından.

Zaman geçti. Yavaş yavaş, adım adım. İlk doğum günümü geçirdik birlikte. Sonra yılbaşını. Sonra sevgilimi tanıştırdım.

Babam hala tam kabullenemedi belki. Ama sofrada yerimiz var. Ailede yerimiz var.

Mükemmel değil ama gelişiyor. Her gün biraz daha yakınlaşıyoruz. Her gün biraz daha anlıyorlar.

Bazen aile kan bağıyla gelmez. Bazen seçeriz. Ama bazen de... bazen gerçek ailelerimiz dönüş yapar.

Sadece var olmaya devam ettim. Ve onlar da öğreniyorlar.`,
    'sample.story6.author': 'Can',
    
    'sample.story7.title': 'Love Knows No Age',
    'sample.story7.content': `Kırk yaşında çıkış yaptım. "Geç kaldın" diyenler oldu. "Cesursun" diyenler de.

Yirmi yıllık evlilik, iki çocuk. Herkesin gözünde mükemmel bir hayat. Ama ben mutsuzdum.

Kimliğimi keşfetmek hiçbir zaman geç değil. Evet, kayıplarım oldu. Evliliğim bitti, bazı arkadaşlarımı kaybettim. Ama kendimi buldum.

Çocuklarım destekledi. Onlar anladı. "Anne, seni mutlu olmak istiyoruz" dediler.

Bugün elli yaşındayım. İlk defa gerçekten yaşıyorum. Her gün bir hediye, her sabah bir mucize.

Queer olmak için "doğru yaş" yok. Sadece doğru zaman var: senin hazır olduğun zaman.

Sadece varım. Ellimde, özgürce, mutluca.`,
    
    'sample.story8.title': 'My First Pride',
    'sample.story8.content': `İlk Pride yürüyüşüm. Otuz iki yıl sonra ilk defa.

Rengarenk bayraklar, müzik, dans, öpüşen çiftler, el ele tutuşan insanlar. Gözyaşları, kahkahalar, özgürlük.

Bir an durdum. Etrafa baktım. İşte topluluğum. İşte ailem. İşte ben.

"Love is love" pankartını taşırken ellerim titriyordu. Hem korkudan hem heyecandan. Ama yalnız değildim.

Binlerce insan. Binlerce hikaye. Binlerce "sadece varım".

O gün anladım: yalnız olmadığımı, anormal olmadığımı, kıymetli olduğumu.

Pride bir festival değil. Pride bir direniş. Pride var olma çığlığı.

Ve ben bağırıyorum: SADECE VARIM!`,
    'sample.story8.author': 'Mert',
    
    // Story Detail
    'story.back': 'HİKAYELERE DÖN',
    'story.notfound': 'Hikaye Bulunamadı',
    'story.anonymous': 'Anonim Yazar',
    'story.visual': 'Görsel Hikaye',
    'story.video': 'Video Hikaye',
    'story.visual.caption': 'Görselle anlatılan bir hikaye',
    'story.video.caption': 'Videoyla anlatılan bir hikaye',
    'story.message': 'Bu hikaye, varoluşun gücünü ve sesini duyurmak için paylaşıldı.',
    'story.solidarity': 'DAYANIŞMA',
    'story.solidarity.text': 'Yalnız değilsin. Topluluk olarak buradayız, birbirimizi güçlendiriyoruz.',
    'story.share.story': 'HİKAYENİ PAYLAŞ',
    'story.share.message': 'Senin de bir hikayen var mı? Cesaretle paylaş, binlerce kişiye ilham ol.',
    
    // About/Gallery Page
    'about.title': 'HAKKIMIZDA',
    'about.subtitle': 'Sadece Varım, queer bireylerin hikayelerini özgürce paylaşabildiği, varoluşlarını haykırabildiği bir platform. Görünürlük bir haktır, sesimiz yankılanmalı.',
    'about.mission.title': 'MİSYON',
    'about.mission.text': 'Queer bireylerin hikayelerini güvenli bir şekilde paylaşabilecekleri, toplumsal görünürlüğü artırabilecekleri bir alan yaratmak.',
    'about.vision.title': 'VİZYON',
    'about.vision.text': 'Her queer bireyin sesinin duyulduğu, varoluşunun onaylandığı bir dünya hayal ediyoruz.',
    'about.values.title': 'DEĞERLERİMİZ',
    'about.values.1': 'Güvenlik',
    'about.values.2': 'Anonimlik',
    'about.values.3': 'Dayanışma',
    'about.values.4': 'Direniş',
    
    // Gallery Filters
    'gallery.filter.all': 'Tümü',
    'gallery.filter.art': 'Sanat',
    'gallery.filter.portrait': 'Portre',
    'gallery.filter.activism': 'Aktivizm',
    'gallery.filter.community': 'Topluluk',
    
    // Gallery Items
    'gallery.item1.title': 'Pride Kutlaması',
    'gallery.item1.category': 'Topluluk',
    'gallery.item1.description': 'Özgürlük, eşitlik ve aşk için bir arada olmak.',
    'gallery.item2.title': 'Özgün Kimlik',
    'gallery.item2.category': 'Portre',
    'gallery.item2.description': 'Her birey kendi hikayesinin kahramanıdır.',
    'gallery.item3.title': 'Trans Pride',
    'gallery.item3.category': 'Aktivizm',
    'gallery.item3.description': 'Trans hakları insan haklarıdır.',
    'gallery.item4.title': 'Birlikte Güçlüyüz',
    'gallery.item4.category': 'Topluluk',
    'gallery.item4.description': 'Topluluk, sevgi ve dayanışmanın gücü.',
    'gallery.item5.title': 'Eşitlik İçin',
    'gallery.item5.category': 'Aktivizm',
    'gallery.item5.description': 'Adalet ve eşitlik için mücadele ediyoruz.',
    'gallery.item6.title': 'Cesur Renkler',
    'gallery.item6.category': 'Sanat',
    'gallery.item6.description': 'Kimliğimiz, cesaretimiz, rengarenk varlığımız.',
    
    // Contact Page
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Share your story, ask questions, or make suggestions',
    'contact.email': 'Email',
    'contact.support': 'Support',
    'contact.support.desc': '24/7 response',
    'contact.form.title': 'Send Message',
    'contact.form.type': 'What would you like to do?',
    'contact.form.type.story': '📖 Share My Story',
    'contact.form.type.question': '❓ Ask a Question',
    'contact.form.type.suggestion': '💡 Make a Suggestion',
    'contact.form.type.feedback': '💬 Give Feedback',
    'contact.form.mediaType': 'How would you like to share your story?',
    'contact.form.mediaType.text': '📝 Text Only',
    'contact.form.mediaType.image': '🖼️ With Image',
    'contact.form.mediaType.video': '🎥 With Video',
    'contact.form.name': 'Your Name',
    'contact.form.name.placeholder': 'Your Full Name',
    'contact.form.name.placeholder.story': 'Your name (you can leave blank to stay anonymous)',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'email@example.com',
    'contact.form.subject': 'Subject',
    'contact.form.subject.placeholder': 'Subject of your message',
    'contact.form.subject.placeholder.story': 'Title of your story',
    'contact.form.message': 'Your Message',
    'contact.form.message.placeholder': 'Write your message here...',
    'contact.form.message.placeholder.story': 'Write your story here... Feel free to share your experiences and emotions.',
    'contact.form.message.story.help': 'Tell your story freely. You can stay anonymous if you wish. It will be published after admin approval.',
    'contact.form.mediaUrl': 'Image/Video Link (optional)',
    'contact.form.mediaUrl.placeholder': 'https://... (YouTube, Imgur, etc.)',
    'contact.form.submit': 'Send Message',
    'contact.form.submit.story': 'Submit My Story',
    'contact.form.submitting': 'Sending...',
    'contact.success': 'Your message has been sent successfully! We will get back to you as soon as possible.',
    'contact.success.story': 'Your story has been received! It will be published after admin approval. Thank you! 🏳️‍🌈',
    'contact.footer.title': 'Stay Connected',
    'contact.footer.desc': 'We are always here for your questions, suggestions, or collaboration proposals.',
    'contact.footer.tagline': 'I Just Exist - Safe Space',
    
    // Submit Page
    'submit.title': 'HİKAYENİ PAYLAŞ',
    'submit.subtitle': 'Senin hikayen değerli. Cesaretle paylaş, binlerce kişiye ilham ol.',
    'submit.info.title': 'BİLGİ',
    'submit.info.1': 'Hikayeler admin onayından sonra yayınlanır.',
    'submit.info.2': 'Anonim kalmayı seçebilirsin.',
    'submit.info.3': 'Saygılı ve destekleyici bir dil kullan.',
    'submit.form.title': 'Hikaye Başlığı',
    'submit.form.title.placeholder': 'Hikayene bir başlık ver',
    'submit.form.content': 'Hikaye İçeriği',
    'submit.form.content.placeholder': 'Hikayeni buraya yaz...',
    'submit.form.anonymous': 'Anonim olarak paylaş',
    'submit.form.name': 'Adın (anonim değilse)',
    'submit.form.name.placeholder': 'Senin adın',
    'submit.form.submit': 'HİKAYEY GÖNDER',
    'submit.form.success': 'Hikayeniz başar��yla gönderildi! Admin onayından sonra yayınlanacak.',
    'submit.form.error': 'Bir hata oluştu. Lütfen tekrar deneyin.',
    'submit.form.required': 'Başlık ve içerik alanları zorunludur.',
    
    // Footer
    'footer.tagline': 'Görünürlük bir haktır. Sesimiz yankılanıyor.',
    'footer.quick.title': 'Hızlı Bağlantılar',
    'footer.community.title': 'Topluluk',
    'footer.community.stories': 'Hikayeler',
    'footer.community.submit': 'Hikaye Gönder',
    'footer.community.guidelines': 'Kurallar',
    'footer.legal.title': 'Yasal',
    'footer.legal.privacy': 'Gizlilik',
    'footer.legal.terms': 'Şartlar',
    'footer.copyright': '© 2024 Sadece Varım. Tüm hakları saklıdır.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.stories': 'Stories',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.shareStory': 'Share Your Story',
    
    // Hero
    'hero.title': 'I JUST EXIST',
    'hero.subtitle': 'A platform where queer individuals freely share their stories and proclaim their existence.',
    'hero.cta': 'SHARE YOUR STORY',
    'hero.read': 'READ STORIES',
    
    // Home Page
    'home.featured.title': 'FEATURED STORIES',
    'home.featured.subtitle': 'Listen to the stories society sees, make the invisible visible.',
    'home.read': 'READ',
    'home.anonymous': 'Anonymous',
    'home.hero.subtitle': 'Visibility is a right. Our voices are echoing, our stories are emerging. From Izmir streets to the world, queer existence grows with resistance.',
    'home.hero.btn1': 'READ STORIES',
    'home.hero.btn2': 'EXPLORE GALLERY',
    'home.concept.title': 'CONCEPT',
    'home.concept.1.title': 'From Invisible to Visible',
    'home.concept.1.text': 'To exist is resistance in itself. Now our voices are echoing.',
    'home.concept.2.title': 'Darkness Turns to Light',
    'home.concept.2.text': 'We break the silence, illuminate the shadows. Our existence rebels.',
    'home.concept.3.title': 'We Create Safe Spaces',
    'home.concept.3.text': 'Every story can remain anonymous, every voice rises protected.',
    'home.collage.title': 'Pink Highlighted:',
    'home.collage.subtitle': 'Sharing Visibility',
    'home.collage.card1.title': 'Black Background',
    'home.collage.card1.text': 'Normative Law',
    'home.collage.card2.title': 'Urban Life',
    'home.collage.card2.text': 'Privacy, Security',
    'home.collage.card3.title': 'Loneliness',
    'home.collage.card3.text': 'Pink Highlighted Resistance',
    'home.articles.title': 'Featured Articles',
    'home.articles.category1': 'Thought',
    'home.articles.category2': 'Art',
    'home.articles.category3': 'Philosophy',
    'home.articles.read': 'Read More',
    'home.cta.title': 'JOIN US',
    'home.cta.subtitle': 'Believe in the power of just existing. Make your voice heard, leave your mark.',
    'home.cta.button': 'GET IN TOUCH',
    'home.stats.stories': 'Stories',
    'home.stats.voices': 'Voices',
    'home.stats.countries': 'Countries',
    'home.impact.title': 'ONE STORY, A THOUSAND IMPACTS',
    'home.impact.subtitle': 'Every shared story gives courage to another. Your story can empower others too.',
    'home.impact.share': 'Share Your Story',
    'home.impact.read': 'Read Stories',
    'home.impact.support': 'Support',
    'home.community.title': 'COMMUNITY',
    'home.community.subtitle': 'You are not alone. Thousands of queer individuals are sharing their stories, proclaiming their existence.',
    
    // Stories Page
    'stories.title': 'STORIES',
    'stories.subtitle': 'Everyone is the hero of their own story. Here voices echo, existences multiply. Every story is resistance, every word a manifesto.',
    'stories.filter.all': 'ALL',
    'stories.filter.text': 'TEXT',
    'stories.filter.visual': 'VISUAL',
    'stories.filter.video': 'VIDEO',
    'stories.empty': 'No stories yet. Share the first story!',
    'stories.readMore': 'Read More',
    'stories.read': 'Read',
    'stories.anonymous': 'Anonymous',
    'stories.visual.badge': 'Visual',
    'stories.text.badge': 'Written',
    'stories.cta.title': 'We Want to Hear Your Voice',
    'stories.cta.text': 'Every story is resistance. Every word is existence. Stay anonymous or write with your name, what matters is telling your true story.',
    'stories.cta.button': 'Tell Your Story',
    
    // Mock Stories Content
    'stories.story1.title': 'Existing Freely',
    'stories.story1.excerpt': 'I hid myself for years. Now I just exist, and that\'s enough.',
    'stories.story1.author': 'Anonymous',
    'stories.story1.category': 'Personal',
    'stories.story2.title': 'My First Pride',
    'stories.story2.excerpt': 'I felt safe for the first time in a community. Colors, love, freedom...',
    'stories.story2.author': 'Deniz A.',
    'stories.story2.category': 'Experience',
    'stories.story3.title': 'My Family and I',
    'stories.story3.excerpt': 'The coming out process was tough, but I am stronger now.',
    'stories.story3.author': 'Anonymous',
    'stories.story3.category': 'Personal',
    'stories.story4.title': 'Being Trans',
    'stories.story4.excerpt': 'Accepting my identity was my greatest freedom.',
    'stories.story4.author': 'Eylül K.',
    'stories.story4.category': 'Experience',
    
    // Sample Stories from AuthContext
    'sample.story1.title': 'The Day I Was Me',
    'sample.story1.content': `For twenty-five years, I lived according to others' expectations. I was the "good son" to my family, "normal" to my friends, and "invisible" to society. Every morning, I looked in the mirror and didn't recognize the person looking back.

One day, I was sitting in a small café. Across from me, two men were holding hands and smiling at each other. At that moment, I realized that happiness can be so simple. Just existing, just being myself.

When I got home, I told my family everything. There was silence, there were tears, but eventually, there was acceptance. That night, I slept as myself for the first time. I no longer wore a mask.

Today, I am happy. My life is not perfect, but it is real. And that is enough. I just exist, and that is enough.`,
    'sample.story1.author': 'Ege',
    
    'sample.story2.title': 'My Body, My Choice',
    'sample.story2.content': `Being trans is not a disease, it is not a condition that requires treatment. This is my existence, this is my reality.

For years, I felt trapped in the wrong body. Every time I looked in the mirror, I saw a stranger. The woman inside me was screaming to get out.

The day I started hormone therapy was the first day of my life. Every day, I got closer to myself. Every change, every small step was a victory.

Society does not need to understand me. But it needs to accept me as I am. I am here, I am the truth. My existence is not subject to anyone's judgment.

I just exist. In the end, I am the real me.`,
    'sample.story2.author': 'Aylin',
    
    'sample.story3.title': 'Between Two Worlds',
    'sample.story3.content': `When I told people I was bisexual, the phrase I heard the most was "make a decision." As if love requires making a choice, picking a side.

But this is who I am. I can love both women and men. This doesn't make me indecisive, this makes me me.

Even in the queer community, I am sometimes excluded. "Not gay enough" they say. In the heterosexual world, I have always been a stranger.

But I no longer think I need to fit into anyone's definition. I am a spectrum, I am a color palette. And that is beautiful.

Love is love. I am me. I just exist, and that is queer enough.`,
    
    'sample.story4.title': 'I Broke My Silence',
    'sample.story4.content': `I realized I was a lesbian for the first time at sixteen. I came out at twenty-five.

Nine years of silence. Nine years of running from myself, hiding from reality. "Maybe a phase," "maybe it will pass" I said. But love doesn't pass, identity doesn't pass.

When I told my closest friend, my hands were trembling while holding my tea cup. She simply smiled and said "I knew." It was that simple.

Telling my family was harder. Tears were shed, doors slammed. But I didn't give up. Because I could no longer give up on myself.

Today, I am happy with my partner. We can't hold hands in the streets for days, but we are free in our home. We are getting stronger every day.

Our voices are here, our existence is here. We just exist.`,
    'sample.story4.author': 'Deniz',
    
    'sample.story5.title': 'Being Non-Binary: Not Fitting the Binary',
    'sample.story5.content': `"Are you a boy or a girl?" This question has haunted me my whole life. My answer has always been the same: neither.

Society loves binary systems. Black-white, male-female, good-bad. But I am gray, I am in between, I am a spectrum.

Pronouns were difficult. Learning to say "they" isn't easy for anyone, but it's my right. I have the right to choose my name, my pronouns.

Being invisible is hard. Being queer but not looking "queer enough." Being trans but not fitting "traditional trans" narratives.

But I am here. Not fitting categories, rebelling against labels, just trying to be myself.

I just exist. Undefinable but real.`,
    
    'sample.story6.title': 'Reconciling with My Family',
    'sample.story6.content': `My father didn't speak to me for three years. The day I told him I was gay, he cried as if he had lost his son.

My mother was different. "I love you but I don't understand this," she said. At least she was honest.

Time passed. Slowly, step by step. We spent my first birthday together. Then New Year's. Then I introduced my partner.

My father may not have fully accepted it yet. But we have a place at the table. We have a place in the family.

It's not perfect but it's improving. We get closer every day. They understand a little more every day.

Sometimes family doesn't come with blood ties. Sometimes we choose. But sometimes... sometimes our real families come back.

I just kept existing. And they are learning too.`,
    'sample.story6.author': 'Can',
    
    'sample.story7.title': 'Love Knows No Age',
    'sample.story7.content': `I came out at forty. "You're late" some said. "You're brave" others said.

Twenty years of marriage, two children. In everyone's eyes, a perfect life. But I was unhappy.

Discovering your identity is never too late. Yes, I had losses. My marriage ended, I lost some friends. But I found myself.

My children supported me. They understood. "Mom, we want you to be happy" they said.

Today I am fifty. I am truly living for the first time. Every day is a gift, every morning is a miracle.

There is no "right age" to be queer. There is only the right time: when you are ready.

I just exist. At fifty, freely, happily.`,
    
    'sample.story8.title': 'My First Pride',
    'sample.story8.content': `My first Pride march. For the first time in thirty-two years.

Colorful flags, music, dancing, kissing couples, people holding hands. Tears, laughter, freedom.

I stopped for a moment. I looked around. Here is my community. Here is my family. Here I am.

My hands were trembling while holding the "Love is love" banner. Both from fear and excitement. But I wasn't alone.

Thousands of people. Thousands of stories. Thousands of "I just exist."

That day I realized: I am not alone, I am not abnormal, I am precious.

Pride is not a festival. Pride is resistance. Pride is the cry of existence.

And I am shouting: I JUST EXIST!`,
    'sample.story8.author': 'Mert',
    
    // Story Detail
    'story.back': 'BACK TO STORIES',
    'story.notfound': 'Story Not Found',
    'story.anonymous': 'Anonymous Author',
    'story.visual': 'Visual Story',
    'story.video': 'Video Story',
    'story.visual.caption': 'A story told through images',
    'story.video.caption': 'A story told through video',
    'story.message': 'This story was shared to amplify the power of existence and voice.',
    'story.solidarity': 'SOLIDARITY',
    'story.solidarity.text': 'You are not alone. As a community, we are here, empowering each other.',
    'story.share.story': 'SHARE YOUR STORY',
    'story.share.message': 'Do you have a story? Share it with courage, inspire thousands.',
    
    // About/Gallery Page
    'about.title': 'ABOUT',
    'about.subtitle': 'I Just Exist is a platform where queer individuals can freely share their stories and proclaim their existence. Visibility is a right, our voices must echo.',
    'about.mission.title': 'MISSION',
    'about.mission.text': 'To create a safe space where queer individuals can share their stories securely and increase social visibility.',
    'about.vision.title': 'VISION',
    'about.vision.text': 'We envision a world where every queer individual\'s voice is heard and their existence is validated.',
    'about.values.title': 'OUR VALUES',
    'about.values.1': 'Safety',
    'about.values.2': 'Anonymity',
    'about.values.3': 'Solidarity',
    'about.values.4': 'Resistance',
    
    // Gallery Filters
    'gallery.filter.all': 'All',
    'gallery.filter.art': 'Art',
    'gallery.filter.portrait': 'Portrait',
    'gallery.filter.activism': 'Activism',
    'gallery.filter.community': 'Community',
    
    // Gallery Items
    'gallery.item1.title': 'Pride Celebration',
    'gallery.item1.category': 'Community',
    'gallery.item1.description': 'Being together for freedom, equality, and love.',
    'gallery.item2.title': 'Unique Identity',
    'gallery.item2.category': 'Portrait',
    'gallery.item2.description': 'Everyone is the hero of their own story.',
    'gallery.item3.title': 'Trans Pride',
    'gallery.item3.category': 'Activism',
    'gallery.item3.description': 'Trans rights are human rights.',
    'gallery.item4.title': 'Together We Are Strong',
    'gallery.item4.category': 'Community',
    'gallery.item4.description': 'The power of community, love, and solidarity.',
    'gallery.item5.title': 'For Equality',
    'gallery.item5.category': 'Activism',
    'gallery.item5.description': 'Fighting for justice and equality.',
    'gallery.item6.title': 'Bold Colors',
    'gallery.item6.category': 'Art',
    'gallery.item6.description': 'Our identity, our courage, our colorful existence.',
    
    // Contact Page
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Share your story, ask questions, or make suggestions',
    'contact.email': 'Email',
    'contact.support': 'Support',
    'contact.support.desc': '24/7 response',
    'contact.form.title': 'Send Message',
    'contact.form.type': 'What would you like to do?',
    'contact.form.type.story': '📖 Share My Story',
    'contact.form.type.question': '❓ Ask a Question',
    'contact.form.type.suggestion': '💡 Make a Suggestion',
    'contact.form.type.feedback': '💬 Give Feedback',
    'contact.form.mediaType': 'How would you like to share your story?',
    'contact.form.mediaType.text': '📝 Text Only',
    'contact.form.mediaType.image': '🖼️ With Image',
    'contact.form.mediaType.video': '🎥 With Video',
    'contact.form.name': 'Your Name',
    'contact.form.name.placeholder': 'Your Full Name',
    'contact.form.name.placeholder.story': 'Your name (you can leave blank to stay anonymous)',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'email@example.com',
    'contact.form.subject': 'Subject',
    'contact.form.subject.placeholder': 'Subject of your message',
    'contact.form.subject.placeholder.story': 'Title of your story',
    'contact.form.message': 'Your Message',
    'contact.form.message.placeholder': 'Write your message here...',
    'contact.form.message.placeholder.story': 'Write your story here... Feel free to share your experiences and emotions.',
    'contact.form.message.story.help': 'Tell your story freely. You can stay anonymous if you wish. It will be published after admin approval.',
    'contact.form.mediaUrl': 'Image/Video Link (optional)',
    'contact.form.mediaUrl.placeholder': 'https://... (YouTube, Imgur, etc.)',
    'contact.form.submit': 'Send Message',
    'contact.form.submit.story': 'Submit My Story',
    'contact.form.submitting': 'Sending...',
    'contact.success': 'Your message has been sent successfully! We will get back to you as soon as possible.',
    'contact.success.story': 'Your story has been received! It will be published after admin approval. Thank you! 🏳️‍🌈',
    'contact.footer.title': 'Stay Connected',
    'contact.footer.desc': 'We are always here for your questions, suggestions, or collaboration proposals.',
    'contact.footer.tagline': 'I Just Exist - Safe Space',
    
    // Submit Page
    'submit.title': 'SHARE YOUR STORY',
    'submit.subtitle': 'Your story is valuable. Share it with courage, inspire thousands.',
    'submit.info.title': 'INFO',
    'submit.info.1': 'Stories are published after admin approval.',
    'submit.info.2': 'You can choose to remain anonymous.',
    'submit.info.3': 'Use respectful and supportive language.',
    'submit.form.title': 'Story Title',
    'submit.form.title.placeholder': 'Give your story a title',
    'submit.form.content': 'Story Content',
    'submit.form.content.placeholder': 'Write your story here...',
    'submit.form.anonymous': 'Share anonymously',
    'submit.form.name': 'Your Name (if not anonymous)',
    'submit.form.name.placeholder': 'Your name',
    'submit.form.submit': 'SUBMIT STORY',
    'submit.form.success': 'Your story has been submitted successfully! It will be published after admin approval.',
    'submit.form.error': 'An error occurred. Please try again.',
    'submit.form.required': 'Title and content fields are required.',
    
    // Footer
    'footer.tagline': 'Visibility is a right. Our voices are echoing.',
    'footer.quick.title': 'Quick Links',
    'footer.community.title': 'Community',
    'footer.community.stories': 'Stories',
    'footer.community.submit': 'Submit Story',
    'footer.community.guidelines': 'Guidelines',
    'footer.legal.title': 'Legal',
    'footer.legal.privacy': 'Privacy',
    'footer.legal.terms': 'Terms',
    'footer.copyright': '© 2024 I Just Exist. All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr');

  // Load language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.tr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}