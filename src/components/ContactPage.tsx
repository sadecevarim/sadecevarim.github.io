import { useState } from 'react';
import { Send, Mail, User, MessageSquare, BookOpen, HelpCircle, Lightbulb, MessageCircle, FileText, Image as ImageIcon, Video } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

type ContactType = 'story' | 'question' | 'suggestion' | 'feedback';
type MediaType = 'text' | 'image' | 'video';

export function ContactPage({ onNavigate }: ContactPageProps) {
  const { t } = useLanguage();
  const [contactType, setContactType] = useState<ContactType>('story'); // Default to story
  const [mediaType, setMediaType] = useState<MediaType>('text'); // Default to text
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    mediaUrl: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    // Simulate API call
    setTimeout(() => {
      // In real app, this would send to backend
      const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      messages.push({
        id: `msg-${Date.now()}`,
        type: contactType,
        ...formData,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem('contactMessages', JSON.stringify(messages));

      // Set appropriate success message based on contact type
      const message = contactType === 'story' 
        ? t('contact.success.story')
        : t('contact.success');
      setSuccessMessage(message);
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        mediaUrl: '',
      });
      setIsSubmitting(false);

      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(''), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary border-b-2 border-primary py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-accent text-center mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-white/80 text-center max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Success Message */}
            {successMessage && (
              <div className="mb-8 p-6 bg-green-100 border-2 border-green-600">
                <p className="text-green-800 font-semibold text-center">{successMessage}</p>
              </div>
            )}

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-muted border-2 border-primary p-6 text-center">
                <Mail size={32} className="mx-auto mb-3 text-accent" />
                <h3 className="font-bold uppercase tracking-wide mb-2">{t('contact.email')}</h3>
                <p className="text-sm text-muted-foreground">info@sadecevarim.com</p>
              </div>
              <div className="bg-muted border-2 border-primary p-6 text-center">
                <MessageSquare size={32} className="mx-auto mb-3 text-accent" />
                <h3 className="font-bold uppercase tracking-wide mb-2">{t('contact.support')}</h3>
                <p className="text-sm text-muted-foreground">{t('contact.support.desc')}</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white border-2 border-primary p-8">
              <h2 className="text-2xl font-bold mb-6 uppercase">{t('contact.form.title')}</h2>

              {/* Contact Type Selector */}
              <div className="mb-8">
                <label className="block text-sm font-semibold uppercase tracking-wide mb-4">
                  {t('contact.form.type')}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button
                    type="button"
                    onClick={() => setContactType('story')}
                    className={`p-4 border-2 transition-all duration-200 text-center ${
                      contactType === 'story'
                        ? 'bg-accent border-accent text-white'
                        : 'bg-white border-primary hover:border-accent'
                    }`}
                  >
                    <BookOpen size={24} className={`mx-auto mb-2 ${contactType === 'story' ? 'text-white' : 'text-accent'}`} />
                    <span className="text-xs font-bold uppercase tracking-wide block">
                      {t('contact.form.type.story').replace('📖 ', '')}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactType('question')}
                    className={`p-4 border-2 transition-all duration-200 text-center ${
                      contactType === 'question'
                        ? 'bg-accent border-accent text-white'
                        : 'bg-white border-primary hover:border-accent'
                    }`}
                  >
                    <HelpCircle size={24} className={`mx-auto mb-2 ${contactType === 'question' ? 'text-white' : 'text-accent'}`} />
                    <span className="text-xs font-bold uppercase tracking-wide block">
                      {t('contact.form.type.question').replace('❓ ', '')}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactType('suggestion')}
                    className={`p-4 border-2 transition-all duration-200 text-center ${
                      contactType === 'suggestion'
                        ? 'bg-accent border-accent text-white'
                        : 'bg-white border-primary hover:border-accent'
                    }`}
                  >
                    <Lightbulb size={24} className={`mx-auto mb-2 ${contactType === 'suggestion' ? 'text-white' : 'text-accent'}`} />
                    <span className="text-xs font-bold uppercase tracking-wide block">
                      {t('contact.form.type.suggestion').replace('💡 ', '')}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactType('feedback')}
                    className={`p-4 border-2 transition-all duration-200 text-center ${
                      contactType === 'feedback'
                        ? 'bg-accent border-accent text-white'
                        : 'bg-white border-primary hover:border-accent'
                    }`}
                  >
                    <MessageCircle size={24} className={`mx-auto mb-2 ${contactType === 'feedback' ? 'text-white' : 'text-accent'}`} />
                    <span className="text-xs font-bold uppercase tracking-wide block">
                      {t('contact.form.type.feedback').replace('💬 ', '')}
                    </span>
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold uppercase tracking-wide mb-2">
                  {t('contact.form.name')}
                  {contactType === 'story' && <span className="text-muted-foreground text-xs ml-2 normal-case">(opsiyonel)</span>}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-primary focus:border-accent outline-none transition-colors"
                    placeholder={contactType === 'story' ? t('contact.form.name.placeholder.story') : t('contact.form.name.placeholder')}
                    required={contactType !== 'story'}
                  />
                  <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold uppercase tracking-wide mb-2">
                  {t('contact.form.email')}
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-primary focus:border-accent outline-none transition-colors"
                    placeholder={t('contact.form.email.placeholder')}
                    required
                  />
                  <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold uppercase tracking-wide mb-2">
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-primary focus:border-accent outline-none transition-colors"
                  placeholder={contactType === 'story' ? t('contact.form.subject.placeholder.story') : t('contact.form.subject.placeholder')}
                  required
                />
              </div>

              {/* Media Type Selector - Only for Story */}
              {contactType === 'story' && (
                <div className="mb-8">
                  <label className="block text-sm font-semibold uppercase tracking-wide mb-4">
                    {t('contact.form.mediaType')}
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setMediaType('text')}
                      className={`p-4 border-2 transition-all duration-200 text-center ${
                        mediaType === 'text'
                          ? 'bg-accent border-accent text-white'
                          : 'bg-white border-primary hover:border-accent'
                      }`}
                    >
                      <FileText size={24} className={`mx-auto mb-2 ${mediaType === 'text' ? 'text-white' : 'text-accent'}`} />
                      <span className="text-xs font-bold uppercase tracking-wide block">
                        {t('contact.form.mediaType.text').replace('📝 ', '')}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMediaType('image')}
                      className={`p-4 border-2 transition-all duration-200 text-center ${
                        mediaType === 'image'
                          ? 'bg-accent border-accent text-white'
                          : 'bg-white border-primary hover:border-accent'
                      }`}
                    >
                      <ImageIcon size={24} className={`mx-auto mb-2 ${mediaType === 'image' ? 'text-white' : 'text-accent'}`} />
                      <span className="text-xs font-bold uppercase tracking-wide block">
                        {t('contact.form.mediaType.image').replace('🖼️ ', '')}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMediaType('video')}
                      className={`p-4 border-2 transition-all duration-200 text-center ${
                        mediaType === 'video'
                          ? 'bg-accent border-accent text-white'
                          : 'bg-white border-primary hover:border-accent'
                      }`}
                    >
                      <Video size={24} className={`mx-auto mb-2 ${mediaType === 'video' ? 'text-white' : 'text-accent'}`} />
                      <span className="text-xs font-bold uppercase tracking-wide block">
                        {t('contact.form.mediaType.video').replace('🎥 ', '')}
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* Media URL field - Only shown when image or video is selected */}
              {contactType === 'story' && (mediaType === 'image' || mediaType === 'video') && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold uppercase tracking-wide mb-2">
                    {t('contact.form.mediaUrl')}
                  </label>
                  <input
                    type="url"
                    value={formData.mediaUrl}
                    onChange={(e) => setFormData({ ...formData, mediaUrl: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-primary focus:border-accent outline-none transition-colors"
                    placeholder={t('contact.form.mediaUrl.placeholder')}
                  />
                  <p className="text-xs text-muted-foreground mt-2 italic">
                    {mediaType === 'video' 
                      ? 'YouTube, Vimeo gibi platformlardan video linkini paylaşabilirsin.' 
                      : 'İmgur, Dropbox gibi platformlardan görsel linkini paylaşabilirsin.'}
                  </p>
                </div>
              )}

              <div className="mb-6">
                <label className="block text-sm font-semibold uppercase tracking-wide mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 border-2 border-primary focus:border-accent outline-none transition-colors resize-y ${
                    contactType === 'story' ? 'min-h-[300px]' : 'min-h-[200px]'
                  }`}
                  placeholder={contactType === 'story' ? t('contact.form.message.placeholder.story') : t('contact.form.message.placeholder')}
                  required
                />
                {contactType === 'story' && (
                  <p className="text-xs text-muted-foreground mt-2 italic">
                    {t('contact.form.message.story.help')}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-accent text-white py-4 border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-300 uppercase tracking-wider font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  t('contact.form.submitting')
                ) : (
                  <>
                    <Send size={20} />
                    {contactType === 'story' ? t('contact.form.submit.story') : t('contact.form.submit')}
                  </>
                )}
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-12 p-8 bg-secondary border-2 border-primary text-center">
              <h3 className="text-2xl font-bold text-white mb-4 uppercase">
                {t('contact.footer.title')}
              </h3>
              <p className="text-white/80 mb-6">
                {t('contact.footer.desc')}
              </p>
              <p className="text-accent font-semibold uppercase tracking-wide">
                {t('contact.footer.tagline')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}