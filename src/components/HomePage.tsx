import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface Article {
  id: number;
  title: string;
  snippet: string;
  image: string;
  category: string;
}

interface HomePageProps {
  onNavigate: (page: string, articleId?: number) => void;
  onOpenContact: () => void;
}

export function HomePage({ onNavigate, onOpenContact }: HomePageProps) {
  const { t } = useLanguage();

  const articles: Article[] = [
    {
      id: 1,
      title: t('home.articles.card1.title'),
      snippet: t('home.articles.card1.snippet'),
      image: 'https://images.unsplash.com/photo-1574800158612-0467d582e440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3Njc4NzE3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: t('home.articles.category1'),
    },
    {
      id: 2,
      title: t('home.articles.card2.title'),
      snippet: t('home.articles.card2.snippet'),
      image: 'https://images.unsplash.com/photo-1558522195-e1201b090344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnR8ZW58MXx8fHwxNzY3ODgwMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: t('home.articles.category2'),
    },
    {
      id: 3,
      title: t('home.articles.card3.title'),
      snippet: t('home.articles.card3.snippet'),
      image: 'https://images.unsplash.com/photo-1548566862-2c9b1fed780a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Njc4NzQ4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: t('home.articles.category3'),
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section - Moodboard Style */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1735335577971-1bd9a540f1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzaWxob3VldHRlJTIwd2F0ZXJmcm9udHxlbnwxfHx8fDE3Njc5NjQ0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Silhouette"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-accent mb-6 tracking-tight leading-none">
            {t('hero.title')}
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('stories')}
              className="bg-accent text-white px-10 py-4 border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-300 uppercase tracking-wider font-bold text-lg"
            >
              {t('home.hero.btn1')}
            </button>
            <button
              onClick={() => onNavigate('gallery')}
              className="bg-transparent text-white px-10 py-4 border-2 border-white hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-wider font-bold text-lg"
            >
              {t('home.hero.btn2')}
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>
      
      {/* Concept Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary via-[#0d0d0d] to-background text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-8 text-center">
              {t('home.concept.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-3 uppercase">{t('home.concept.1.title')}</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t('home.concept.1.text')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-3 uppercase">{t('home.concept.2.title')}</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t('home.concept.2.text')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-3 uppercase">{t('home.concept.3.title')}</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t('home.concept.3.text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Silhouette Collage Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {t('home.collage.title')} <span className="text-accent">{t('home.collage.subtitle')}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative aspect-[3/4] overflow-hidden border-2 border-primary hover:border-accent transition-all duration-300 group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1725302455579-6ea74d8b371e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxob3VldHRlJTIwbmlnaHQlMjBjaXR5fGVufDF8fHx8MTc2Nzk2NDQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Silhouette Night City"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-accent font-bold text-2xl uppercase tracking-wide">{t('home.collage.card1.title')}</p>
                <p className="text-white/80 text-sm mt-2">{t('home.collage.card1.text')}</p>
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden border-2 border-primary hover:border-accent transition-all duration-300 group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1655606438064-804ad1b45222?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMG5pZ2h0JTIwYm9rZWh8ZW58MXx8fHwxNzY3OTY0NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Urban Night Bokeh"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-accent font-bold text-2xl uppercase tracking-wide">{t('home.collage.card2.title')}</p>
                <p className="text-white/80 text-sm mt-2">{t('home.collage.card2.text')}</p>
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden border-2 border-primary hover:border-accent transition-all duration-300 group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1734375306281-dfddc5641f15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25lbHklMjBmaWd1cmUlMjBjaXR5fGVufDF8fHx8MTc2Nzk2NDQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Lonely Figure City"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-accent font-bold text-2xl uppercase tracking-wide">{t('home.collage.card3.title')}</p>
                <p className="text-white/80 text-sm mt-2">{t('home.collage.card3.text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.articles.title')}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group cursor-pointer border-2 border-primary hover:border-accent transition-all duration-300 bg-white overflow-hidden"
                onClick={() => onNavigate('article', article.id)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
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
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {article.snippet}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary group-hover:text-accent transition-colors">
                    <span>{t('home.articles.read')}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary border-y-2 border-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
              {t('home.cta.subtitle')}
            </p>
            <button 
              onClick={onOpenContact}
              className="bg-accent text-white px-8 py-4 border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-300 uppercase tracking-wider font-bold">
              {t('home.cta.button')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}