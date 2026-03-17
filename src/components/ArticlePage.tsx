import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { getArticleConfig, getArticleIds } from '../config/ONE CIKANLAR EDIT';

/* ===============================================
   📝 EDIT ARTICLES FROM: src/config/ONE CIKANLAR EDIT.ts
   All blog metadata (title, author, date, category, 
   images, tags) can be edited from that single file.
   =============================================== */

/**
 * 🖼️ IMAGE MAPPING CONFIGURATION
 * Maps marker keys to actual image filenames
 * Usage in content: (Görsel:key-name)
 */
const IMAGE_MAP: Record<string, string> = {
  'blog1-ayna': 'blog1 ayna.jpg',
  'blog1-foto': 'blog 1 foto.jpg',
  'blog1-maske': 'blog1 maske gorsel.jpg',
  'blog 2 ilk': 'blog 2 ilk.jpg',
  'blog 2 dijital siddet foto': 'blog 2 dijital siddet foto.jpg',
  'blog2 3': 'blog2 3.jpg',
  'blog 3 dijital arsiv foto': 'blog 3 dijital arsiv foto.jpg',
  'blog3 1': 'blog3 1.jpg',
  'blog3 2': 'blog3 2.jpg',
  // Add more image mappings as needed
};

/**
 * 🌐 FALLBACK IMAGES (for web URLs)
 * Used when local images are not found
 */
const FALLBACK_IMAGES: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1574800158612-0467d582e440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3Njc4NzE3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  2: 'https://images.unsplash.com/photo-1558522195-e1201b090344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnR8ZW58MXx8fHwxNzY3ODgwMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
};

/* ===============================================
   HELPER FUNCTIONS - Do not edit
   =============================================== */

const getImageUrl = (key: string): string => {
  try {
    return new URL(`../assets/posts/${IMAGE_MAP[key]}`, import.meta.url).href;
  } catch {
    return '';
  }
};

const getHeaderImageUrl = (imageName: string): string => {
  try {
    return new URL(`../assets/posts/${imageName}`, import.meta.url).href;
  } catch {
    return '';
  }
};

/* ===============================================
   INTERFACE & PROP DEFINITIONS
   =============================================== */

interface ArticlePageProps {
  articleId: number;
  onNavigate: (page: string) => void;
}

interface ArticleData {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  content: string[];
  tags: string[];
}

/* ===============================================
   MAIN COMPONENT
   =============================================== */

