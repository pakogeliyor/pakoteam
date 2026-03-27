import { createBrowserRouter } from 'react-router';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { HelpPage } from './pages/HelpPage';
import { SupportusPage } from './pages/SupportusPage';
import { ContactPage } from './pages/ContactPage';
import { BusinessesPage } from './pages/BusinessesPage';
import { PakoRiderPage } from './pages/PakoRiderPage';
import { AboutPage } from './pages/AboutPage';
import { PressPage } from './pages/PressPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { KvkkPage } from './pages/KvkkPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
      {
        path: '/blog',
        Component: BlogPage,
      },
      {
        path: '/blog/:slug',
        Component: BlogPostPage,
      },
      {
        path: '/yardim',
        Component: HelpPage,
      },
      {
        path: '/destek-ol',
        Component: SupportusPage,
      },
      {
        path: '/iletisim',
        Component: ContactPage,
      },
      {
        path: '/isletmeler',
        Component: BusinessesPage,
      },
      {
        path: '/pako-rider',
        Component: PakoRiderPage,
      },
      {
        path: '/hikayemiz',
        Component: AboutPage,
      },
      {
        path: '/basin',
        Component: PressPage,
      },
      {
        path: '/cerez-politikasi',
        Component: CookiePolicyPage,
      },
      {
        path: '/kvkk',
        Component: KvkkPage,
      },
      {
        path: '/kullanim-ilkeleri',
        Component: TermsPage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);
