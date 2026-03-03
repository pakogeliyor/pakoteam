import { useState } from 'react';
import newsletterBg from '@assets/images/newsletter_bg.jpg';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export function NewsletterSection() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    try {
      setStatus('loading');

      // Submit to Netlify Forms
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'newsletter',
          email,
        }).toString(),
      });

      setStatus('success');
      setEmail('');

      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden px-4 py-10 md:h-[188px] md:px-8">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 size-full object-cover" src={newsletterBg} />
        <div className="absolute inset-0 bg-[rgba(41,0,121,0.5)] dark:bg-[rgba(0,0,0,0.5)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
        {/* Text */}
        <div className="flex flex-col gap-2 text-white">
          <p className="font-['Overpass',sans-serif] text-3xl font-bold leading-tight md:text-5xl lg:text-[64px] lg:leading-[64px]">
            {t('newsletter.title')}
          </p>
          <p className="font-['Overpass',sans-serif] text-lg font-light tracking-tight md:text-2xl lg:text-[32px] lg:leading-[40px]">
            {t('newsletter.subtitle')}
          </p>
        </div>

        {/* Email input */}
        <form onSubmit={handleSubmit} className="flex w-full flex-1 flex-col gap-2 md:max-w-md">
          <div className="flex w-full gap-4">
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
              className="flex-1 rounded-lg border border-[var(--color-gray-300)] bg-white px-4 py-3 font-['Inter',sans-serif] text-base text-[var(--color-gray-500)] outline-none focus:ring-2 focus:ring-[var(--color-primary)] disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <Button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-6 font-['Overpass',sans-serif] text-xl tracking-tight !rounded-lg bg-black text-white hover:bg-gray-800 dark:bg-[#AFE403] dark:text-black dark:hover:bg-[#AFE403]/90 transition-all active:scale-[0.98]"
            >
              {status === 'loading' ? t('newsletter.sending') : t('newsletter.cta')}
            </Button>
          </div>

          {/* Status feedback */}
          {status === 'success' && (
            <p className="text-sm font-medium text-green-200">{t('newsletter.success')}</p>
          )}
          {status === 'error' && (
            <p className="text-sm font-medium text-red-200">{t('newsletter.error')}</p>
          )}
        </form>
      </div>
    </section>
  );
}
