import { useState } from 'react';
import { useAuth } from './AuthContext';
import { Plus, FileText, Clock, CheckCircle, XCircle, Pencil } from 'lucide-react';

interface UserDashboardProps {
  onNavigate: (page: string) => void;
}

export function UserDashboard({ onNavigate }: UserDashboardProps) {
  const { user, getUserStories, submitStory } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    isAnonymous: false,
    authorName: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const myStories = getUserStories();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    try {
      await submitStory({
        title: formData.title,
        content: formData.content,
        isAnonymous: formData.isAnonymous,
        authorName: formData.isAnonymous ? undefined : formData.authorName || user?.username,
      });

      setSuccessMessage('Hikayen başarıyla gönderildi! Onay bekliyor.');
      setFormData({
        title: '',
        content: '',
        isAnonymous: false,
        authorName: '',
      });
      setShowForm(false);

      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Bir hata oluştu');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="text-yellow-600" size={20} />;
      case 'approved':
        return <CheckCircle className="text-green-600" size={20} />;
      case 'rejected':
        return <XCircle className="text-red-600" size={20} />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Onay Bekliyor';
      case 'approved':
        return 'Onaylandı';
      case 'rejected':
        return 'Reddedildi';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Merhaba, {user?.username}
          </h1>
          <p className="text-muted-foreground">
            Senin hikayelerini buradan yönetebilirsin
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-100 border-2 border-green-600">
            <p className="text-green-800 font-semibold">{successMessage}</p>
          </div>
        )}

        {/* New Story Button */}
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="mb-8 inline-flex items-center gap-2 bg-accent text-white px-6 py-3 border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-300"
          >
            <Plus size={20} />
            <span className="uppercase tracking-wider font-bold">Yeni Hikaye Paylaş</span>
          </button>
        )}

        {/* Story Form */}
        {showForm && (
          <div className="mb-8 bg-muted border-2 border-primary p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold uppercase">Hikayeni Paylaş</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                İptal
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold uppercase tracking-wide mb-2">
                  Başlık
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-primary focus:border-accent outline-none transition-colors"
                  placeholder="Hikayenin başlığı"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold uppercase tracking-wide mb-2">
                  Hikaye
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-primary focus:border-accent outline-none transition-colors min-h-[200px] resize-y"
                  placeholder="Hikayeni buraya yaz..."
                  required
                />
                <p className="mt-2 text-xs text-muted-foreground uppercase tracking-wide">
                  Hikayenin {formData.content.length} karakter
                </p>
              </div>

              <div className="mb-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isAnonymous}
                    onChange={(e) =>
                      setFormData({ ...formData, isAnonymous: e.target.checked })
                    }
                    className="w-5 h-5 border-2 border-primary accent-accent"
                  />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    Anonim olarak paylaş
                  </span>
                </label>
                <p className="mt-2 ml-8 text-xs text-muted-foreground">
                  Anonim paylaşımlarda ismin görünmez
                </p>
              </div>

              {!formData.isAnonymous && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold uppercase tracking-wide mb-2">
                    Yazar Adı (Opsiyonel)
                  </label>
                  <input
                    type="text"
                    value={formData.authorName}
                    onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-primary focus:border-accent outline-none transition-colors"
                    placeholder={user?.username || 'İsmini yaz'}
                  />
                  <p className="mt-2 text-xs text-muted-foreground">
                    Boş bırakırsan kullanıcı adın görünür
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-white py-3 border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-300 uppercase tracking-wider font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Hikayeyi Gönder'}
              </button>
            </form>
          </div>
        )}

        {/* My Stories */}
        <div>
          <h2 className="text-2xl font-bold mb-6 uppercase flex items-center gap-3">
            <FileText size={24} />
            Hikayelerim ({myStories.length})
          </h2>

          {myStories.length === 0 ? (
            <div className="text-center py-12 bg-muted border-2 border-primary">
              <Pencil size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-semibold uppercase tracking-wide text-muted-foreground">
                Henüz hikaye paylaşmadın
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                İlk hikayeni paylaş ve sesi duyulsun
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {myStories
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                .map((story) => (
                  <div
                    key={story.id}
                    className="bg-white border-2 border-primary p-6 hover:border-accent transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl font-bold flex-1">{story.title}</h3>
                      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide">
                        {getStatusIcon(story.status)}
                        <span>{getStatusText(story.status)}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {story.content}
                    </p>

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
                        <span>Yazar: {story.authorName || user?.username}</span>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