export function ArticlePage({ articleId, onNavigate, onOpenContact }: ArticlePageProps & { onOpenContact?: () => void }) {
  const { t, language } = useLanguage();
  const shouldShowBottomNav = true;
  
  /**
   * 🏗️ BUILD ARTICLE DATA
   * Fetches and assembles article data from configuration and translations
   * - PRIMARY: Data from ONE CIKANLAR EDIT.ts config (title, author, date, category, tags)
   * - FALLBACK: Translations for content and backwards compatibility
   * - Handles fallback images if local assets not found
   */
  const buildArticle = (id: number): ArticleData => {
    const storyKey = `sample.story${id}`;
    const articleConfig = getArticleConfig(id);
    const lang = language as 'tr' | 'en';
    
    // ✅ PRIORITY: Get metadata from ONE CIKANLAR EDIT.ts config first
    // Use fullTitle for article detail page if available, otherwise use short title
    const title = articleConfig?.fullTitle?.[lang] || articleConfig?.title[lang] || t(`${storyKey}.title`) || '';
    const author = articleConfig?.author[lang] || t(`${storyKey}.author`) || '';
    const category = articleConfig?.category[lang] || t(`stories.story${id}.category`) || '';
    const date = articleConfig?.date || '2026-01-05';
    const tags = articleConfig?.tags[lang] || [];
    
    // Content still comes from translations (makale-yazi-edit.ts)
    const rawContent = t(`${storyKey}.content`) || '';
    const content = typeof rawContent === 'string' 
      ? rawContent.split(/\n\n+/).map((s) => s.trim()).filter(Boolean) 
      : [String(rawContent)];
    
    // Fallback header image
    const fallbackHeaderImages: Record<number, string> = {
      1: 'https://images.unsplash.com/photo-1574800158612-0467d582e440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3Njc4NzE3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      2: 'https://images.unsplash.com/photo-1558522195-e1201b090344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnR8ZW58MXx8fHwxNzY3ODgwMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    };
    
    const headerImageFilename = articleConfig?.headerImage || `blog ${id} foto.jpg`;
    const headerImageUrl = getHeaderImageUrl(headerImageFilename) || fallbackHeaderImages[id] || fallbackHeaderImages[1];

    return {
      id,
      title,
      category,
      date,
      author,
      image: headerImageUrl,
      content,
      tags,
    };
  };

  const article = buildArticle(articleId) || buildArticle(1);
  const articleIds = getArticleIds();
  const currentIndex = Math.max(0, articleIds.indexOf(article.id));
  const prevId = articleIds[(currentIndex - 1 + articleIds.length) % articleIds.length];
  const nextId = articleIds[(currentIndex + 1) % articleIds.length];


  const renderInlineBold = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, idx) => {
      const match = part.match(/^\*\*(.+)\*\*$/);
      if (match) {
        return (
          <strong key={`b-${idx}`} className="font-semibold">
            {match[1]}
          </strong>
        );
      }
      return (
        <span key={`t-${idx}`}>
          {part}
        </span>
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 md:px-6 py-6">
        <button
          onClick={() => onNavigate('works')}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary hover:text-accent transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>{t('article.back')}</span>
        </button>
      </div>

      {/* Article Header */}
      <div className="relative h-[50vh] md:h-[60vh] border-y-2 border-primary overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-6 pt-6 pb-10 md:px-12 md:pt-12 md:pb-16">
          <div className="container mx-auto">
            <div className="inline-block bg-accent text-white px-4 py-2 mb-4 text-xs uppercase tracking-wider font-semibold">
              {article.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span className="text-sm uppercase tracking-wide">
                  {new Date(article.date).toLocaleDateString(
                    language === 'tr' ? 'tr-TR' : 'en-US',
                    { day: '2-digit', month: 'long', year: 'numeric' }
                  )}
                </span>
              </div>
              {article.author && (
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span className="text-sm uppercase tracking-wide">{article.author}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Prev/Next) */}
      {shouldShowBottomNav && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t-2 border-primary bg-background">
          <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
            <button
              onClick={() => onNavigate('article', prevId)}
              className="px-3 py-3 border-2 border-primary text-xs font-semibold uppercase tracking-wider bg-background/90 hover:bg-primary hover:text-white transition-colors"
            >
              {t('article.prev')}
            </button>
            <button
              onClick={() => onNavigate('article', nextId)}
              className="px-3 py-3 border-2 border-primary text-xs font-semibold uppercase tracking-wider bg-background/90 hover:bg-accent hover:text-white hover:border-accent transition-colors"
            >
              {t('article.next')}
            </button>
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="pt-20 pb-24 md:pt-24 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Author Info */}
            {article.author && (
              <div className="mt-6 md:mt-8 flex items-center gap-3 mb-8 pb-6 border-b-2 border-muted">
                <User size={20} className="text-accent" />
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {t('story.by')} <span className="text-foreground">{article.author}</span>
                </span>
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              {article.content.map((paragraph, index) => {
                const trimmed = paragraph.trim();

                // Handle numbered headers (e.g., "1. Title", "2. Another Title")
                const headerMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
                if (headerMatch && trimmed.split('\n').length === 1) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-primary mt-10 mb-6">
                      {trimmed}
                    </h2>
                  );
                }

                // Handle paragraphs with image markers
                if (trimmed.includes('(Görsel:')) {
                  const lines = paragraph.split('\n');
                  return (
                    <div key={index} className="mb-6">
                      {lines.map((line, li) => {
                        const l = line.trim();
                        const markerMatch = l.match(/^\(Görsel:(.+)\)$/i);
                        
                        if (markerMatch) {
                          const key = markerMatch[1].trim();
                          const imageSrc = getImageUrl(key) || article.image;
                          
                          return (
                            <figure key={`fig-${li}`} className="w-full overflow-hidden rounded-md mb-6">
                              <ImageWithFallback
                                src={imageSrc}
                                alt={`${article.title} - Görsel`}
                                className="w-full h-auto object-cover"
                              />
                            </figure>
                          );
                        }

                        if (l === '') return null;
                        
                        // Check if line is a numbered header
                        const lineHeaderMatch = l.match(/^(\d+)\.\s+(.+)$/);
                        if (lineHeaderMatch) {
                          return (
                            <h2 key={`h-${li}`} className="text-2xl font-bold text-primary mt-10 mb-6">
                              {l}
                            </h2>
                          );
                        }
                        
                        return (
                          <p key={`p-${li}`} className="mb-6 text-foreground leading-relaxed">
                            {renderInlineBold(l)}
                          </p>
                        );
                      })}
                    </div>
                  );
                }

                // Handle References section
                if (trimmed.startsWith('Kaynakça') || trimmed.startsWith('References')) {
                  const lines = paragraph.split('\n').map((l) => l.trim()).filter(Boolean);
                  if (lines.length > 0 && (lines[0] === 'Kaynakça' || lines[0] === 'References')) {
                    lines.shift();
                  }
                  return (
                    <div key={index} className="mt-8 pt-4 border-t-2 border-primary">
                      <h3 className="text-lg font-bold mb-4">
                        {trimmed.startsWith('Kaynakça') ? 'Kaynakça' : 'References'}
                      </h3>
                      <ol className="list-decimal ml-6 space-y-2">
                        {lines.map((ref, i) => (
                          <li key={i} className="text-foreground leading-relaxed">
                            {ref}
                          </li>
                        ))}
                      </ol>
                    </div>
                  );
                }

                // Regular paragraph
                return (
                  <p key={index} className="mb-6 text-foreground leading-relaxed">
                    {renderInlineBold(paragraph)}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t-2 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <Tag size={20} className="text-accent" />
                <h3 className="text-lg font-bold uppercase tracking-wide">{t('story.tags')}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 border-2 border-primary text-sm font-semibold uppercase tracking-wider hover:bg-accent hover:text-white hover:border-accent transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share/Contact CTA */}
            <div className="mt-12 p-8 bg-muted border-2 border-primary">
              <h3 className="text-2xl font-bold mb-4 text-center uppercase">
                {t('story.share.story')}
              </h3>
              <p className="text-center text-muted-foreground mb-6">
                {t('story.share.message')}
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    if (onOpenContact) {
                      onOpenContact();
                    } else {
                      onNavigate('contact');
                    }
                  }}
                  className="bg-accent text-white px-8 py-3 border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-300 uppercase tracking-wider font-bold"
                >
                  {t('story.share.story')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
