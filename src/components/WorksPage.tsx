import { ImageWithFallback } from './figma/ImageWithFallback';
import { DataDripScroller } from './DataDripScroller';
import { ArrowRight, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { getSiteContent } from '../config/siteContent';
import { FEATURED_ARTICLES, getArticleMeta } from '../config/ONE CIKANLAR EDIT';
import { WORKS_CATEGORIES, getWorksCategoryLabel, type WorksCategoryId } from '../config/filtreleri-yonet';
import { useState } from 'react';

interface WorksPageProps {
  onNavigate: (page: string, articleId?: number) => void;
}

interface ArticleCard {
  id: number;
  title: string;
  snippet: string;
  image: string;
  categoryId: WorksCategoryId;
  author: string;
  date: string;
}

interface GalleryItem {
  id: number;
  title: string;
  categoryId: WorksCategoryId;
  image: string;
  description: string;
}

type WorksItem =
  | (ArticleCard & { kind: 'article' })
  | (GalleryItem & { kind: 'gallery' });

export function WorksPage({ onNavigate }: WorksPageProps) {
  const { language } = useLanguage();
  const lang = language as 'tr' | 'en';
  const content = getSiteContent(language).calismalar;

  const articles: ArticleCard[] = FEATURED_ARTICLES.map((articleConfig) => {
    const meta = getArticleMeta(articleConfig.id, lang);
    if (!meta) return null;

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
      categoryId: 'blog',
      author: meta.author,
      date: meta.date,
    };
  }).filter(Boolean) as ArticleCard[];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1763723510712-1a11fa7589ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZ2J0cSUyMHByaWRlJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY3OTYzMzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: content.galleryItems[0].title,
      categoryId: 'community',
      description: content.galleryItems[0].description,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1710787051760-1bd406b7c535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWVlciUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Nzk2MzM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: content.galleryItems[1].title,
      categoryId: 'portrait',
      description: content.galleryItems[1].description,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1633641847750-a7f2b17624e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2dlbmRlciUyMHByaWRlfGVufDF8fHx8MTc2Nzk2MzM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: content.galleryItems[2].title,
      categoryId: 'activism',
      description: content.galleryItems[2].description,
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1516119555254-e3b36f4b6769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWluYm93JTIwZmxhZyUyMGNvbW11bml0eXxlbnwxfHx8fDE3Njc5NjMzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: content.galleryItems[3].title,
      categoryId: 'community',
      description: content.galleryItems[3].description,
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1713783313100-d5bb0c90dc4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZ2J0cSUyMGFjdGl2aXNtfGVufDF8fHx8MTc2Nzk2MzM1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: content.galleryItems[4].title,
      categoryId: 'activism',
      description: content.galleryItems[4].description,
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1633144135945-d20b08db66b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJvbGQlMjBwaW5rfGVufDF8fHx8MTc2Nzk2MDM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: content.galleryItems[5].title,
      categoryId: 'art',
      description: content.galleryItems[5].description,
    },
  ];

  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<WorksCategoryId>('all');

  const worksItems: WorksItem[] = [
    ...articles.map((article) => ({ ...article, kind: 'article' as const })),
    ...galleryItems.map((item) => ({ ...item, kind: 'gallery' as const })),
  ];

  const filters = WORKS_CATEGORIES;

  const filteredItems =
    selectedFilter === 'all'
      ? worksItems
      : worksItems.filter((item) => item.categoryId === selectedFilter);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative bg-primary border-b-2 border-primary py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-accent text-center mb-6">
            {content.title}
          </h1>
          <p className="text-white/80 text-center max-w-2xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Data Drip Scroller */}
        <DataDripScroller bottomOffset="bottom-2" />
      </div>

      {/* Filters */}
      <div className="sticky top-16 md:top-20 z-40 bg-background border-b-2 border-primary py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-3 border-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? 'bg-accent text-white border-accent'
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {filter.label[lang]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Works Grid */}
      <div className="py-12">
        <div className="container mx-auto px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map((item) => {
              if (item.kind === 'article') {
                return (
                  <article
                    key={`article-${item.id}`}
                    className="group cursor-pointer border-2 border-primary hover:border-accent transition-all duration-300 bg-white overflow-hidden"
                    onClick={() => onNavigate('article', item.id)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 text-xs uppercase tracking-wider font-semibold">
                        {getWorksCategoryLabel(item.categoryId, lang)}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {item.snippet}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4 pb-4 border-b border-muted">
                        <span className="font-semibold">{item.author}</span>
                        <span>•</span>
                        <span>
                          {new Date(item.date).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary group-hover:text-accent transition-colors">
                        <span>{content.read}</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                );
              }

              return (
                <div
                  key={`gallery-${item.id}`}
                  className="group relative aspect-[4/3] overflow-hidden cursor-pointer border-2 border-primary hover:border-accent transition-all duration-300"
                  onClick={() => setSelectedItem(item)}
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="inline-block bg-accent text-white px-2 py-1 text-xs uppercase tracking-wider font-semibold mb-2">
                        {getWorksCategoryLabel(item.categoryId, lang)}
                      </div>
                      <h3 className="text-white text-lg font-bold uppercase">{item.title}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-10"
            onClick={() => setSelectedItem(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-background border-2 border-accent overflow-hidden">
              <div className="aspect-video relative bg-muted">
                <ImageWithFallback
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="inline-block bg-accent text-white px-3 py-1 text-xs uppercase tracking-wider font-semibold mb-4">
                  {selectedItem.category}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  {selectedItem.title}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
