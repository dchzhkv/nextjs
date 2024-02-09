import { ReactNode } from 'react';
import { Locale } from '@/types/locale';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Provider from '@/components/Provider';

type Props = {
	children: ReactNode;
  params: { locale: Locale };
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children, params: { locale } }: Props) {
	return (
    <html lang={locale}>
			<body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
