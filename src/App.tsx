import { useState } from 'react';
import { AuthProvider } from './components/AuthContext';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ArticlePage } from './components/ArticlePage';
import { CategoryPage } from './components/CategoryPage';
import { GalleryPage } from './components/GalleryPage';
import { StoriesPage } from './components/StoriesPage';
import { StoryDetailPage } from './components/StoryDetailPage';
import { UserDashboard } from './components/UserDashboard';
import { AdminPanel } from './components/AdminPanel';
import { ContactPage } from './components/ContactPage';
import { AuthModal } from './components/AuthModal';

type PageType = 'home' | 'article' | 'categories' | 'gallery' | 'stories' | 'story-detail' | 'dashboard' | 'admin' | 'contact';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<number>(1);
  const [selectedStoryId, setSelectedStoryId] = useState<string>('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { language } = useLanguage();

  const handleNavigate = (page: string, id?: number | string) => {
    setCurrentPage(page as PageType);
    if (typeof id === 'number') {
      setSelectedArticleId(id);
    } else if (typeof id === 'string') {
      setSelectedStoryId(id);
    }
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = () => {
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen flex flex-col" lang={language}>
      <Header 
        onNavigate={handleNavigate} 
        currentPage={currentPage}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />
      
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenContact={handleOpenContact}
          />
        )}
        {currentPage === 'article' && (
          <ArticlePage articleId={selectedArticleId} onNavigate={handleNavigate} />
        )}
        {currentPage === 'categories' && (
          <CategoryPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'stories' && (
          <StoriesPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'story-detail' && (
          <StoryDetailPage storyId={selectedStoryId} onNavigate={handleNavigate} />
        )}
        {currentPage === 'dashboard' && (
          <UserDashboard onNavigate={handleNavigate} />
        )}
        {currentPage === 'admin' && (
          <AdminPanel onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      <Footer />

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </AuthProvider>
  );
}