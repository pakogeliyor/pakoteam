import { useState } from 'react';
import { Link, useLocation } from 'react-router';
const moonIconPath =
  'M9.37 5.51C9.19 6.15798 9.09916 6.82748 9.1 7.5C9.1 11.58 12.42 14.9 16.5 14.9C17.18 14.9 17.85 14.81 18.49 14.63C17.9652 15.921 17.0674 17.0263 15.9114 17.8047C14.7554 18.5831 13.3936 18.9992 12 19C8.14 19 5 15.86 5 12C5 9.07 6.81 6.55 9.37 5.51ZM12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C21 11.54 20.96 11.08 20.9 10.64C20.4003 11.3406 19.7401 11.9114 18.9746 12.3045C18.2091 12.6977 17.3606 12.9019 16.5 12.9C15.3552 12.9 14.24 12.5364 13.3152 11.8617C12.3904 11.1869 11.7038 10.2358 11.3545 9.14561C11.0052 8.05541 11.0112 6.88243 11.3717 5.79586C11.7321 4.70928 12.4284 3.76528 13.36 3.1C12.92 3.04 12.46 3 12 3Z';
import { CircularLogo } from '../CircularLogo';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

export function Header({ onThemeToggle }: HeaderProps) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('tr') ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  const menuItems = [
    { key: 'about', path: '/hikayemiz', label: t('header.about') },
    { key: 'pakoRider', path: '/pako-rider', label: t('header.pakoRider') },
    { key: 'businesses', path: '/isletmeler', label: t('header.businesses') },
    {
      key: 'community',
      path: 'https://topluluk.pako.team/',
      label: t('header.community'),
      isExternal: true,
    },
    { key: 'contact', path: '/iletisim', label: t('header.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto flex h-20 max-w-[var(--container-max-width)] items-center justify-between px-4 md:px-8 lg:px-[var(--spacing-6xl)]">
        {/* Logo */}
        <Link to="/" className="shrink-0" aria-label={t('header.about')}>
          <CircularLogo size={72} className="transition-transform hover:scale-105" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {menuItems.map((item) =>
            item.isExternal ? (
              <a
                key={item.key}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 px-4 py-2 transition-colors"
              >
                <span className="font-['Overpass_Mono',sans-serif] text-[var(--text-xl)] text-[var(--color-primary)] dark:text-[var(--color-secondary)] transition-colors group-hover:opacity-70">
                  {item.label}
                </span>
                <div className="h-1 w-full bg-[var(--color-secondary)] dark:bg-[var(--color-secondary)] opacity-0 transition-opacity group-hover:opacity-50" />
              </a>
            ) : (
              <Link
                key={item.key}
                to={item.path}
                className="group flex flex-col items-center gap-2 px-4 py-2 transition-colors"
              >
                <span className="font-['Overpass_Mono',sans-serif] text-[var(--text-xl)] text-[var(--color-primary)] dark:text-[var(--color-secondary)] transition-colors group-hover:opacity-70">
                  {item.label}
                </span>
                <div
                  className={`h-1 w-full bg-[var(--color-secondary)] dark:bg-[var(--color-secondary)] transition-opacity ${
                    isActive(item.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}
                />
              </Link>
            )
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={onThemeToggle}
            className="flex h-6 w-6 items-center justify-center transition-transform hover:scale-110 active:scale-95"
            aria-label="Toggle dark mode"
          >
            <svg className="size-full" fill="none" viewBox="0 0 24 24">
              <path
                d={moonIconPath}
                fill="var(--color-primary)"
                className="dark:fill-[var(--color-secondary)]"
              />
            </svg>
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 font-['Overpass_Mono',sans-serif] text-[var(--text-sm)] font-bold transition-opacity hover:opacity-70 px-2"
            aria-label="Change language"
          >
            <span
              className={
                i18n.language.startsWith('tr')
                  ? 'text-[var(--color-primary)] dark:text-[var(--color-secondary)]'
                  : 'text-gray-400'
              }
            >
              TR
            </span>
            <span className="text-gray-400">|</span>
            <span
              className={
                i18n.language.startsWith('en')
                  ? 'text-[var(--color-primary)] dark:text-[var(--color-secondary)]'
                  : 'text-gray-400'
              }
            >
              EN
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-[var(--color-primary)] dark:bg-[var(--color-secondary)] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-[var(--color-primary)] dark:bg-[var(--color-secondary)] transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-[var(--color-primary)] dark:bg-[var(--color-secondary)] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white dark:bg-gray-900 lg:hidden">
          <div className="flex flex-col gap-2 p-4">
            {menuItems.map((item) =>
              item.isExternal ? (
                <a
                  key={item.key}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 font-['Overpass_Mono',sans-serif] text-[var(--color-primary)] dark:text-[var(--color-secondary)] transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 font-['Overpass_Mono',sans-serif] text-[var(--color-primary)] dark:text-[var(--color-secondary)] transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActive(item.path) ? 'bg-gray-100 dark:bg-gray-800' : ''
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="mt-4 flex items-center justify-center gap-4 border-t border-gray-200 pt-4">
              <button
                onClick={onThemeToggle}
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle dark mode"
              >
                <svg className="size-6" fill="none" viewBox="0 0 24 24">
                  <path
                    d={moonIconPath}
                    fill="var(--color-primary)"
                    className="dark:fill-[var(--color-secondary)]"
                  />
                </svg>
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 font-['Overpass_Mono',sans-serif] text-[var(--text-lg)] font-bold transition-opacity hover:opacity-70 px-4 py-2"
                aria-label="Change language"
              >
                <span
                  className={
                    i18n.language.startsWith('tr')
                      ? 'text-[var(--color-primary)] dark:text-[var(--color-secondary)]'
                      : 'text-gray-400'
                  }
                >
                  TR
                </span>
                <span className="text-gray-400">|</span>
                <span
                  className={
                    i18n.language.startsWith('en')
                      ? 'text-[var(--color-primary)] dark:text-[var(--color-secondary)]'
                      : 'text-gray-400'
                  }
                >
                  EN
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
