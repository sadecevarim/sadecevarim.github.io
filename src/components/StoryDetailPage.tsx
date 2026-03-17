import { useAuth } from './AuthContext';
import { useLanguage } from './LanguageContext';
import { useTranslatedStories } from './useTranslatedStories';
import { ArrowLeft, User, Calendar, Image as ImageIcon, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface StoryDetailPageProps {
  storyId: string;
  onNavigate: (page: string, storyId?: string) => void;
}

export function StoryDetailPage({ storyId, onNavigate, onOpenContact }: StoryDetailPageProps & { onOpenContact?: () => void }) {
  const { getApprovedStories } = useAuth();
  const { t } = useLanguage();
  const translatedStories = useTranslatedStories(getApprovedStories());
  const story = translatedStories.find((s) => s.id === storyId);
  const orderedStories = [...translatedStories].sort((a, b) => {
    const dateA = a.approvedAt ? new Date(a.approvedAt).getTime() : new Date(a.createdAt).getTime();
    const dateB = b.approvedAt ? new Date(b.approvedAt).getTime() : new Date(b.createdAt).getTime();
    return dateB - dateA;
  });
  const storyIndex = orderedStories.findIndex((s) => s.id === storyId);
  const hasNav = orderedStories.length > 1 && storyIndex >= 0;
  const prevStory = hasNav
    ? orderedStories[(storyIndex - 1 + orderedStories.length) % orderedStories.length]
    : undefined;
  const nextStory = hasNav
    ? orderedStories[(storyIndex + 1) % orderedStories.length]
    : undefined;

  if (!story) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t('story.notfound')}</h2>
          <button
            onClick={() => onNavigate('stories')}
            className="text-accent font-semibold uppercase tracking-wide hover:underline"
          >
            {t('story.back')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 md:px-6 py-6">
        <button
          onClick={() => onNavigate('stories')}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary hover:text-accent transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>{t('story.back')}</span>
        </button>
      </div>

      {/* Story Header */}
      <div className="bg-gradient-to-br from-accent/10 to-primary/10 border-y-2 border-primary py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Author Avatar */}
            {story.isAnonymous ? (
              <div className="w-24 h-24 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
                <User size={48} className="text-accent" />
              </div>
            ) : (
              <div className="w-24 h-24 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white text-4xl font-bold uppercase">
                  {(story.authorName || 'A')[0]}
                </span>
              </div>
            )}

            {/* Author Name */}
            <p className="text-lg font-semibold uppercase tracking-wide mb-2">
              {story.isAnonymous ? (
                <span className="text-muted-foreground">{t('story.anonymous')}</span>
              ) : (
                <span className="text-accent">{story.authorName}</span>
              )}
            </p>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{story.title}</h1>

            {/* Date */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar size={16} />
              <span className="text-sm uppercase tracking-wide">
                {new Date(story.createdAt).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation (Prev/Next) */}
      {hasNav && prevStory && nextStory && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t-2 border-primary bg-background">
          <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
            <button
              onClick={() => onNavigate('story-detail', prevStory.id)}
              className="px-3 py-3 border-2 border-primary text-xs font-semibold uppercase tracking-wider bg-background hover:bg-primary hover:text-white transition-colors"
            >
              {t('story.prev')}
            </button>
            <button
              onClick={() => onNavigate('story-detail', nextStory.id)}
              className="px-3 py-3 border-2 border-primary text-xs font-semibold uppercase tracking-wider bg-background hover:bg-accent hover:text-white hover:border-accent transition-colors"
            >
              {t('story.next')}
            </button>
          </div>
        </div>
      )}

      {/* Story Content */}
      <article className="pt-12 pb-24 md:pt-16 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Media Content - Image or Video */}
            {story.imageUrl && story.mediaType === 'image' && (
              <div className="mb-12">
                <div className="relative aspect-video overflow-hidden border-2 border-primary">
                  <ImageWithFallback
                    src={story.imageUrl}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm px-4 py-2 border-2 border-white/50">
                    <div className="flex items-center gap-2">
                      <ImageIcon size={16} className="text-white" />
                      <span className="text-white text-xs font-bold uppercase tracking-wider">{t('story.visual')}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center italic">
                  {t('story.visual.caption')}
                </p>
              </div>
            )}

            {story.videoUrl && story.mediaType === 'video' && (
              <div className="mb-12">
                <div className="relative aspect-video overflow-hidden border-2 border-accent">
                  <iframe
                    src={story.videoUrl}
                    title={story.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm px-4 py-2 border-2 border-white/50">
                    <div className="flex items-center gap-2">
                      <Play size={16} className="text-white" />
                      <span className="text-white text-xs font-bold uppercase tracking-wider">{t('story.video')}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center italic">
                  {t('story.video.caption')}
                </p>
              </div>
            )}

            {/* Text Content */}
            <div className="prose prose-lg max-w-none">
              {story.content.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="mb-6 text-foreground leading-relaxed text-lg">
                    {paragraph}
                  </p>
                )
              ))}
            </div>

            {/* Divider */}
            <div className="my-12 w-24 h-1 bg-accent mx-auto" />

            {/* Solidarity Message */}
            <div className="bg-muted border-2 border-primary p-8 text-center">
              <p className="text-lg font-semibold uppercase tracking-wide mb-2">
                {t('hero.title')}
              </p>
              <p className="text-muted-foreground">
                {t('story.message')}
              </p>
            </div>

            {/* Share CTA */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                {t('story.share.message')}
              </p>
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
      </article>
    </div>
  );
}