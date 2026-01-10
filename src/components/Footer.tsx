import { Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t-2 border-accent mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <h3 
            className="text-4xl md:text-5xl font-bold text-accent uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Sadece Varım
          </h3>
          
          {/* Tagline */}
          <p className="text-white/80 text-center max-w-md text-sm uppercase tracking-wide">
            Görünmezlikten görünürlüğe. Karanlıkta bırakılan queer bedenler.
          </p>

          {/* Divider */}
          <div className="w-24 h-1 bg-accent"></div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-accent transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/60 text-xs uppercase tracking-wider text-center">
            © {currentYear} Sadece Varım. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}