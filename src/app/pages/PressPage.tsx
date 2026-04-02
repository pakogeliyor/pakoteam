import { useTranslation } from 'react-i18next';

import { Container } from '../components/ui/Container';
import { motion } from 'motion/react';
import { LucideFileDown, LucideExternalLink, LucidePlayCircle } from 'lucide-react';
import pakoSticker from '@assets/svg/pako_sticker.svg';
import { usePressItems, type PressItem } from '../lib/usePressItems';
import { Button } from '../components/ui/button';

const fallbackCoverage: PressItem[] = [
  {
    id: '1',
    source: 'NTV',
    title: 'Motosiklet yerine bisikletleriyle yollardalar',
    date: '2021-04-10',
    url: 'https://www.ntv.com.tr/video/turkiye/motosiklet-yerine-bisikletleriyle-yollardalar,X5d2n3OeDkemtMOiUS34Ew',
    type: 'video',
  },
  {
    id: '2',
    source: 'TRT Haber',
    title: 'Patronsuz Kurye işbaşında',
    date: '2021-09-25',
    url: 'https://www.trthaber.com/haber/yasam/patronsuz-kurye-isbasinda-621120.html',
    type: 'news',
  },
  {
    id: '3',
    source: 'Sabah',
    title: 'Patronsuz, bisikletli kuryeler',
    date: '2021-06-26',
    url: 'https://www.sabah.com.tr/cumartesi/2021/06/26/patronsuz-bisikletli-kuryeler',
    type: 'news',
  },
  {
    id: '4',
    source: 'Gazete Kadıköy',
    title: 'Modern zamanın hamalları: "Patronsuz Kurye"',
    date: '2021-07-28',
    url: 'https://www.gazetekadikoy.com.tr/gundem/modern-zamanin-hamallari-patronsuz-kurye',
    type: 'news',
  },
  {
    id: '5',
    source: 'Independent Türkçe',
    title: "Kadıköy'ün patronsuz kuryeleri: Amacımız şehrin lojistiğini değiştirmek",
    date: '2021-10-04',
    url: 'https://www.indyturk.com/node/387826',
    type: 'news',
  },
  {
    id: '6',
    source: 'Atv Haber',
    title: 'Esnaf için pedal çeviriyorlar',
    date: '2021-07-27',
    url: 'https://www.youtube.com/watch?v=k5P5-P_LcC0',
    type: 'video',
  },
  {
    id: '7',
    source: 'YouTube',
    title: 'Bisikletli Kuryeler İle Konuştuk | ULAK Özel Kuryeniz',
    date: '2021-03-22',
    url: 'https://youtu.be/ZeilxrFQaJ8?si=EoKZnLiynHG8IA96',
    type: 'video',
  },
  {
    id: '8',
    source: 'YouTube',
    title: '22 06 2021 patronsuz kurye',
    date: '2021-06-22',
    url: 'https://www.youtube.com/watch?v=w-8bX5TvfI0',
    type: 'video',
  },
];

