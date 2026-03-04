import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

// SVG path data from real assets (assets/svg/footer_logo.svg, assets/icons/)
const logoP =
  'M53.3746 4.24072C52.0033 4.24072 38.0875 4.24072 38.0875 4.24072L26 30.8789H38.6969L41.8712 23.1845C51.2415 23.4893 58.7835 22.2704 61.9578 13.9666C65.4621 4.87557 57.2091 4.24072 53.3746 4.24072ZM50.5305 13.5603C49.9718 15.5156 47.7118 16.0235 44.6899 16.0235L46.7976 11.0971H49.5655C49.5655 11.0971 51.0892 11.6049 50.5305 13.5603Z';
const logoA =
  'M86.0313 30.6757L85.5234 4.24072H72.2678L51.5718 30.8789H64.2687L66.6811 26.8413H74.731L74.6294 30.6757H86.0313ZM71.2266 19.8579L76.0007 12.7477V19.8579H71.2266Z';
const logoK =
  'M85.4725 30.6757L96.5443 4.24072H107.565L104.01 12.7477L112.568 4.24072H124.909L111.4 16.9884L114.168 30.6757H102.233L100.582 20.569L96.5951 30.6757H85.4725Z';
const logoO =
  'M131.435 30.8535C138.774 30.8535 144.742 24.8859 144.742 17.5471C144.742 10.2083 138.774 4.24072 131.435 4.24072C124.097 4.24072 118.129 10.2083 118.129 17.5471C118.129 24.8859 124.097 30.8535 131.435 30.8535Z';
const logoBoltDot =
  'M140.806 8.12604C141.542 8.86246 142.202 9.70045 142.761 10.6146L157.134 0L140.806 8.12604Z';
const logoBoltStrike =
  'M139.231 13.2048C137.53 12.3922 135.778 11.8081 134.203 11.4018L120.922 18.0042L128.667 19.9595L102.131 42.6616L142.482 17.0392L135.93 15.6426L139.231 13.2048Z';

const iconYoutube = (
  <path
    d="M22.5358 6.34184C22.4106 5.88881 22.1655 5.47575 21.8249 5.14401C21.4843 4.81226 21.0603 4.57347 20.5952 4.45153C18.8824 4 12 4 12 4C12 4 5.11755 4 3.4048 4.45153C2.93971 4.57347 2.51567 4.81226 2.1751 5.14401C1.83453 5.47575 1.58938 5.88881 1.4642 6.34184C1.14379 8.04324 0.988589 9.77025 1.00065 11.5C0.988589 13.2298 1.14379 14.9568 1.4642 16.6582C1.58938 17.1112 1.83453 17.5243 2.1751 17.856C2.51567 18.1877 2.93971 18.4265 3.4048 18.5485C5.11755 19 12 19 12 19C12 19 18.8824 19 20.5952 18.5485C21.0603 18.4265 21.4843 18.1877 21.8249 17.856C22.1655 17.5243 22.4106 17.1112 22.5358 16.6582C22.8562 14.9568 23.0114 13.2298 22.9993 11.5C23.0114 9.77025 22.8562 8.04324 22.5358 6.34184ZM9.80013 14.7143V8.28571L15.5119 11.5L9.80013 14.7143Z"
    fill="currentColor"
  />
);

