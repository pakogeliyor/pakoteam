import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/button';

// SVG path data from real assets (assets/icons/)
const mailIconPath =
  'M36 0H4C1.8 0 0.02 1.8 0.02 4L0 28C0 30.2 1.8 32 4 32H36C38.2 32 40 30.2 40 28V4C40 1.8 38.2 0 36 0ZM36 28H4V8L20 18L36 8V28ZM20 14L4 4H36L20 14Z';
const phoneIconPath =
  'M20.4286 0H5.57143C2.48857 0 0 2.43636 0 5.45455V34.5455C0 37.5636 2.48857 40 5.57143 40H20.4286C23.5114 40 26 37.5636 26 34.5455V5.45455C26 2.43636 23.5114 0 20.4286 0ZM22.2857 30.9091H3.71429V5.45455H22.2857V30.9091ZM16.7143 36.3636H9.28571V34.5455H16.7143V36.3636Z';

export function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to Netlify Forms
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      });

      setIsSubmitting(false);
      setSubmitStatus('success');

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          subject: '',
          email: '',
          phone: '',
          message: '',
        });
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex w-full flex-col items-start gap-8 bg-white dark:bg-gray-900 py-10">
      {/* Heading */}
      <section className="flex w-full flex-col items-center justify-center px-4">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-6">
          <h1 className="font-['Overpass_Mono',sans-serif] text-[var(--text-3xl)] font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
            {t('contact.title')}
          </h1>
          <p className="font-['Overpass',sans-serif] font-light text-black dark:text-white">
            {t('contact.description')}
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="flex w-full flex-col items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[860px] flex-col gap-2 rounded-2xl border-2 border-[var(--color-border)] dark:border-gray-700 bg-white dark:bg-gray-800 p-6"
        >
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="font-['Overpass',sans-serif] font-bold text-2xl text-black dark:text-white"
            >
              {t('contact.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-[45px] rounded-lg border border-[var(--color-border)] dark:border-gray-700 bg-[var(--color-gray-100)] dark:bg-gray-700 px-3 text-black dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-secondary)]"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="subject"
              className="font-['Overpass',sans-serif] font-bold text-2xl text-black dark:text-white"
            >
              {t('contact.subject')}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="h-[45px] rounded-lg border border-[var(--color-border)] dark:border-gray-700 bg-[var(--color-gray-100)] dark:bg-gray-700 px-3 text-black dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-secondary)]"
            />
          </div>

          {/* Email and Phone */}
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="flex flex-1 flex-col gap-1">
              <label
                htmlFor="email"
                className="font-['Overpass',sans-serif] font-bold text-2xl text-black dark:text-white"
              >
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-[45px] rounded-lg border border-[var(--color-border)] dark:border-gray-700 bg-[var(--color-gray-100)] dark:bg-gray-700 px-3 text-black dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-secondary)]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                htmlFor="phone"
                className="font-['Overpass',sans-serif] font-bold text-2xl text-black dark:text-white"
              >
                {t('contact.phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="h-[45px] rounded-lg border border-[var(--color-border)] dark:border-gray-700 bg-[var(--color-gray-100)] dark:bg-gray-700 px-3 text-black dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-secondary)]"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="message"
              className="font-['Overpass',sans-serif] font-bold text-2xl text-black dark:text-white"
            >
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={10}
              className="rounded-lg border border-[var(--color-border)] dark:border-gray-700 bg-[var(--color-gray-100)] dark:bg-gray-700 p-3 text-black dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-secondary)] resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="mt-2 w-full font-['Overpass',sans-serif] font-medium"
          >
            {isSubmitting ? t('contact.sending') : t('contact.send')}
          </Button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-3">
              <p className="text-center font-['Overpass',sans-serif] text-green-700 dark:text-green-400">
                {t('contact.success')}
              </p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mt-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3">
              <p className="text-center font-['Overpass',sans-serif] text-red-700 dark:text-red-400">
                {t('contact.error')}
              </p>
            </div>
          )}
        </form>
      </section>

      {/* Contact Info */}
      <section className="flex w-full flex-col items-center justify-center px-4">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-6">
          {/* Email */}
          <div className="flex items-end gap-4">
            <svg className="size-10 shrink-0" fill="none" viewBox="0 0 40 32">
              <path
                d={mailIconPath}
                fill="var(--color-primary)"
                className="dark:fill-[var(--color-secondary)]"
              />
            </svg>
            <a
              href="mailto:pakogeliyor@gmail.com"
              className="font-['Overpass',sans-serif] font-light text-[var(--text-3xl)] text-[var(--color-primary)] dark:text-[var(--color-secondary)] hover:underline"
            >
              pakogeliyor@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <svg className="size-10 shrink-0" fill="none" viewBox="0 0 26 40">
              <path
                d={phoneIconPath}
                fill="var(--color-primary)"
                className="dark:fill-[var(--color-secondary)]"
              />
            </svg>
            <a
              href="tel:+905424089034"
              className="font-['Overpass',sans-serif] font-light text-[var(--text-3xl)] text-[var(--color-primary)] dark:text-[var(--color-secondary)] hover:underline"
            >
              +905424089034
            </a>
          </div>

          {/* Note */}
          <p className="text-center font-['Overpass',sans-serif] font-semibold text-black dark:text-white">
            {t('contact.note')}
          </p>
        </div>
      </section>
    </div>
  );
}
