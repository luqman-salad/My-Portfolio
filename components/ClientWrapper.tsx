'use client';

import { usePathname } from 'next/navigation';
import Head from '@/components/Head';
import Footer from '@/components/Footer';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import { useEffect, useState } from 'react';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSingleBlogPost, setIsSingleBlogPost] = useState(false);

  useEffect(() => {
    const regex = /^\/blog\/[^/]+$/;
    setIsSingleBlogPost(regex.test(pathname));
  }, [pathname]);

  return (
    <>
      <header className="mx-3 fixed top-0 left-0 w-full z-50"><Head /></header>

      {isSingleBlogPost ? (
        <div className="flex max-w-6xl mx-auto pt-20 px-4 gap-6">
          <aside className="w-1/5 hidden lg:block">
            <LeftSidebar />
          </aside>

          <main className="flex-1">
            {children}
            <Footer />
          </main>

          <aside className="w-1/5 hidden lg:block">
            {/* <RightSidebar /> */}
          </aside>
        </div>
      ) : (
        <main className="max-w-3xl m-auto px-4">
          {children}
          <Footer />
        </main>
      )}
    </>
  );
}
