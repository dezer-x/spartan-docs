'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  const router = useRouter();

  useEffect(() => {
    router.replace('/docs/guides/installation');
  }, [router]);

  return;
}
