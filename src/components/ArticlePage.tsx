import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

interface ArticlePageProps {
  articleId: number;
  onNavigate: (page: string) => void;
}

interface ArticleData {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  content: string[];
  tags: string[];
}

export function ArticlePage({ articleId, onNavigate, onOpenContact }: ArticlePageProps & { onOpenContact?: () => void }) {
  const { t } = useLanguage();
  // Mock article data sourced from translations so language toggles work
  const buildArticle = (id: number): ArticleData => {
    const keyBase = `sample.story${id}`;
    const title = t(`${keyBase}.title`);
    const rawContent = t(`${keyBase}.content`);
    const content = typeof rawContent === 'string' ? rawContent.split(/\n\n+/).map((s) => s.trim()).filter(Boolean) : [String(rawContent)];
    const category = t(`stories.story${id}.category`) || '';
    const image = id === 1
      ? 'https://images.unsplash.com/photo-1574800158612-0467d582e440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3Njc4NzE3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      : id === 2
      ? 'https://images.unsplash.com/photo-1558522195-e1201b090344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnR8ZW58MXx8fHwxNzY3ODgwMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      : 'https://images.unsplash.com/photo-1548566862-2c9b1fed780a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Njc4NzQ4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
    return {
      id,
      title,
      category,
      date: '2026-01-05',
      image,
      content,
      tags: [],
    };
  };

  const article = buildArticle(articleId) || buildArticle(1);

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 md:px-6 py-6">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary hover:text-accent transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>{t('story.back')}</span>
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
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
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
                <span className="text-sm uppercase tracking-wide">{article.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {article.content.map((paragraph, index) => (
                <p key={index} className="mb-6 text-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t-2 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <Tag size={20} className="text-accent" />
                <h3 className="text-lg font-bold uppercase tracking-wide">Etiketler</h3>
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
