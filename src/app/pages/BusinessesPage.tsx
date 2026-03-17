import { Link } from 'react-router';
import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { PurpleCard } from '../components/sections';
import { Button } from '../components/ui/button';
import { SurveyPopup } from '../components/SurveyPopup';

export function BusinessesPage() {
  const { t, i18n } = useTranslation();
  const [showSlide, setShowSlide] = useState(false);
  return (
    <div className="flex w-full flex-col items-center gap-16 py-10">
      {/* Section 1: Intro */}
      <section className="flex w-full flex-col items-center px-4 md:px-8">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-10 lg:px-16">
          <h1 className="font-['Overpass_Mono',sans-serif] text-[32px] font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[42px]">
            {t('businesses.intro.title')}
          </h1>
          <div className="flex flex-col gap-6">
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('businesses.intro.description1')}
            </p>
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('businesses.intro.description2')}
            </p>
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('businesses.intro.description3')}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Hero Statement */}
      <section className="flex w-full flex-col items-center px-4 py-16 md:px-8">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-6 text-center">
          <h2 className="font-['Overpass',sans-serif] text-2xl font-light leading-tight text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-2xl lg:text-3xl">
            {t('businesses.heroStatement')}
          </h2>
        </div>
      </section>

      {/* Section 3: Yerel ağa katılın */}
      <section className="flex w-full flex-col items-center px-4 py-8 md:px-8">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-10 lg:px-16">
          <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-3xl">
            {t('businesses.localNetwork.title')}
          </h2>
          <div className="flex flex-col gap-6">
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('businesses.localNetwork.description1')}
            </p>
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('businesses.localNetwork.description2')}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Pako ile tanış */}
      <section className="flex w-full flex-col items-center gap-8 px-4 py-12 text-center md:px-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-3xl">
            {t('businesses.meetPako.title')}
          </h2>
          <p className="max-w-xl font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
            {t('businesses.meetPako.description')}
          </p>
        </div>
        {showSlide ? (
          <div className="flex w-full flex-col items-center gap-6">
            <div
              className="relative mt-8 w-full overflow-hidden rounded-xl border border-gray-200 shadow-lg dark:border-gray-800"
              style={{ paddingTop: '56.25%' }}
            >
              <iframe
                src={
                  i18n.language === 'en'
                    ? 'https://docs.google.com/presentation/d/e/2PACX-1vSt4_gaQArOrmtecYzJjmONKGD6GU_-AwiJ0e6kNsfqIUzAyKicPFOMD1UhDUsBOw/pubembed?'
                    : 'https://docs.google.com/presentation/d/e/2PACX-1vTUpvhlAQtnm_SlibIC6s6yyPCctv0PNlVw0tgp_E8Czyquanbvl0Dt8txh8fNTmg/pubembed?'
                }
                frameBorder="0"
                width="100%"
                height="100%"
                allowFullScreen={true}
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <Button
              onClick={() => setShowSlide(false)}
              variant="outline"
              size="lg"
              className="rounded-lg border-gray-300 px-8 py-3 font-['Overpass',sans-serif] text-lg font-medium tracking-tight text-gray-700 shadow-sm transition-all hover:bg-gray-100 hover:scale-105 active:scale-[0.98] dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {t('businesses.meetPako.close')}
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => setShowSlide(true)}
            variant="primary"
            size="lg"
            className="rounded-lg px-8 py-6 font-['Overpass',sans-serif] text-xl font-bold tracking-tight shadow-md transition-all hover:scale-105 active:scale-[0.98]"
          >
            {t('businesses.meetPako.cta')}
          </Button>
        )}
      </section>

      {/* Section 5: Birlikte Büyüyoruz */}
      <section className="flex w-full flex-col items-center px-4 py-8 pb-20 md:px-8">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-10 lg:px-16">
          <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-3xl">
            Birlikte Büyüyoruz
          </h2>
          <div className="flex flex-col gap-6">
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              Pako, hiyerarşiden uzak, emeğe ve dayanışmaya dayalı, çevre dostu bir yeni nesil
              teslimat ağıdır. Türkiye’nin köklü yardımlaşma kültüründen beslenen bu modelde,
              işletmelerden beklenen sadece bir hizmet almaları değil; bisikletli kuryelerin emeğine
              saygı duyan, güvene dayalı ve sabırlı bir iş ortaklığının parçası olmalarıdır. Siz de
              insan odaklı ve sürdürülebilir bu ilkeli hareketin bir parçası olmak isterseniz, Pako
              işletmeleri arasındaki yerinizi alabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Contact Card */}
      <PurpleCard
        description={t('businesses.contactCard.description')}
        ctaLabel={t('businesses.contactCard.cta')}
        ctaLink="/iletisim"
      />

      <SurveyPopup
        title={t('businesses.surveyPopup.title')}
        description={t('businesses.surveyPopup.description')}
        buttonLabel={t('businesses.surveyPopup.buttonLabel')}
        buttonLink="https://forms.gle/mbrH9oZCfQhM3CR59"
      />
    </div>
  );
}
