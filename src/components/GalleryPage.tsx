import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageContext';
import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
}

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export function GalleryPage({ onNavigate }: GalleryPageProps) {
  const { t } = useLanguage();
  
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1763723510712-1a11fa7589ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZ2J0cSUyMHByaWRlJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY3OTYzMzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: t('gallery.item1.title'),
      category: t('gallery.item1.category'),
      description: t('gallery.item1.description'),
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1710787051760-1bd406b7c535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWVlciUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Nzk2MzM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: t('gallery.item2.title'),
      category: t('gallery.item2.category'),
      description: t('gallery.item2.description'),
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1633641847750-a7f2b17624e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2dlbmRlciUyMHByaWRlfGVufDF8fHx8MTc2Nzk2MzM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: t('gallery.item3.title'),
      category: t('gallery.item3.category'),
      description: t('gallery.item3.description'),
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1516119555254-e3b36f4b6769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWluYm93JTIwZmxhZyUyMGNvbW11bml0eXxlbnwxfHx8fDE3Njc5NjMzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: t('gallery.item4.title'),
      category: t('gallery.item4.category'),
      description: t('gallery.item4.description'),
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1713783313100-d5bb0c90dc4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZ2J0cSUyMGFjdGl2aXNtfGVufDF8fHx8MTc2Nzk2MzM1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: t('gallery.item5.title'),
      category: t('gallery.item5.category'),
      description: t('gallery.item5.description'),
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1633144135945-d20b08db66b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJvbGQlMjBwaW5rfGVufDF8fHx8MTc2Nzk2MDM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: t('gallery.item6.title'),
      category: t('gallery.item6.category'),
      description: t('gallery.item6.description'),
    },
  ];

  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>(t('gallery.filter.all'));

  const filters = [
    t('gallery.filter.all'),
    t('gallery.filter.art'),
    t('gallery.filter.portrait'),
    t('gallery.filter.activism'),
    t('gallery.filter.community'),
  ];

  const filteredItems =
    selectedFilter === t('gallery.filter.all')
      ? galleryImages
      : galleryImages.filter((item) => item.category === selectedFilter);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary border-b-2 border-primary py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-accent text-center mb-6">
            {t('about.title')}
          </h1>
          <p className="text-white/80 text-center max-w-2xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 md:top-20 z-40 bg-background border-b-2 border-primary py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 border-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-accent text-white border-accent'
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-12">
        <div className="container mx-auto px-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden cursor-pointer border border-primary hover:border-accent transition-all duration-300"
                onClick={() => setSelectedItem(item)}
              >
                <ImageWithFallback
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="inline-block bg-accent text-white px-2 py-1 text-xs uppercase tracking-wider font-semibold mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-white text-lg font-bold uppercase">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
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
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-background border-2 border-accent overflow-hidden">
              <div className="aspect-video relative bg-muted">
                <ImageWithFallback
                  src={selectedItem.url}
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