'use client';

import Sidebar from '@/components/admin/Sidebar';
import '../../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Restaurant Website',
//   description: 'Order delicious meals and manage your restaurant.',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen`}>
        <Sidebar onCollapseChange={setIsSidebarCollapsed} />
        <main
          className="flex-1 transition-all duration-300 ease-in-out"
          style={{
            marginLeft: isMobile ? '0' : isSidebarCollapsed ? '64px' : '256px',
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}