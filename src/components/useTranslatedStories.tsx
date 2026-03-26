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
const storyTranslationKeys: Record<string, { title: string; content: string; author?: string }> = {};

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