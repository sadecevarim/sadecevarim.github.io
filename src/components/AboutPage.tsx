import { useLanguage } from './LanguageContext';
import { useRef, useState } from 'react';
import { getSiteContent } from '../config/siteContent';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

interface CardData {
  title: string;
  content: string;
  hasButton?: boolean;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const { language } = useLanguage();
  const content = getSiteContent(language).hakkimizda;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const isAnimatingRef = useRef<boolean>(false);
  const toUpper = (value: string) =>
    language === 'tr' ? value.toLocaleUpperCase('tr-TR') : value.toUpperCase();
  
  // Kart verileri dizisi - i18n ile dinamik
  const cards: CardData[] = content.cards.map((card) => ({
    title: toUpper(card.title),
    content: card.text,
    hasButton: card.hasButton,
  }));

  const focusCard = (index: number) => {
    if (isAnimatingRef.current) return;
    if (index < 0 || index > cards.length - 1) return;
    
    isAnimatingRef.current = true;
    setCurrentIndex(index);
    
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 500);
  };

  const goToPrev = () => {
    if (currentIndex > 0 && !isAnimatingRef.current) {
      focusCard(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < cards.length - 1 && !isAnimatingRef.current) {
      focusCard(currentIndex + 1);
    }
  };

  return (
    <div
      className="bg-black relative"
      style={{ 
        backgroundColor: '#000000',
        minHeight: '100vh',
        width: '100%',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '20px',
        fontFamily: 'sans-serif',
        zIndex: 1
      }}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          goToNext();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          goToPrev();
        }
      }}
    >
      {/* Main Card Container */}
      <div
        className="rounded-lg w-full mx-auto text-center"
        style={{ 
          backgroundColor: '#111111',
          maxWidth: '800px',
          padding: '40px',
          border: '1px solid #333'
        }}
      >
        {/* Content Area - Dynamic based on currentIndex */}
        <div style={{ minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 
            className="text-3xl md:text-4xl font-bold tracking-wider leading-tight uppercase mb-5"
            style={{ 
              color: '#FF2DAA',
              letterSpacing: '2px'
            }}
          >
            {cards[currentIndex].title}
          </h3>
          <p 
            className="leading-relaxed font-medium mb-0"
            style={{
              color: '#FFFFFF',
              fontSize: '1.125rem',
              lineHeight: '1.6',
              margin: 0,
              whiteSpace: currentIndex === 4 ? 'pre-wrap' : 'normal'
            }}
          >
            {cards[currentIndex].content}
          </p>
          {cards[currentIndex].hasButton && (
            <button
              onClick={() => onNavigate('contact')}
              className="font-bold transition-all duration-300 rounded mt-4"
              style={{
                display: 'inline-block',
                backgroundColor: '#FF2DAA',
                color: '#000000',
                padding: '12px 24px',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                marginTop: '15px'
              }}
            >
              {toUpper(content.cards[content.cards.length - 1].title)}
            </button>
          )}
        </div>

        {/* Navigation - Inside Card */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            borderTop: '1px solid #333',
            paddingTop: '20px',
            marginTop: '20px'
          }}
        >
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className="font-bold transition-all duration-300"
            style={{
              background: 'none',
              border: 'none',
              color: currentIndex === 0 ? '#666' : '#FFFFFF',
              cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              fontSize: '1rem',
              padding: '10px'
            }}
          >
            ← {content.nav.prev}
          </button>
          
          <span 
            style={{
              color: '#888',
              fontFamily: 'monospace',
              letterSpacing: '2px',
              fontSize: '0.9rem'
            }}
          >
            {currentIndex + 1} {content.nav.of} {cards.length}
          </span>
          
          <button
            onClick={goToNext}
            disabled={currentIndex === cards.length - 1}
            className="font-bold transition-all duration-300"
            style={{
              background: 'none',
              border: 'none',
              color: currentIndex === cards.length - 1 ? '#666' : '#FFFFFF',
              cursor: currentIndex === cards.length - 1 ? 'not-allowed' : 'pointer',
              fontSize: '1rem',
              padding: '10px'
            }}
          >
            {content.nav.next} →
          </button>
        </div>
      </div>
    </div>
  );
}
