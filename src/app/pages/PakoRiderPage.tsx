import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import pakoRiderBadge from '@assets/svg/pako_rider_badge.svg';
import { TextHeroSection } from '../components/sections/TextHeroSection';
import { Button } from '../components/ui/button';
import InteractivePakoComponent from '../components/InteractivePakoComponent';
import { SurveyPopup } from '../components/SurveyPopup';

export function PakoRiderPage() {
  const { t } = useTranslation();
  return (
    <div className="flex w-full flex-col items-center gap-8 py-10">
      {/* Page heading */}
      <section className="flex w-full flex-col items-center px-4 md:px-8">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-6">
          <h1 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
            {t('pakoRider.title')}
          </h1>
        </div>
      </section>

      {/* Rider description */}
      <section className="flex w-full flex-col items-center px-4 md:px-8">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-10 lg:flex-row lg:gap-8">
          <div className="flex flex-[1.5] flex-col gap-6">
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('pakoRider.description1')}
            </p>
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('pakoRider.description2')}
            </p>
          </div>

          {/* Rider Badge */}
          <div className="flex flex-1 items-center justify-center lg:justify-end">
            <img
              src={pakoRiderBadge}
              alt="Pako Rider Badge"
              className="h-auto w-full max-w-[240px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Text Hero Section */}
      <TextHeroSection title={<>{t('pakoRider.heroTitle')}</>} />

      {/* Interface Description Section */}
      <section className="flex w-full flex-col items-center px-4 py-12 md:px-8">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-10 lg:flex-row lg:gap-20">
          {/* App screenshot */}
          <div className="flex flex-1 items-center justify-center">
            <InteractivePakoComponent />
          </div>

          {/* Text blocks */}
          <div className="flex flex-1 flex-col gap-6">
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('pakoRider.interfaceDescription1')}
            </p>
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('pakoRider.interfaceDescription2')}
            </p>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="flex w-full flex-col items-center gap-6 px-4 py-8 text-center md:px-8">
        <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
          {t('pakoRider.joinMovement')}
        </h2>
        <p className="max-w-2xl font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
          {t('pakoRider.joinDesc')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button
            asChild
            variant="primary"
            size="lg"
            className="rounded-lg px-6 py-6 font-['Overpass',sans-serif] text-xl font-medium tracking-tight h-auto transition-all active:scale-[0.98]"
          >
            <Link to="/topluluk">{t('pakoRider.joinCommunity')}</Link>
          </Button>
          <Button
            asChild
            variant="primary"
            size="lg"
            className="rounded-lg px-6 py-6 font-['Overpass',sans-serif] text-xl font-medium tracking-tight h-auto transition-all active:scale-[0.98]"
          >
            <a
              href="https://github.com/Yasin4261/i-need-courier"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </section>

      {/* Community Invitation Section */}
      <section className="flex w-full flex-col items-center px-4 pb-16 md:px-8">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-8 lg:px-16">
          <div className="flex flex-col gap-6">
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('pakoRider.communityInvitation1')}
            </p>
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('pakoRider.communityInvitation2')}
            </p>
          </div>
        </div>
      </section>

      <SurveyPopup
        title={t('pakoRider.surveyPopup.title')}
        description={t('pakoRider.surveyPopup.description')}
        buttonLabel={t('pakoRider.surveyPopup.buttonLabel')}
        buttonLink="https://forms.gle/jbMfp9XpPG2k8rtg9"
      />
    </div>
  );
}