const iconInstagram = (
  <>
    <path
      d="M21.9356 7.90309C21.9244 7.06334 21.7669 6.23193 21.4702 5.44606C21.213 4.78318 20.82 4.18117 20.3165 3.67849C19.813 3.17581 19.21 2.78351 18.546 2.52667C17.7689 2.23546 16.948 2.07799 16.1182 2.06098C15.0498 2.01331 14.711 2 11.9989 2C9.28676 2 8.93914 2 7.8785 2.06098C7.04904 2.07812 6.22851 2.23558 5.4518 2.52667C4.78771 2.78333 4.18461 3.17557 3.68107 3.67827C3.17753 4.18097 2.78464 4.78308 2.52754 5.44606C2.23526 6.22124 2.07788 7.04059 2.06219 7.86872C2.01444 8.93647 2 9.27464 2 11.9823C2 14.6899 2 15.0358 2.06219 16.0958C2.07885 16.9252 2.23545 17.7434 2.52754 18.5207C2.78507 19.1835 3.17825 19.7853 3.68196 20.2878C4.18567 20.7903 4.78883 21.1824 5.45291 21.439C6.22749 21.7419 7.04817 21.9106 7.87961 21.9379C8.94913 21.9856 9.28787 22 12 22C14.7121 22 15.0598 22 16.1204 21.9379C16.9502 21.9216 17.7712 21.7645 18.5482 21.4733C19.212 21.2162 19.8149 20.8238 20.3184 20.3211C20.8218 19.8185 21.2149 19.2166 21.4725 18.5539C21.7646 17.7778 21.9211 16.9595 21.9378 16.1291C21.9856 15.0624 22 14.7243 22 12.0155C21.9978 9.30791 21.9978 8.96419 21.9356 7.90309ZM11.9922 17.1026C9.15571 17.1026 6.85784 14.8085 6.85784 11.9767C6.85784 9.14492 9.15571 6.85087 11.9922 6.85087C13.354 6.85087 14.6599 7.39091 15.6228 8.3522C16.5857 9.31348 17.1266 10.6173 17.1266 11.9767C17.1266 13.3362 16.5857 14.64 15.6228 15.6012C14.6599 16.5625 13.354 17.1026 11.9922 17.1026ZM17.331 7.85653C17.1737 7.85667 17.0179 7.82586 16.8726 7.76584C16.7273 7.70582 16.5953 7.61779 16.4841 7.50677C16.3729 7.39575 16.2847 7.26393 16.2246 7.11885C16.1644 6.97377 16.1336 6.81828 16.1337 6.66127C16.1337 6.50438 16.1647 6.34903 16.2248 6.20408C16.285 6.05913 16.3731 5.92743 16.4842 5.81649C16.5953 5.70555 16.7273 5.61755 16.8725 5.55751C17.0176 5.49747 17.1733 5.46657 17.3304 5.46657C17.4876 5.46657 17.6432 5.49747 17.7884 5.55751C17.9336 5.61755 18.0655 5.70555 18.1766 5.81649C18.2877 5.92743 18.3759 6.05913 18.436 6.20408C18.4961 6.34903 18.5271 6.50438 18.5271 6.66127C18.5271 7.3221 17.9918 7.85653 17.331 7.85653Z"
      fill="currentColor"
    />
    <path
      d="M11.9922 15.3064C13.8342 15.3064 15.3274 13.8156 15.3274 11.9767C15.3274 10.1378 13.8342 8.64708 11.9922 8.64708C10.1503 8.64708 8.65704 10.1378 8.65704 11.9767C8.65704 13.8156 10.1503 15.3064 11.9922 15.3064Z"
      fill="currentColor"
    />
  </>
);

const iconGithub = (
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12.0258 2C6.51676 2 2.05176 6.465 2.05176 11.974C2.05176 16.38 4.90876 20.119 8.87276 21.439C9.37176 21.529 9.55176 21.222 9.55176 20.958C9.55176 20.721 9.54376 20.093 9.54076 19.262C6.76576 19.864 6.17976 17.924 6.17976 17.924C5.72776 16.772 5.07276 16.465 5.07276 16.465C4.16776 15.846 5.14176 15.86 5.14176 15.86C6.14376 15.93 6.66876 16.888 6.66876 16.888C7.55876 18.412 9.00476 17.972 9.57076 17.717C9.66176 17.072 9.92176 16.632 10.2058 16.383C7.99176 16.132 5.66376 15.276 5.66376 11.453C5.66376 10.366 6.05276 9.474 6.68776 8.778C6.58676 8.525 6.24176 7.51 6.78676 6.138C6.78676 6.138 7.62376 5.869 9.52876 7.159C10.3424 6.93767 11.1816 6.8247 12.0248 6.823C12.8679 6.82437 13.7072 6.93735 14.5208 7.159C16.4268 5.868 17.2628 6.138 17.2628 6.138C17.8078 7.51 17.4658 8.525 17.3618 8.778C18.0018 9.474 18.3858 10.365 18.3858 11.453C18.3858 15.286 16.0558 16.128 13.8338 16.375C14.1888 16.683 14.5088 17.291 14.5088 18.221C14.5088 19.555 14.4968 20.631 14.4968 20.958C14.4968 21.225 14.6748 21.535 15.1838 21.437C19.1458 20.115 21.9998 16.379 21.9998 11.974C21.9998 6.465 17.5348 2 12.0258 2Z"
    fill="currentColor"
  />
);

