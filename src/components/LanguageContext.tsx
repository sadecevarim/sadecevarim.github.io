import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { tr } from '../locales/tr';
import { en } from '../locales/en';
import { storyTr, storyEn } from '../content/story1-blog';
import { sampleStoriesTr, sampleStoriesEn } from '../content/makale-yazi-edit';

export type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    ...tr,
    'sample.story1.title': storyTr.title,
    'sample.story1.content': storyTr.content,
    'sample.story1.author': storyTr.author,
    'sample.story2.title': sampleStoriesTr.story2?.title || '',
    'sample.story2.content': sampleStoriesTr.story2?.content || '',
    'sample.story2.author': sampleStoriesTr.story2?.author || '',
    'sample.story3.title': sampleStoriesTr.story3?.title || '',
    'sample.story3.content': sampleStoriesTr.story3?.content || '',
    'sample.story4.title': sampleStoriesTr.story4?.title || '',
    'sample.story4.content': sampleStoriesTr.story4?.content || '',
    'sample.story4.author': sampleStoriesTr.story4?.author || '',
    'sample.story5.title': sampleStoriesTr.story5?.title || '',
    'sample.story5.content': sampleStoriesTr.story5?.content || '',
    'sample.story6.title': sampleStoriesTr.story6?.title || '',
    'sample.story6.content': sampleStoriesTr.story6?.content || '',
    'sample.story6.author': sampleStoriesTr.story6?.author || '',
    'sample.story7.title': sampleStoriesTr.story7?.title || '',
    'sample.story7.content': sampleStoriesTr.story7?.content || '',
    'sample.story8.title': sampleStoriesTr.story8?.title || '',
    'sample.story8.content': sampleStoriesTr.story8?.content || '',
    'sample.story8.author': sampleStoriesTr.story8?.author || '',
  },
  en: {
    ...en,
    'sample.story1.title': storyEn.title,
    'sample.story1.content': storyEn.content,
    'sample.story1.author': storyEn.author,
    'sample.story2.title': sampleStoriesEn.story2?.title || '',
    'sample.story2.content': sampleStoriesEn.story2?.content || '',
    'sample.story2.author': sampleStoriesEn.story2?.author || '',
    'sample.story3.title': sampleStoriesEn.story3?.title || '',
    'sample.story3.content': sampleStoriesEn.story3?.content || '',
    'sample.story4.title': sampleStoriesEn.story4?.title || '',
    'sample.story4.content': sampleStoriesEn.story4?.content || '',
    'sample.story4.author': sampleStoriesEn.story4?.author || '',
    'sample.story5.title': sampleStoriesEn.story5?.title || '',
    'sample.story5.content': sampleStoriesEn.story5?.content || '',
    'sample.story6.title': sampleStoriesEn.story6?.title || '',
    'sample.story6.content': sampleStoriesEn.story6?.content || '',
    'sample.story6.author': sampleStoriesEn.story6?.author || '',
    'sample.story7.title': sampleStoriesEn.story7?.title || '',
    'sample.story7.content': sampleStoriesEn.story7?.content || '',
    'sample.story8.title': sampleStoriesEn.story8?.title || '',
    'sample.story8.content': sampleStoriesEn.story8?.content || '',
    'sample.story8.author': sampleStoriesEn.story8?.author || '',
  },
} as const;

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const value = translations[language][key as any] || key;
    if (language === 'tr') {
      const enVal = translations['en'] && (translations['en'] as any)[key];
      try {
        if (typeof enVal === 'string' && enVal === enVal.toUpperCase()) {
          return (value as string).toLocaleUpperCase('tr-TR');
        }
      } catch (e) {
        return value as string;
      }
    }
    return value as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
