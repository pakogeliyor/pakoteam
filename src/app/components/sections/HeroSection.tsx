import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

import heroVideo from '../../../assets/03034.webm';
import heroMelih from '@assets/images/hero_melih.JPG';

import { Button } from '../ui/button';

export function HeroSection() {
  const { t } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'video',
      src: heroVideo,
      duration: 15000,
      content: {
        line1: t('home.hero.line1'),
        line2: t('home.hero.line2'),
        description: t('home.hero.description'),
        cta: t('home.hero.cta'),
        link: 'https://topluluk.pako.team/',
        external: true,
      },
    },
    {
      type: 'image',
      src: heroMelih,
      duration: 15000,
      content: {
        line1: t('home.hero2.line1'),
        line2: t('home.hero2.line2'),
        description: t('home.hero2.description'),
        cta: t('home.hero2.cta'),
        link: '/destek-ol',
        external: false,
      },
    },
  ];

  useEffect(() => {
    // Transition to the next slide based on its specific duration
    const currentDuration = slides[currentSlide].duration;

    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, currentDuration);

    return () => clearTimeout(timeout);
  }, [currentSlide, slides]);

  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden py-16 md:py-20 lg:h-[450px]">
      {/* Background Slider */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none bg-black">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          const slideClass = `absolute inset-0 size-full object-cover transition-opacity duration-1000 ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`;

          if (slide.type === 'video') {
            return (
              <video
                key={index}
                className={slideClass}
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
              />
            );
          }
          return <img key={index} className={slideClass} src={slide.src} alt="" />;
        })}

        {/* Dotted overlay */}
        <div
          className="absolute inset-0 z-0 bg-[radial-gradient(rgba(0,0,0,0.3)_1px,transparent_1px)]"
          style={{ backgroundSize: '4px 4px' }}
        />

        {/* Original gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent to-[rgba(41,0,121,0.5)] dark:to-[rgba(0,0,0,0.5)]" />
      </div>

      {/* Content Slider */}
      <div className="relative z-20 grid w-full max-w-[var(--content-max-width)] px-4 md:px-8 lg:px-20">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`[grid-area:1/1] flex flex-col items-center gap-2 text-center transition-opacity duration-1000 ${
                isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="font-['Overpass',sans-serif] text-4xl font-extralight leading-tight text-[var(--color-gray-100)] md:text-5xl lg:text-[80px] lg:leading-[80px]">
                {slide.content.line1}
              </p>
              {slide.content.line2 && (
                <p className="font-['Overpass',sans-serif] text-4xl font-bold leading-tight text-[var(--color-gray-100)] md:text-5xl lg:text-[80px] lg:leading-[80px]">
                  {slide.content.line2}
                </p>
              )}
              <p className="max-w-lg font-['Overpass',sans-serif] text-lg font-light leading-relaxed tracking-tight text-[var(--color-gray-100)] md:text-2xl lg:text-[32px] lg:leading-[40px]">
                {slide.content.description}
              </p>
              <Button
                asChild
                variant="primary"
                size="lg"
                className="mt-2 text-xl font-medium tracking-tight h-auto py-4 px-6"
              >
                {slide.content.external ? (
                  <a href={slide.content.link} target="_blank" rel="noopener noreferrer">
                    {slide.content.cta}
                  </a>
                ) : (
                  <Link to={slide.content.link}>{slide.content.cta}</Link>
                )}
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
