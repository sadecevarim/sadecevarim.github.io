import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, User, Play } from 'lucide-react';
import { useAuth } from './AuthContext';
import { useLanguage } from './LanguageContext';
import { useTranslatedStories } from './useTranslatedStories';
import { useState } from 'react';

interface StoriesPageProps {
  onNavigate: (page: string, storyId?: string) => void;
}

export function StoriesPage({ onNavigate }: StoriesPageProps) {
  const { getApprovedStories } = useAuth();
  const { t } = useLanguage();
  const rawApprovedStories = getApprovedStories();
  const approvedStories = useTranslatedStories(rawApprovedStories);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'text' | 'visual' | 'video'>('all');

  // Story images for visual representation
  const storyImages = [
    'https://images.unsplash.com/photo-1623764410283-b45aeaacfd5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzdG9yeXRlbGxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjgwMzg3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1659598086265-4728c6fbce19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW90aW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2ODAzODc2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1600440699677-c6f39725adf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHlvdXRoJTIwY3VsdHVyZXxlbnwxfHx8fDE3NjgwMzg3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1763723510712-1a11fa7589ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZ2J0cSUyMHByaWRlJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY3OTYzMzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1710787051760-1bd406b7c535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWVlciUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Nzk2MzM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1633641847750-a7f2b17624e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2dlbmRlciUyMHByaWRlfGVufDF8fHx8MTc2Nzk2MzM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-[#1a1a1a] to-background">
      {/* Hero Header */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-accent text-center mb-6 tracking-tight leading-none">
            {t('stories.title')}
          </h1>
          <p className="text-white/90 text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed mb-8">
            {t('stories.subtitle')}
          </p>
          <div className="w-32 h-1 bg-accent mx-auto" />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-20 z-40 bg-primary/95 backdrop-blur-sm border-y-2 border-accent/50 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-6 py-2 uppercase tracking-wider font-bold text-sm border-2 transition-all ${
                selectedFilter === 'all'
                  ? 'bg-accent text-white border-accent'
                  : 'bg-transparent text-white border-white/30 hover:border-accent hover:text-accent'
              }`}
            >
              {t('stories.filter.all')}
            </button>
            <button
              onClick={() => setSelectedFilter('text')}
              className={`px-6 py-2 uppercase tracking-wider font-bold text-sm border-2 transition-all ${
                selectedFilter === 'text'
                  ? 'bg-accent text-white border-accent'
                  : 'bg-transparent text-white border-white/30 hover:border-accent hover:text-accent'
              }`}
            >
              {t('stories.filter.text')}
            </button>
            <button
              onClick={() => setSelectedFilter('visual')}
              className={`px-6 py-2 uppercase tracking-wider font-bold text-sm border-2 transition-all ${
                selectedFilter === 'visual'
                  ? 'bg-accent text-white border-accent'
                  : 'bg-transparent text-white border-white/30 hover:border-accent hover:text-accent'
              }`}
            >
              {t('stories.filter.visual')}
            </button>
            <button
              onClick={() => setSelectedFilter('video')}
              className={`px-6 py-2 uppercase tracking-wider font-bold text-sm border-2 transition-all ${
                selectedFilter === 'video'
                  ? 'bg-accent text-white border-accent'
                  : 'bg-transparent text-white border-white/30 hover:border-accent hover:text-accent'
              }`}
            >
              {t('stories.filter.video')}
            </button>
          </div>
        </div>
      </div>

      {/* Stories */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {approvedStories.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl font-bold text-muted-foreground uppercase tracking-wide mb-4">
                {t('stories.empty')}
              </p>
              <p className="text-muted-foreground mb-8">
                {t('stories.empty')}
              </p>
              <button
                onClick={() => onNavigate('dashboard')}
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-300"
              >
                <span className="uppercase tracking-wider font-bold">{t('nav.join')}</span>
                <ArrowRight size={20} />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {approvedStories
                .sort((a, b) => {
                  const dateA = a.approvedAt ? new Date(a.approvedAt).getTime() : 0;
                  const dateB = b.approvedAt ? new Date(b.approvedAt).getTime() : 0;
                  return dateB - dateA;
                })
                .filter((story) => {
                  if (selectedFilter === 'all') return true;
                  if (selectedFilter === 'text') return !story.mediaType || story.mediaType === 'text';
                  if (selectedFilter === 'visual') return story.mediaType === 'image';
                  if (selectedFilter === 'video') return story.mediaType === 'video';
                  return true;
                })
                .map((story, index) => {
                  // Determine media type for display
                  const displayMediaType = story.mediaType || 'text';
                  
                  return (
                  <article
                    key={story.id}
                    className="group cursor-pointer border-2 border-white/20 hover:border-accent transition-all duration-300 bg-white overflow-hidden shadow-lg"
                    onClick={() => onNavigate('story-detail', story.id)}
                  >
                    {/* Visual Representation with Real Images */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <ImageWithFallback
                        src={story.imageUrl || storyImages[index % storyImages.length]}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
                      
                      {/* Author Badge */}
                      <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm px-3 py-1 border-2 border-white/50">
                        <p className="text-white text-xs font-bold uppercase tracking-wider">
                          {story.isAnonymous ? t('stories.anonymous') : story.authorName}
                        </p>
                      </div>

                      {/* Story Type Badge */}
                      <div className="absolute top-4 left-4">
                        {displayMediaType === 'video' ? (
                          <div className="bg-primary/80 backdrop-blur-sm p-3 border-2 border-accent">
                            <Play size={20} className="text-accent" />
                          </div>
                        ) : displayMediaType === 'image' ? (
                          <div className="bg-primary/80 backdrop-blur-sm px-3 py-1 border-2 border-white/50">
                            <span className="text-white text-xs font-bold uppercase">{t('stories.visual.badge')}</span>
                          </div>
                        ) : (
                          <div className="bg-primary/80 backdrop-blur-sm px-3 py-1 border-2 border-white/50">
                            <span className="text-white text-xs font-bold uppercase">{t('stories.text.badge')}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-xl md:text-2xl font-bold mb-2 drop-shadow-lg">
                          {story.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 bg-white">
                      <p className="text-foreground/80 leading-relaxed mb-4 line-clamp-3">
                        {story.content}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t-2 border-muted">
                        <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                          {new Date(story.createdAt).toLocaleDateString('tr-TR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary group-hover:text-accent transition-colors">
                          <span>{t('stories.read')}</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </article>
                );
                })}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#1a1a1a] to-primary border-y-2 border-accent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-accent mb-6 uppercase tracking-tight">
              {t('stories.cta.title')}
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed">
              {t('stories.cta.text')}
            </p>
            <button
              onClick={() => onNavigate('dashboard')}
              className="bg-accent text-white px-10 py-4 border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-300 uppercase tracking-wider font-bold text-lg"
            >
              {t('stories.cta.button')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}