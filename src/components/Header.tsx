import { Menu, User, LogOut, Globe, PenLine } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { getSiteContent } from '../config/siteContent';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenContact: () => void;
}

export function Header({ currentPage, onNavigate, onOpenContact }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const content = getSiteContent(language).anaSayfa;

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  // Logo text based on current language
  const logoText = content.logoText;
  
  // Button shows CURRENT language (not the target)
  const languageButtonText = language === 'tr' ? 'TR' : 'EN';

  const menuItems = [
    { label: content.nav.home, value: 'home' },
    { label: content.nav.stories, value: 'stories' },
    { label: content.nav.works, value: 'works' },
    { label: content.nav.about, value: 'about' },
    { label: content.nav.contact, value: 'contact' },
  ];

  const handleLogout = () => {
    onNavigate('home');
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary border-b-2 border-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button 
            onClick={() => onNavigate('home')}
            className="text-2xl md:text-3xl font-bold text-accent uppercase tracking-tight hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {logoText}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => {
              const labelText = language === 'tr'
                ? (item.label || '').toLocaleUpperCase('tr-TR')
                : item.label;
              return (
                <button
                  key={item.value}
                  onClick={() => onNavigate(item.value)}
                  className="text-sm uppercase tracking-wider text-white hover:text-accent transition-colors font-semibold"
                >
                  {labelText}
                </button>
              );
            })}
            
            {/* Share Your Story CTA */}
            <button
              onClick={() => {
                onNavigate('contact');
                // Scroll to contact form and trigger story mode
                setTimeout(() => {
                  const contactForm = document.querySelector('form');
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
              className="flex items-center gap-2 bg-accent text-white px-4 py-2 border-2 border-accent hover:bg-transparent hover:text-accent transition-all font-bold uppercase tracking-wide text-sm"
            >
              <PenLine size={16} />
              {content.nav.shareStory.toLocaleUpperCase(language === 'tr' ? 'tr-TR' : 'en-US')}
            </button>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l-2 border-white/20 pl-6">
              <Globe size={16} className="text-white/60" />
              <button
                onClick={toggleLanguage}
                className="text-sm uppercase tracking-wider text-white hover:text-accent transition-colors font-semibold"
              >
                {languageButtonText}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-accent transition-colors p-2"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 border-t-2 border-white/20 pt-4 mt-2">
            {menuItems.map((item) => {
              const labelText = language === 'tr'
                ? (item.label || '').toLocaleUpperCase('tr-TR')
                : item.label;
              return (
                <button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left text-sm font-semibold uppercase tracking-wider transition-colors py-2 ${
                    currentPage === item.value
                      ? 'text-accent'
                      : 'text-white hover:text-accent'
                  }`}
                >
                  {labelText}
                </button>
              );
            })}
            
            {/* Mobile Share Your Story CTA */}
            <button
              onClick={() => {
                onNavigate('contact');
                setIsMenuOpen(false);
                setTimeout(() => {
                  const contactForm = document.querySelector('form');
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
              className="flex items-center gap-2 bg-accent text-white px-4 py-3 border-2 border-accent hover:bg-transparent hover:text-accent transition-all justify-center mt-2"
            >
              <PenLine size={18} />
              <span className="text-sm uppercase tracking-wider font-semibold">{content.nav.shareStory.toLocaleUpperCase(language === 'tr' ? 'tr-TR' : 'en-US')}</span>
            </button>
            
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-white/10 text-white px-4 py-3 border-2 border-white/20 hover:bg-accent hover:border-accent transition-all justify-center"
            >
              <Globe size={16} />
              <span className="text-sm uppercase tracking-wider font-semibold">
                {language === 'tr' ? content.nav.switchToEnglish : content.nav.switchToTurkish}
              </span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}