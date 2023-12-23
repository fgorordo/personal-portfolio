import { Inter, Lato, Montserrat, Montserrat_Alternates, Poppins,  } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';
import { Footer, Navbar } from '@/components';
import { ReactNode } from 'react';

const lato = Montserrat({ subsets: ['latin'], weight: ['100', '300', '400', '700', '900'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface Props {
  children: ReactNode
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es" className='bg-background text-text'>
      <body className={lato.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};
