import { Instagram, Youtube } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { getSiteContent } from '../config/siteContent';

const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
    focusable="false"
    className="fill-current"
    fill="currentColor"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const content = getSiteContent(language).anaSayfa;

  const rawCopyright = content.footer.copyright;
  const copyright = rawCopyright.replace(/2024/g, String(currentYear));

  return (
    <footer className="bg-primary border-t-2 border-accent mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo / Title from translations */}
          <h3
            className="text-4xl md:text-5xl font-bold text-accent uppercase tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {content.logoText}
          </h3>

          {/* Tagline */}
          <p className="text-white/80 text-center max-w-md text-sm uppercase tracking-wide">
            {content.footer.tagline}
          </p>

          {/* Divider */}
          <div className="w-24 h-1 bg-accent"></div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/justexist2026/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@justexist2026"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-accent transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@justexist2026"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-accent transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/60 text-xs uppercase tracking-wider text-center">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}