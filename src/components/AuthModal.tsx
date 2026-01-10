import { useState } from 'react';
import { useAuth } from './AuthContext';
import { X, Eye, EyeOff } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

export function AuthModal({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, register } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        await login(email, password);
        onClose();
      } else {
        if (!username.trim()) {
          setError('Kullanıcı adı gereklidir');
          setLoading(false);
          return;
        }
        await register(email, password, username);
        onClose();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setUsername('');
    setError('');
    setShowPassword(false);
  };

  const switchMode = () => {
    resetForm();
    setMode(mode === 'login' ? 'register' : 'login');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/95">
      <div className="relative w-full max-w-md bg-background border-2 border-primary">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:text-accent transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="bg-secondary border-b-2 border-primary p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center uppercase">
            {mode === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          {/* Demo Info */}
          <div className="mb-6 p-4 bg-muted border-2 border-primary">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              <strong>Demo Bilgileri:</strong>
              <br />
              Admin: admin@sadecevarim.com
              <br />
              Tüm şifreler: password123
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-accent/10 border-2 border-accent">
              <p className="text-sm text-accent font-semibold">{error}</p>
            </div>
          )}

          {mode === 'register' && (
            <div className="mb-4">
              <label className="block text-sm font-semibold uppercase tracking-wide mb-2">
                Kullanıcı Adı
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border-2 border-primary focus:border-accent outline-none transition-colors"
                placeholder="Kullanıcı adınız"
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-semibold uppercase tracking-wide mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-primary focus:border-accent outline-none transition-colors"
              placeholder="email@ornek.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold uppercase tracking-wide mb-2">
              Şifre
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-primary focus:border-accent outline-none transition-colors pr-12"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-white py-3 border-2 border-accent hover:bg-transparent hover:text-accent transition-all duration-300 uppercase tracking-wider font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'İşleniyor...' : mode === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}
          </button>

          {/* Switch Mode */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {mode === 'login' ? 'Hesabın yok mu?' : 'Zaten hesabın var mı?'}
            </p>
            <button
              type="button"
              onClick={switchMode}
              className="mt-2 text-accent font-semibold uppercase tracking-wide text-sm hover:underline"
            >
              {mode === 'login' ? 'Kayıt Ol' : 'Giriş Yap'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
