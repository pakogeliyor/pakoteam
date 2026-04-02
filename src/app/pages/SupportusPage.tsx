import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/button';

export function SupportusPage() {
  const { t } = useTranslation();

  const introList = t('support.content.introList', { returnObjects: true }) as string[];

  return (
    <div className="flex w-full flex-col items-center gap-16 py-10">
      {/* Content Section */}
      <section className="flex w-full flex-col items-center px-4 md:px-8">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-10 lg:px-16">
          <h1 className="font-['Overpass_Mono',sans-serif] text-[32px] font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[42px]">
            {t('support.title')}
          </h1>
          <div className="flex flex-col gap-8">
            {/* Intro */}
            <div className="flex flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('support.content.intro1')}
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('support.content.intro2')}
              </p>
              <ul className="list-inside list-disc flex flex-col gap-2 font-['Overpass',sans-serif] text-base font-light leading-relaxed text-black dark:text-white md:text-lg">
                {Array.isArray(introList) &&
                  introList.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>

            {/* Subheadings */}
            <div className="flex flex-col gap-4 mt-4">
              <h3 className="font-['Overpass_Mono',sans-serif] text-xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-2xl">
                {t('support.content.openSourceLogisticsTitle')}
              </h3>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('support.content.openSourceLogisticsText')}
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <h3 className="font-['Overpass_Mono',sans-serif] text-xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-2xl">
                {t('support.content.governanceTitle')}
              </h3>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('support.content.governanceText')}
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <h3 className="font-['Overpass_Mono',sans-serif] text-xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-2xl">
                {t('support.content.budgetTitle')}
              </h3>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('support.content.budgetText')}
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <h3 className="font-['Overpass_Mono',sans-serif] text-xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-2xl">
                {t('support.content.transparencyTitle')}
              </h3>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('support.content.transparencyText')}
              </p>
              {/* Ledger Embed Placeholder */}
              <div className="w-full h-[400px] mt-4 flex items-center justify-center rounded-lg border border-dashed border-gray-400 bg-gray-100 dark:border-gray-600 dark:bg-zinc-800/50">
                <span className="font-['Overpass_Mono',sans-serif] text-sm md:text-base text-gray-500 dark:text-gray-400">
                  [Open Collective Real-time Ledger Embed Placeholder]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Collective */}
      <section className="flex w-full flex-col items-center gap-8 px-4 py-8 text-center md:px-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
            {t('support.openCollective.title')}
          </h2>
        </div>
        <Button
          asChild
          variant="primary"
          size="lg"
          className="rounded-lg px-8 py-6 font-['Overpass',sans-serif] text-xl font-bold tracking-tight shadow-md transition-all hover:scale-105 active:scale-[0.98]"
        >
          <a href={t('support.openCollective.url')} target="_blank" rel="noopener noreferrer">
            {t('support.openCollective.cta')}
          </a>
        </Button>
      </section>

      {/* Bottom Banner */}
      <section className="flex w-full flex-col items-center px-4 py-16 md:px-8">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-4 text-center">
          <h2 className="font-['Overpass',sans-serif] text-2xl font-light leading-tight text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-2xl lg:text-3xl">
            {t('support.banner.text')}
            <br />
            <span className="font-bold">{t('support.banner.highlight')}</span>
          </h2>
        </div>
      </section>
    </div>
  );
}
