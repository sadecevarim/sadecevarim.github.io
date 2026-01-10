import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLanguage } from './LanguageContext';

interface User {
  id: string;
  email: string;
  username: string;
  role: 'user' | 'admin';
  createdAt: string;
}

interface Story {
  id: string;
  userId: string;
  title: string;
  content: string;
  isAnonymous: boolean;
  authorName?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  approvedAt?: string;
  imageUrl?: string;
  videoUrl?: string;
  mediaType?: 'text' | 'image' | 'video';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, username: string) => Promise<void>;
  logout: () => void;
  submitStory: (story: Omit<Story, 'id' | 'userId' | 'status' | 'createdAt'>) => Promise<void>;
  getUserStories: () => Story[];
  getAllStories: () => Story[];
  getApprovedStories: () => Story[];
  updateStoryStatus: (storyId: string, status: 'approved' | 'rejected') => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [stories, setStories] = useState<Story[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    const savedUsers = localStorage.getItem('users');
    const savedStories = localStorage.getItem('stories');
    const storiesVersion = localStorage.getItem('storiesVersion');

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      // Create default admin account
      const defaultAdmin: User = {
        id: 'admin-1',
        email: 'admin@sadecevarim.com',
        username: 'Admin',
        role: 'admin',
        createdAt: new Date().toISOString(),
      };
      setUsers([defaultAdmin]);
      localStorage.setItem('users', JSON.stringify([defaultAdmin]));
    }
    
    // Version control for stories - force update if version changed
    const currentVersion = '2.2';
    if (savedStories && storiesVersion === currentVersion) {
      setStories(JSON.parse(savedStories));
    } else {
      // Create default sample stories with media support
      const sampleStories: Story[] = [
        {
          id: 'story-1',
          userId: 'sample-user-1',
          title: 'İlk Defa Kendim Olduğum Gün',
          content: `Yirmi beş yıl boyunca başkalarının beklentilerine göre yaşadım. Ailem için "iyi oğul", arkadaşlarım için "normal", toplum için "görünmez" biri oldum. Her sabah aynaya bakarken, oradan bana bakan kişiyi tanımıyordum.

O gün, küçük bir kafede oturuyordum. Karşımdaki masada iki erkek el ele tutuşmuş, birbirlerine gülümsüyordu. O an fark ettim ki, mutluluk bu kadar basit olabilir. Sadece var olmak, sadece kendini olmak.

Eve döndüğümde aileme her şeyi anlattım. Sessizlik vardı, gözyaşları vardı, ama sonunda kabul vardı. O gece ilk defa kendim olarak uyudum. Artık bir maske takmıyordum.

Bugün mutluyum. Mükemmel değil hayatım, ama gerçek. Ve bu yeterli. Sadece varım, ve bu yeterli.`,
          isAnonymous: false,
          authorName: 'Ege',
          status: 'approved',
          createdAt: new Date('2024-01-15').toISOString(),
          approvedAt: new Date('2024-01-16').toISOString(),
        },
        {
          id: 'story-2',
          userId: 'sample-user-2',
          title: 'Kendi Bedenim, Kendi Kararım',
          content: `Trans olmak bir hastalık değil, tedaviye ihtiyacı olan bir durum değil. Bu benim varoluşum, benim gerçekliğim.

Yıllarca yanlış bedende sıkışmış gibi hissettim. Aynaya her baktığımda bir yabancı görüyordum. İçimdeki kadın dışarıya çıkmak için çığlık atıyordu.

Hormon tedavisine başladığım gün, hayatımın ilk günüydü. Her geçen gün kendime biraz daha yaklaştım. Her değişiklik, her küçük adım bir zaferdi.

Toplum beni anlamak zorunda değil. Ama beni olduğum gibi kabul etmek zorunda. Ben buradayım, ben gerçeğim. Benim varlığım kimsenin iznine tabi değil.

Sadece varım. Sonunda ben, gerçek ben.`,
          isAnonymous: false,
          authorName: 'Aylin',
          status: 'approved',
          createdAt: new Date('2024-02-01').toISOString(),
          approvedAt: new Date('2024-02-02').toISOString(),
          imageUrl: 'https://images.unsplash.com/photo-1679993813768-ca5ee0495991?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZ2J0cSUyMGNvbW11bml0eSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODAzODkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          mediaType: 'image',
        },
        {
          id: 'story-3',
          userId: 'sample-user-3',
          title: 'İki Dünya Arasında',
          content: `Biseksüel olduğumu söylediğimde en çok "karar ver" cümlesini duydum. Sanki aşk bir seçim yapmak, bir tarafa geçmek gerektiriyormuş gibi.

Ama ben böyleyim. Hem kadınları hem erkekleri sevebiliyorum. Bu beni kararsız yapmıyor, bu beni ben yapıyor.

Queer topluluğunda bile bazen dışlanıyorum. "Yeterince gay değil" diyorlar. Heteroseksüel dünyada ise zaten hep yabancı oldum.

Ama artık kimsenin tanımına sığmam gerektiğini düşünmüyorum. Ben bir spektrumum, bir renk paletiymişim. Ve bu güzel.

Aşk aşktır. Ben ben'im. Sadece varım, ve bu yeterince queer.`,
          isAnonymous: true,
          status: 'approved',
          createdAt: new Date('2024-02-10').toISOString(),
          approvedAt: new Date('2024-02-11').toISOString(),
          imageUrl: 'https://images.unsplash.com/photo-1687638965518-7becda8c62f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWluYm93JTIwZmxhZyUyMHByaWRlfGVufDF8fHx8MTc2ODAzODkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          mediaType: 'image',
        },
        {
          id: 'story-4',
          userId: 'sample-user-4',
          title: 'Sessizliğimi Bozdum',
          content: `Lezbiyen olduğumu ilk kez on altı yaşında fark ettim. Yirmi beş yaşında söyledim.

Dokuz yıl süren bir sessizlik. Dokuz yıl boyunca kendimden kaçtım, gerçeklerden saklandım. "Belki bir faz", "belki geçer" dedim. Ama aşk geçmiyor, kimlik geçmiyor.

En yakın arkadaşıma söylediğim gün titreyen ellerimle çay bardağını tutuyordum. O sadece gülümsedi ve "biliyordum" dedi. O kadar basitti.

Aileme söylemek daha zordu. Gözyaşları döküldü, kapılar çarpıldı. Ama ben vazgeçmedim. Çünkü artık kendimden vazgeçemezdim.

Bugün sevgilimle mutluyum. Günlerce elimizi sokakta tutamıyoruz ama evimizde özgürüz. Her gün biraz daha güçleniyoruz.

Sesimiz var, varlığımız var. Sadece varız.`,
          isAnonymous: false,
          authorName: 'Deniz',
          status: 'approved',
          createdAt: new Date('2024-02-20').toISOString(),
          approvedAt: new Date('2024-02-21').toISOString(),
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          mediaType: 'video',
        },
        {
          id: 'story-5',
          userId: 'sample-user-5',
          title: 'Non-Binary Olmak: İkiliğe Sığmamak',
          content: `"Erkek misin, kız mısın?" sorusu hayatım boyunca peşimi bırakmadı. Cevabım hep aynı: ikisi de değilim.

Toplum ikili sistemler sever. Siyah-beyaz, erkek-kadın, iyi-kötü. Ama ben griyim, ben aradayım, ben spektrumum.

Zamirler sıkıntılıydı. "O" demeyi öğrenmek kimse için kolay değil ama bu benim hakkım. Adımı, zamirleri seçme hakkım var.

Görünmez olmak zor. Queer olmak ama "yeterince queer" görünmemek. Trans olmak ama "geleneksel trans" anlatılarına uymamak.

Ama ben buradayım. Kategorilere sığmayan, etiketlere isyan eden, sadece kendisi olmaya çalışan bir insan.

Sadece varım. Tanımlanamaz ama gerçek.`,
          isAnonymous: true,
          status: 'approved',
          createdAt: new Date('2024-03-01').toISOString(),
          approvedAt: new Date('2024-03-02').toISOString(),
          // Athena – Ben Böyleyim (official video ID)
          videoUrl: 'https://www.youtube.com/embed/xXJmbuppQxw',
          mediaType: 'video',
        },
        {
          id: 'story-6',
          userId: 'sample-user-6',
          title: 'Ailemle Barışmak',
          content: `Babam üç yıl konuşmadı benimle. Gay olduğumu söylediğim gün oğlunu kaybetmiş gibi ağladı.

Annem daha farklıydı. "Seni seviyorum ama bunu anlamıyorum" dedi. Dürüsttü en azından.

Zaman geçti. Yavaş yavaş, adım adım. İlk doğum günümü geçirdik birlikte. Sonra yılbaşını. Sonra sevgilimi tanıştırdım.

Babam hala tam kabullenemedi belki. Ama sofrada yerimiz var. Ailede yerimiz var.

Mükemmel değil ama gelişiyor. Her gün biraz daha yakınlaşıyoruz. Her gün biraz daha anlıyorlar.

Bazen aile kan bağıyla gelmez. Bazen seçeriz. Ama bazen de... bazen gerçek ailelerimiz dönüş yapar.

Sadece var olmaya devam ettim. Ve onlar da öğreniyorlar.`,
          isAnonymous: false,
          authorName: 'Can',
          status: 'approved',
          createdAt: new Date('2024-03-10').toISOString(),
          approvedAt: new Date('2024-03-11').toISOString(),
        },
        {
          id: 'story-7',
          userId: 'sample-user-7',
          title: 'Aşk Yaş Tanımaz',
          content: `Kırk yaşında çıkış yaptım. "Geç kaldın" diyenler oldu. "Cesursun" diyenler de.

Yirmi yıllık evlilik, iki çocuk. Herkesin gözünde mükemmel bir hayat. Ama ben mutsuzdum.

Kimliğimi keşfetmek hiçbir zaman geç değil. Evet, kayıplarım oldu. Evliliğim bitti, bazı arkadaşlarımı kaybettim. Ama kendimi buldum.

Çocuklarım destekledi. Onlar anladı. "Anne, seni mutlu olmak istiyoruz" dediler.

Bugün elli yaşındayım. İlk defa gerçekten yaşıyorum. Her gün bir hediye, her sabah bir mucize.

Queer olmak için "doğru yaş" yok. Sadece doğru zaman var: senin hazır olduğun zaman.

Sadece varım. Ellimde, özgürce, mutluca.`,
          isAnonymous: true,
          status: 'approved',
          createdAt: new Date('2024-03-15').toISOString(),
          approvedAt: new Date('2024-03-16').toISOString(),
        },
        {
          id: 'story-8',
          userId: 'sample-user-8',
          title: 'Pride\'da İlk Defa',
          content: `İlk Pride yürüyüşüm. Otuz iki yıl sonra ilk defa.

Rengarenk bayraklar, müzik, dans, öpüşen çiftler, el ele tutuşan insanlar. Gözyaşları, kahkahalar, özgürlük.

Bir an durdum. Etrafa baktım. İşte topluluğum. İşte ailem. İşte ben.

"Love is love" pankartını taşırken ellerim titriyordu. Hem korkudan hem heyecandan. Ama yalnız değildim.

Binlerce insan. Binlerce hikaye. Binlerce "sadece varım".

O gün anladım: yalnız olmadığımı, anormal olmadığımı, kıymetli olduğumu.

Pride bir festival değil. Pride bir direniş. Pride var olma çığlığı.

Ve ben bağırıyorum: SADECE VARIM!`,
          isAnonymous: false,
          authorName: 'Mert',
          status: 'approved',
          createdAt: new Date('2024-03-20').toISOString(),
          approvedAt: new Date('2024-03-21').toISOString(),
          imageUrl: 'https://images.unsplash.com/photo-1561057160-ce83b1bd72f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmlkZSUyMGNlbGVicmF0aW9uJTIwcGVvcGxlfGVufDF8fHx8MTc2ODAzODkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          mediaType: 'image',
        },
      ];

      setStories(sampleStories);
      localStorage.setItem('stories', JSON.stringify(sampleStories));
      localStorage.setItem('storiesVersion', currentVersion);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock authentication - in real app, this would be Supabase auth
    const foundUser = users.find((u) => u.email === email);
    
    if (!foundUser) {
      throw new Error('Kullanıcı bulunamadı');
    }

    // In a real app, you would verify password with backend
    // For demo purposes, accept "password123" for all users
    if (password !== 'password123') {
      throw new Error('Hatalı şifre');
    }

    setUser(foundUser);
    localStorage.setItem('currentUser', JSON.stringify(foundUser));
  };

  const register = async (email: string, password: string, username: string) => {
    // Check if user already exists
    if (users.find((u) => u.email === email)) {
      throw new Error('Bu email adresi zaten kullanımda');
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      username,
      role: 'user',
      createdAt: new Date().toISOString(),
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setUser(newUser);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const submitStory = async (storyData: Omit<Story, 'id' | 'userId' | 'status' | 'createdAt'>) => {
    if (!user) {
      throw new Error('Hikaye göndermek için giriş yapmalısınız');
    }

    const newStory: Story = {
      id: `story-${Date.now()}`,
      userId: user.id,
      ...storyData,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    const updatedStories = [...stories, newStory];
    setStories(updatedStories);
    localStorage.setItem('stories', JSON.stringify(updatedStories));
  };

  const getUserStories = () => {
    if (!user) return [];
    return stories.filter((story) => story.userId === user.id);
  };

  const getAllStories = () => {
    return stories;
  };

  const getApprovedStories = () => {
    return stories.filter((story) => story.status === 'approved');
  };

  const updateStoryStatus = async (storyId: string, status: 'approved' | 'rejected') => {
    if (!user || user.role !== 'admin') {
      throw new Error('Sadece admin hikaye durumunu değiştirebilir');
    }

    const updatedStories = stories.map((story) =>
      story.id === storyId
        ? { ...story, status, approvedAt: status === 'approved' ? new Date().toISOString() : undefined }
        : story
    );

    setStories(updatedStories);
    localStorage.setItem('stories', JSON.stringify(updatedStories));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        submitStory,
        getUserStories,
        getAllStories,
        getApprovedStories,
        updateStoryStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}