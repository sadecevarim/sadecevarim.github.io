export type WorksCategoryId =
  | 'all'
  | 'blog'
  | 'art'
  | 'portrait'
  | 'activism'
  | 'community';

export interface WorksCategoryLabel {
  id: WorksCategoryId;
  label: {
    tr: string;
    en: string;
  };
}

export const WORKS_CATEGORIES: WorksCategoryLabel[] = [
  {
    id: 'all',
    label: {
      tr: 'TÜMÜ',
      en: 'ALL',
    },
  },
  {
    id: 'blog',
    label: {
      tr: 'BLOG YAZISI',
      en: 'BLOG ARTICLE',
    },
  },
  {
    id: 'art',
    label: {
      tr: 'SANAT',
      en: 'ART',
    },
  },
  {
    id: 'portrait',
    label: {
      tr: 'PORTRE',
      en: 'PORTRAIT',
    },
  },
  {
    id: 'activism',
    label: {
      tr: 'AKTIVIZM',
      en: 'ACTIVISM',
    },
  },
  {
    id: 'community',
    label: {
      tr: 'TOPLULUK',
      en: 'COMMUNITY',
    },
  },
];

export const getWorksCategoryLabel = (
  id: WorksCategoryId,
  language: 'tr' | 'en'
): string => {
  const category = WORKS_CATEGORIES.find((item) => item.id === id);
  if (!category) return id;
  return category.label[language];
};