export function PressPage() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language.startsWith('tr') ? 'tr-TR' : 'en-US';
  const { items, loading } = usePressItems(locale);

  // Use Contentful data if available, otherwise fall back to hardcoded data
  const pressCoverage = !loading && items.length > 0 ? items : fallbackCoverage;

  return (
    <div className="bg-white dark:bg-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-[var(--color-primary)] to-[#1a0050] dark:from-black dark:to-black text-white">
        <Container>
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-['Overpass_Mono',sans-serif] text-[var(--color-secondary)] font-bold uppercase tracking-widest text-sm"
            >
              {t('press.title')}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-['Overpass',sans-serif] text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 leading-tight"
            >
              Medyada <span className="text-[var(--color-secondary)]">Pako</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-['Overpass',sans-serif] text-lg md:text-xl font-light mt-6 text-white/80 leading-relaxed"
            >
              {t('press.description')}
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Coverage Grid */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressCoverage.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-all shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-['Overpass_Mono',sans-serif] text-xs font-bold text-[var(--color-primary)] dark:text-[var(--color-secondary)] uppercase tracking-wider px-3 py-1 bg-[var(--color-secondary)]/10 dark:bg-primary/20 rounded-full">
                      {item.source}
                    </span>
                    {item.type === 'video' || item.type === 'documentary' ? (
                      <LucidePlayCircle className="size-5 text-red-500" />
                    ) : (
                      <LucideExternalLink className="size-5 text-gray-400 group-hover:text-[var(--color-primary)] transition-colors" />
                    )}
                  </div>
                  <h3 className="font-['Overpass',sans-serif] text-xl md:text-2xl font-bold text-black dark:text-white group-hover:text-[var(--color-primary)] dark:group-hover:text-[var(--color-secondary)] transition-colors mb-4 leading-snug">
                    &quot;{item.title}&quot;
                  </h3>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-['Overpass_Mono',sans-serif] text-sm text-gray-500">
                    {item.date}
                  </span>
                  <span className="font-['Overpass',sans-serif] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Haberi Oku →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </Container>
      </section>

      {/* Press Kit Section */}
      <section className="py-20 bg-[var(--color-primary)] dark:bg-black text-white">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <h2 className="font-['Overpass',sans-serif] text-3xl md:text-4xl font-extrabold mb-6">
                {t('press.kitTitle')}
              </h2>
              <p className="font-['Overpass',sans-serif] text-lg text-white/70 mb-10 leading-relaxed">
                {t('press.kitDesc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center justify-between gap-4 h-auto py-5 px-5 group hover:bg-white/20"
                >
                  <a
                    href="/docs/Pako Logolar.zip"
                    download="Pako_Logolar.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="font-['Overpass',sans-serif] font-bold group-hover:text-white dark:group-hover:text-white transition-colors">
                      {t('press.buttons.logo')}
                    </span>
                    <LucideFileDown className="size-5 text-[var(--color-secondary)] group-hover:translate-y-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-between gap-4 h-auto py-5 px-5 group hover:bg-white/20"
                >
                  <span className="font-['Overpass',sans-serif] font-bold group-hover:text-white dark:group-hover:text-white transition-colors">
                    {t('press.buttons.photos')}
                  </span>
                  <LucideFileDown className="size-5 text-[var(--color-secondary)] group-hover:translate-y-1 transition-transform" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center justify-between gap-4 h-auto py-5 px-5 group hover:bg-white/20 col-span-1 sm:col-span-2"
                >
                  <a
                    href="/docs/Pako Kimlik Rehberi.pdf"
                    download="Pako_Kimlik_Rehberi.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="font-['Overpass',sans-serif] font-bold group-hover:text-white dark:group-hover:text-white transition-colors">
                      {t('press.buttons.guidelines')}
                    </span>
                    <LucideFileDown className="size-5 text-[var(--color-secondary)] group-hover:translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, rotate: 12, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: 3, scale: 1 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="relative w-full max-w-sm"
              >
                <img
                  src={pakoSticker}
                  alt="Pako Sticker"
                  className="w-full h-auto drop-shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-[var(--color-secondary)] text-[var(--color-primary)] font-bold px-6 py-2 rounded-lg shadow-lg">
                  Official Brand Assets
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Media Contact */}
      <section className="py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-['Overpass',sans-serif] text-3xl font-extrabold text-black dark:text-white mb-6">
              {t('press.contactTitle')}
            </h2>
            <p className="font-['Overpass',sans-serif] text-lg text-black/60 dark:text-white/60 mb-8 leading-relaxed">
              {t('press.contactDesc')}
            </p>
            <a
              href="mailto:pakogeliyor@gmail.com"
              className="font-['Overpass_Mono',sans-serif] text-2xl md:text-3xl font-bold text-[var(--color-primary)] dark:text-[var(--color-secondary)] hover:underline decoration-4 underline-offset-8"
            >
              pakogeliyor@gmail.com
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