export function Footer() {
  const { t } = useTranslation();
  const footerMenu1 = [
    { label: t('footer.about'), path: '/hikayemiz' },
    { label: t('footer.pakoRider'), path: '/pako-rider' },
    { label: t('footer.partnership'), path: '/isletmeler' },
    { label: t('footer.blog'), path: '/blog' },
    { label: t('footer.press'), path: '/basin' },
  ];

  const footerMenu2 = [
    { label: t('footer.community'), path: '/topluluk' },
    { label: t('footer.pkoop'), path: '#' },
    { label: t('footer.support'), path: '/destek-ol' },
    { label: t('footer.help'), path: '/yardim' },
    { label: t('footer.contact'), path: '/iletisim' },
  ];

  const footerMenu3 = [
    { label: t('footer.privacy'), path: '/kvkk' },
    { label: t('footer.cookies'), path: '/cerez-politikasi' },
    { label: t('footer.terms'), path: '/kullanim-ilkeleri' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: iconInstagram,
      href: 'https://www.instagram.com/pakogeliyor',
      ariaLabel: 'Instagram',
    },
    {
      name: 'YouTube',
      icon: iconYoutube,
      href: 'https://www.youtube.com/@pakogeliyor',
      ariaLabel: 'YouTube',
    },
    {
      name: 'GitHub',
      icon: iconGithub,
      href: 'https://github.com/Yasin4261/i-need-courier',
      ariaLabel: 'GitHub',
    },
  ];

  return (
    <footer className="w-full bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-[var(--container-max-width)] flex-wrap items-center justify-center gap-8 px-4 py-6 md:gap-12 md:px-8 lg:flex-nowrap lg:gap-20 lg:px-[var(--spacing-6xl)]">
        {/* Logo */}
        <div className="flex w-44 shrink-0 items-center justify-center">
          <div className="h-[43px] w-[176px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 176 43"
            >
              <path d={logoP} fill="#290079" className="dark:fill-white" />
              <path d={logoA} fill="#290079" className="dark:fill-white" />
              <path d={logoK} fill="#290079" className="dark:fill-white" />
              <path d={logoO} fill="#290079" className="dark:fill-white" />
              <path
                d={logoBoltDot}
                fill="var(--color-secondary)"
                className="dark:fill-[var(--color-secondary)]"
              />
              <path
                d={logoBoltStrike}
                fill="var(--color-secondary)"
                className="dark:fill-[var(--color-secondary)]"
              />
            </svg>
          </div>
        </div>

        {/* Menu Column 1 */}
        <nav className="flex min-w-44 flex-1 flex-col gap-1">
          {footerMenu1.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="font-['Overpass',sans-serif] font-light text-black dark:text-white transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Menu Column 2 */}
        <nav className="flex min-w-44 flex-1 flex-col gap-1">
          {footerMenu2.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="font-['Overpass',sans-serif] font-light text-black dark:text-white transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Menu Column 3 */}
        <nav className="flex min-w-44 flex-1 flex-col gap-1.5">
          {footerMenu3.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="font-['Overpass',sans-serif] font-light text-black dark:text-white transition-opacity hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex min-w-44 flex-1 items-center justify-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.ariaLabel}
              className="transition-transform hover:scale-110 active:scale-95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="size-6 text-[var(--color-primary)] dark:text-[var(--color-secondary)]"
                fill="none"
                viewBox="0 0 24 24"
              >
                {social.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
