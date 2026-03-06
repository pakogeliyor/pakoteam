import { useState, useEffect } from 'react';
import { Button } from './ui/button';

interface SurveyPopupProps {
  title?: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
}

export function SurveyPopup({
  title = 'Ankete katıl',
  description,
  buttonLabel,
  buttonLink,
}: SurveyPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isClosed) setIsVisible(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [isClosed]);

  if (isClosed) return null; // Unmount completely if closed

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 w-80 rounded-3xl border-[3px] border-[var(--color-primary)] bg-white p-6 shadow-xl dark:border-[var(--color-secondary)] dark:bg-gray-900 sm:bottom-8 sm:right-8 transform transition-all duration-500 ease-out ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95 pointer-events-none'}`}
    >
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(() => setIsClosed(true), 500); // Wait for exit animation
        }}
        className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] hover:scale-110 transition-transform"
        aria-label="Close survey popup"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div className="flex flex-col gap-3">
        <h3 className="text-center font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] tracking-wide">
          {title}
        </h3>
        <p className="text-center font-['Overpass',sans-serif] text-sm leading-snug text-gray-800 dark:text-gray-200">
          {description}
        </p>
        <div className="mt-2 flex justify-end">
          <Button
            asChild
            className="rounded-xl px-8 py-2 font-['Overpass',sans-serif] text-lg font-bold transition-transform hover:scale-105 active:scale-95"
            variant="primary"
          >
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              {buttonLabel}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
