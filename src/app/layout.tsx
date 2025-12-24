import type { Metadata } from 'next';
import { Outfit, Cinzel } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Medusa Sky Lounge | Alcohol • Dancing • Fine Dining',
  description: 'Experience the elite nightlife at Medusa Sky Lounge. Exquisite dining, signature cocktails, and immersive entertainment under the sky.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/30 selection:text-primary-foreground',
          outfit.variable,
          cinzel.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

