import { useMemo } from 'react';
import { useLanguage } from './LanguageContext';

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

// Story ID to translation key mapping
const storyTranslationKeys: Record<string, { title: string; content: string; author?: string }> = {
  'story-1': { title: 'sample.story1.title', content: 'sample.story1.content', author: 'sample.story1.author' },
  'story-2': { title: 'sample.story2.title', content: 'sample.story2.content', author: 'sample.story2.author' },
  'story-3': { title: 'sample.story3.title', content: 'sample.story3.content' },
  'story-4': { title: 'sample.story4.title', content: 'sample.story4.content', author: 'sample.story4.author' },
  'story-5': { title: 'sample.story5.title', content: 'sample.story5.content' },
  'story-6': { title: 'sample.story6.title', content: 'sample.story6.content', author: 'sample.story6.author' },
  'story-7': { title: 'sample.story7.title', content: 'sample.story7.content' },
  'story-8': { title: 'sample.story8.title', content: 'sample.story8.content', author: 'sample.story8.author' },
};

export function useTranslatedStories(stories: Story[]): Story[] {
  const { t } = useLanguage();

  return useMemo(() => {
    return stories.map((story) => {
      const translationKey = storyTranslationKeys[story.id];
      
      if (translationKey) {
        return {
          ...story,
          title: t(translationKey.title),
          content: t(translationKey.content),
          authorName: translationKey.author ? t(translationKey.author) : story.authorName,
        };
      }
      
      return story;
    });
  }, [stories, t]);
}