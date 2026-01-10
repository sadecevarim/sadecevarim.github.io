import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Filter } from 'lucide-react';
import { useState } from 'react';

interface CategoryPageProps {
  onNavigate: (page: string, articleId?: number) => void;
}

interface Article {
  id: number;
  title: string;
  snippet: string;
  image: string;
  category: string;
  date: string;
}

export function CategoryPage({ onNavigate }: CategoryPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');

  const categories = ['Tümü', 'Düşünce', 'Sanat', 'Felsefe', 'Yaşam'];

  const allArticles: Article[] = [
    {
      id: 1,
      title: 'Sessizliğin Gücü',
      snippet: 'Meydan okuyan, karşı duran, sessiz ama keskin varoluş.',
      image: 'https://images.unsplash.com/photo-1574800158612-0467d582e440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3Njc4NzE3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Düşünce',
      date: '5 Ocak 2026',
    },
    {
      id: 2,
      title: 'Karşı Duruş',
      snippet: 'Görünmezliğin içinde bile bir varlık, bir iz bırakmak.',
      image: 'https://images.unsplash.com/photo-1558522195-e1201b090344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnR8ZW58MXx8fHwxNzY3ODgwMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Sanat',
      date: '3 Ocak 2026',
    },
    {
      id: 3,
      title: 'Varoluş Manifestosu',
      snippet: 'Her nefes bir isyan, her adım bir devrim.',
      image: 'https://images.unsplash.com/photo-1548566862-2c9b1fed780a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Njc4NzQ4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Felsefe',
      date: '1 Ocak 2026',
    },
    {
      id: 4,
      title: 'Kentsel Yalnızlık',
      snippet: 'Milyonların arasında tek başına olmak.',
      image: 'https://images.unsplash.com/photo-1431440869543-efaf3388c585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWVzdGhldGljfGVufDF8fHx8MTc2Nzk2MDM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Yaşam',
      date: '28 Aralık 2025',
    },
    {
      id: 5,
      title: 'Renkli İsyan',
      snippet: 'Siyah beyaz dünyada pembe bir çığlık.',
      image: 'https://images.unsplash.com/photo-1631230863402-1e8fdb5997f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwcGluayUyMGxpZ2h0c3xlbnwxfHx8fDE3Njc5NjAzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Sanat',
      date: '25 Aralık 2025',
    },
    {
      id: 6,
      title: 'Minimal Yaşam',
      snippet: 'Azla yetinmek değil, öze dönmek.',
      image: 'https://images.unsplash.com/photo-1574800158612-0467d582e440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3Njc4NzE3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Yaşam',
      date: '20 Aralık 2025',
    },
    {
      id: 7,
      title: 'Düşünce Özgürlüğü',
      snippet: 'Kafanın içinde sınır tanımayan bir evren.',
      image: 'https://images.unsplash.com/photo-1633144135945-d20b08db66b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJvbGQlMjBwaW5rfGVufDF8fHx8MTc2Nzk2MDM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Düşünce',
      date: '15 Aralık 2025',
    },
    {
      id: 8,
      title: 'Varoluşsal Kaygı',
      snippet: 'Olmak ya da olmamak sorusunun ötesinde.',
      image: 'https://images.unsplash.com/photo-1548566862-2c9b1fed780a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Njc4NzQ4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Felsefe',
      date: '10 Aralık 2025',
    },
    {
      id: 9,
      title: 'Sanatın Dili',
      snippet: 'Kelimelerin yetmediği yerde başlayan anlatım.',
      image: 'https://images.unsplash.com/photo-1558522195-e1201b090344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnR8ZW58MXx8fHwxNzY3ODgwMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Sanat',
      date: '5 Aralık 2025',
    },
  ];

  const filteredArticles =
    selectedCategory === 'Tümü'
      ? allArticles
      : allArticles.filter((article) => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary border-b-2 border-primary py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Tüm Yazılar
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-16 md:top-20 z-40 bg-background border-b-2 border-primary py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Filter size={20} className="text-accent" />
            <span className="font-bold uppercase tracking-wide text-sm">Filtrele:</span>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 border-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-white border-accent'
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group cursor-pointer border-2 border-primary hover:border-accent transition-all duration-300 bg-white overflow-hidden"
                onClick={() => onNavigate('article', article.id)}
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 text-xs uppercase tracking-wider font-semibold">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    {article.date}
                  </p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {article.snippet}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary group-hover:text-accent transition-colors">
                    <span>Devamını Oku</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl font-bold text-muted-foreground uppercase tracking-wide">
                Bu kategoride henüz yazı yok
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
