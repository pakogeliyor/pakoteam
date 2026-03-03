import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/button';

export function SupportusPage() {
  const { t } = useTranslation();

  const introList = t('support.intro.list', { returnObjects: true }) as string[];

  return (
    <div className="flex w-full flex-col items-center gap-16 py-10">
      {/* Section 1: Intro */}
      <section className="flex w-full flex-col items-center px-4 md:px-8">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-10 lg:px-16">
          <h1 className="font-['Overpass_Mono',sans-serif] text-[32px] font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[42px]">
            {t('support.title')}
          </h1>
          <div className="flex flex-col gap-6">
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('support.intro.description1')}
            </p>
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('support.intro.description2')}
            </p>
            <ul className="list-inside list-disc flex flex-col gap-2 font-['Overpass',sans-serif] text-base font-light leading-relaxed text-black dark:text-white md:text-lg">
              {Array.isArray(introList) &&
                introList.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Github Contribution */}
      <section className="flex w-full flex-col items-center gap-8 px-4 py-8 text-center md:px-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
            {t('support.github.title')}
          </h2>
          <p className="max-w-2xl font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
            {t('support.github.description')}
          </p>
        </div>
        <Button
          asChild
          variant="primary"
          size="lg"
          className="rounded-lg px-8 py-6 font-['Overpass',sans-serif] text-xl font-bold tracking-tight shadow-md transition-all hover:scale-105 active:scale-[0.98]"
        >
          <a
            href="https://github.com/Yasin4261/i-need-courier"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('support.github.cta')}
          </a>
        </Button>
      </section>

      {/* Section 3: Bank Accounts */}
      <section className="flex w-full flex-col items-center px-4 py-8 md:px-8">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-8 lg:px-16">
          <div className="flex flex-col gap-4">
            <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
              {t('support.bank.title')}
            </h2>
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('support.bank.description')}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <span className="min-w-[120px] font-['Overpass_Mono',sans-serif] text-lg font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                {t('support.bank.bank1')}
              </span>
              <div className="flex-1 rounded-sm border border-gray-400 p-4 transition-colors hover:border-[var(--color-primary)] dark:border-gray-600 dark:hover:border-[var(--color-secondary)]">
                <p className="font-['Overpass',sans-serif] text-sm tracking-widest text-black dark:text-white md:text-base">
                  TR00 0000 0000 0000 0000 0000 00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <span className="min-w-[120px] font-['Overpass_Mono',sans-serif] text-lg font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                {t('support.bank.bank2')}
              </span>
              <div className="flex-1 rounded-sm border border-gray-400 p-4 transition-colors hover:border-[var(--color-primary)] dark:border-gray-600 dark:hover:border-[var(--color-secondary)]">
                <p className="font-['Overpass',sans-serif] text-sm tracking-widest text-black dark:text-white md:text-base">
                  TR00 0000 0000 0000 0000 0000 00
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 font-['Overpass',sans-serif] text-sm font-light leading-relaxed text-black dark:text-white md:text-base">
            {t('support.bank.note')}
          </p>
        </div>
      </section>

      {/* Section 4: Bottom Banner */}
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
