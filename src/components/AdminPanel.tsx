import { useState } from 'react';
import { useAuth } from './AuthContext';
import { CheckCircle, XCircle, Clock, Eye, User, FileText, Users } from 'lucide-react';

interface AdminPanelProps {
  onNavigate: (page: string) => void;
}

type TabType = 'pending' | 'approved' | 'rejected' | 'users';

export function AdminPanel({ onNavigate }: AdminPanelProps) {
  const { user, getAllStories, updateStoryStatus } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('pending');
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  // Redirect if not admin
  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Erişim Reddedildi</h2>
          <p className="text-muted-foreground mb-6">Bu sayfaya erişim yetkiniz yok.</p>
          <button
            onClick={() => onNavigate('home')}
            className="bg-accent text-white px-8 py-3 border-2 border-accent hover:bg-transparent hover:text-accent transition-all"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    );
  }

  const allStories = getAllStories();
  const pendingStories = allStories.filter((s) => s.status === 'pending');
  const approvedStories = allStories.filter((s) => s.status === 'approved');
  const rejectedStories = allStories.filter((s) => s.status === 'rejected');

  const handleApprove = async (storyId: string) => {
    try {
      await updateStoryStatus(storyId, 'approved');
      alert('Hikaye onaylandı!');
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Bir hata oluştu');
    }
  };

  const handleReject = async (storyId: string) => {
    if (confirm('Bu hikayeyi reddetmek istediğinizden emin misiniz?')) {
      try {
        await updateStoryStatus(storyId, 'rejected');
        alert('Hikaye reddedildi.');
      } catch (err) {
        alert(err instanceof Error ? err.message : 'Bir hata oluştu');
      }
    }
  };

  const renderStoryCard = (story: any) => {
    const isExpanded = selectedStory === story.id;

    return (
      <div key={story.id} className="bg-white border-2 border-primary p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">{story.title}</h3>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground uppercase tracking-wide">
              <span>
                {new Date(story.createdAt).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              {story.isAnonymous ? (
                <span className="text-accent font-semibold">Anonim</span>
              ) : (
                <span>Yazar: {story.authorName}</span>
              )}
            </div>
          </div>
          <button
            onClick={() => setSelectedStory(isExpanded ? null : story.id)}
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary hover:text-accent transition-colors"
          >
            <Eye size={16} />
            {isExpanded ? 'Gizle' : 'Göster'}
          </button>
        </div>

        {isExpanded && (
          <>
            <div className="mb-6 p-4 bg-muted">
              <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                {story.content}
              </p>
            </div>

            {story.status === 'pending' && (
              <div className="flex gap-3">
                <button
                  onClick={() => handleApprove(story.id)}
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-3 border-2 border-green-600 hover:bg-transparent hover:text-green-600 transition-all uppercase tracking-wide font-semibold"
                >
                  <CheckCircle size={18} />
                  Onayla
                </button>
                <button
                  onClick={() => handleReject(story.id)}
                  className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white py-3 border-2 border-red-600 hover:bg-transparent hover:text-red-600 transition-all uppercase tracking-wide font-semibold"
                >
                  <XCircle size={18} />
                  Reddet
                </button>
              </div>
            )}

            {story.status === 'approved' && (
              <div className="flex gap-3">
                <button
                  onClick={() => handleReject(story.id)}
                  className="flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 border-2 border-red-600 hover:bg-transparent hover:text-red-600 transition-all uppercase tracking-wide font-semibold"
                >
                  <XCircle size={18} />
                  Onayı Kaldır
                </button>
              </div>
            )}

            {story.status === 'rejected' && (
              <div className="flex gap-3">
                <button
                  onClick={() => handleApprove(story.id)}
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 border-2 border-green-600 hover:bg-transparent hover:text-green-600 transition-all uppercase tracking-wide font-semibold"
                >
                  <CheckCircle size={18} />
                  Yeniden Onayla
                </button>
              </div>
            )}
          </>
        )}

        {!isExpanded && (
          <p className="text-muted-foreground line-clamp-2">{story.content}</p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Panel</h1>
          <p className="text-muted-foreground">Hikayeleri yönet ve onayla</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-yellow-100 border-2 border-yellow-600 p-6 text-center">
            <Clock size={32} className="mx-auto mb-2 text-yellow-600" />
            <p className="text-3xl font-bold text-yellow-900">{pendingStories.length}</p>
            <p className="text-sm uppercase tracking-wide text-yellow-800 font-semibold">
              Onay Bekliyor
            </p>
          </div>
          <div className="bg-green-100 border-2 border-green-600 p-6 text-center">
            <CheckCircle size={32} className="mx-auto mb-2 text-green-600" />
            <p className="text-3xl font-bold text-green-900">{approvedStories.length}</p>
            <p className="text-sm uppercase tracking-wide text-green-800 font-semibold">
              Onaylandı
            </p>
          </div>
          <div className="bg-red-100 border-2 border-red-600 p-6 text-center">
            <XCircle size={32} className="mx-auto mb-2 text-red-600" />
            <p className="text-3xl font-bold text-red-900">{rejectedStories.length}</p>
            <p className="text-sm uppercase tracking-wide text-red-800 font-semibold">
              Reddedildi
            </p>
          </div>
          <div className="bg-accent/10 border-2 border-accent p-6 text-center">
            <FileText size={32} className="mx-auto mb-2 text-accent" />
            <p className="text-3xl font-bold text-accent">{allStories.length}</p>
            <p className="text-sm uppercase tracking-wide text-accent font-semibold">Toplam</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b-2 border-primary mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-6 py-3 font-semibold uppercase tracking-wide transition-all border-2 border-b-0 ${
                activeTab === 'pending'
                  ? 'bg-background border-primary border-b-background -mb-[2px]'
                  : 'bg-muted border-transparent hover:bg-background'
              }`}
            >
              Onay Bekleyenler ({pendingStories.length})
            </button>
            <button
              onClick={() => setActiveTab('approved')}
              className={`px-6 py-3 font-semibold uppercase tracking-wide transition-all border-2 border-b-0 ${
                activeTab === 'approved'
                  ? 'bg-background border-primary border-b-background -mb-[2px]'
                  : 'bg-muted border-transparent hover:bg-background'
              }`}
            >
              Onaylananlar ({approvedStories.length})
            </button>
            <button
              onClick={() => setActiveTab('rejected')}
              className={`px-6 py-3 font-semibold uppercase tracking-wide transition-all border-2 border-b-0 ${
                activeTab === 'rejected'
                  ? 'bg-background border-primary border-b-background -mb-[2px]'
                  : 'bg-muted border-transparent hover:bg-background'
              }`}
            >
              Reddedilenler ({rejectedStories.length})
            </button>
          </div>
        </div>

        {/* Stories List */}
        <div className="space-y-4">
          {activeTab === 'pending' && (
            <>
              {pendingStories.length === 0 ? (
                <div className="text-center py-12 bg-muted border-2 border-primary">
                  <Clock size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-semibold uppercase tracking-wide text-muted-foreground">
                    Onay bekleyen hikaye yok
                  </p>
                </div>
              ) : (
                pendingStories
                  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                  .map(renderStoryCard)
              )}
            </>
          )}

          {activeTab === 'approved' && (
            <>
              {approvedStories.length === 0 ? (
                <div className="text-center py-12 bg-muted border-2 border-primary">
                  <CheckCircle size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-semibold uppercase tracking-wide text-muted-foreground">
                    Onaylanmış hikaye yok
                  </p>
                </div>
              ) : (
                approvedStories
                  .sort((a, b) => {
                    const dateA = a.approvedAt ? new Date(a.approvedAt).getTime() : 0;
                    const dateB = b.approvedAt ? new Date(b.approvedAt).getTime() : 0;
                    return dateB - dateA;
                  })
                  .map(renderStoryCard)
              )}
            </>
          )}

          {activeTab === 'rejected' && (
            <>
              {rejectedStories.length === 0 ? (
                <div className="text-center py-12 bg-muted border-2 border-primary">
                  <XCircle size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-semibold uppercase tracking-wide text-muted-foreground">
                    Reddedilmiş hikaye yok
                  </p>
                </div>
              ) : (
                rejectedStories
                  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                  .map(renderStoryCard)
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
