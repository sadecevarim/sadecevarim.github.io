import { ImageWithFallback } from './figma/ImageWithFallback';
import { DataDripScroller } from './DataDripScroller';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { getSiteContent } from '../config/siteContent';
import { FEATURED_ARTICLES, getArticleMeta } from '../config/ONE CIKANLAR EDIT';
import { useState, useEffect } from 'react';

interface Article {
  id: number;
  title: string;
  snippet: string;
  image: string;
  category: string;
  author: string;
  date: string;
}

interface HomePageProps {
  onNavigate: (page: string, articleId?: number) => void;
  onOpenContact: () => void;
}

export function HomePage({ onNavigate, onOpenContact }: HomePageProps) {
  const { language } = useLanguage();
  const lang = language as 'tr' | 'en';
  const content = getSiteContent(language).anaSayfa;
  
  // Dynamic Background System - Brutalist Glitch Effect
  const heroBackgrounds = [
    'https://images.unsplash.com/photo-1735335577971-1bd9a540f1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzaWxob3VldHRlJTIwd2F0ZXJmcm9udHxlbnwxfHx8fDE3Njc5NjQ0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1725302455579-6ea74d8b371e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxob3VldHRlJTIwbmlnaHQlMjBjaXR5fGVufDF8fHx8MTc2Nzk2NDQ2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1734375306281-dfddc5641f15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25lbHklMjBmaWd1cmUlMjBjaXR5fGVufDF8fHx8MTc2Nzk2NDQ2MXww&ixlib=rb-4.1.0&q=80&w=1080',
  ];
  
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger glitch effect (black blink)
      setIsGlitching(true);
      
      // Change background after brief black screen
      setTimeout(() => {
        setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
        setIsGlitching(false);
      }, 100); // 0.1 second black screen
    }, 4000); // Change every 4 seconds
    
    return () => clearInterval(interval);
  }, [heroBackgrounds.length]);
  
  // Build articles from central config
  const articles: Article[] = FEATURED_ARTICLES.map(articleConfig => {
    const meta = getArticleMeta(articleConfig.id, lang);
    if (!meta) return null;
    
    // Get image URL from assets
    const getImageUrl = (filename: string) => {
      try {
        return new URL(`../assets/posts/${filename}`, import.meta.url).href;
      } catch {
        return '';
      }
    };
    
    return {
      id: articleConfig.id,
      title: meta.title,
      snippet: meta.snippet,
      image: getImageUrl(meta.headerImage),
      category: meta.category,
      author: meta.author,
      date: meta.date,
    };
  }).filter(Boolean) as Article[];

  return (
    <div className="bg-background">
      {/* Hero Section - Moodboard Style */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
        {/* Dynamic Background with Glitch Effect */}
        <div className="absolute inset-0">
          {isGlitching ? (
            // Black screen during glitch transition
            <div className="w-full h-full bg-black"></div>
          ) : (
            // Current background image with dark overlay
            <>
              <ImageWithFallback
                src={heroBackgrounds[currentBgIndex]}
                alt="Hero Background"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary"></div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-accent mb-6 tracking-tight leading-none">
            {content.hero.title}
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            {content.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('stories')}
              className="bg-accent text-white px-10 py-4 border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-300 uppercase tracking-wider font-bold text-lg"
            >
              {content.hero.btn1}
            </button>
            <button
              onClick={() => onNavigate('works')}
              className="bg-transparent text-white px-10 py-4 border-2 border-white hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-wider font-bold text-lg"
            >
              {content.hero.btn2}
            </button>
          </div>
        </div>

        {/* Data Drip Scroller - Cyberpunk Aesthetic */}
        <DataDripScroller />
      </section>

      {/* Featured Articles Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{content.articles.title}</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group cursor-pointer border-2 border-gray-700 hover:border-accent transition-all duration-300 bg-gray-900 overflow-hidden"
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
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {article.snippet}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 pb-4 border-b border-gray-700">
                    <span className="font-semibold">{article.author}</span>
                    <span>•</span>
                    <span>{new Date(article.date).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent group-hover:text-accent transition-colors">
                    <span>{content.articles.read}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          
        </div>
      </section>

      {/* Silhouette Collage Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {content.collage.title} <span className="text-accent">{content.collage.subtitle}</span>
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
                <p className="text-accent font-bold text-2xl uppercase tracking-wide">{content.collage.cards[0].title}</p>
                <p className="text-white/80 text-sm mt-2">{content.collage.cards[0].text}</p>
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
                <p className="text-accent font-bold text-2xl uppercase tracking-wide">{content.collage.cards[1].title}</p>
                <p className="text-white/80 text-sm mt-2">{content.collage.cards[1].text}</p>
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
                <p className="text-accent font-bold text-2xl uppercase tracking-wide">{content.collage.cards[2].title}</p>
                <p className="text-white/80 text-sm mt-2">{content.collage.cards[2].text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary border-y-2 border-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {content.cta.title}
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
              {content.cta.subtitle}
            </p>
            <button 
              onClick={onOpenContact}
              className="bg-accent text-white px-8 py-4 border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-300 uppercase tracking-wider font-bold">
              {content.cta.button}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}