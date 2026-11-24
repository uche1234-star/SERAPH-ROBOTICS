import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: { default: 'SERAPH — Intelligence in motion', template: '%s | SERAPH Robotics' },
  description: 'We teach, build and deploy intelligent robots — engineered in Africa, built for the world.',
  metadataBase: new URL('https://seraphrobotics.com'),
  openGraph: { title: 'SERAPH Robotics — Intelligence in motion', description: 'A new generation of robotics, engineered in Africa for the world.', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={GeistSans.className}><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader />{children}<SiteFooter /></body></html>;
}