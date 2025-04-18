'use client';

import {Button} from '@/components/ui/button';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className={'flex flex-col items-center justify-center space-y-4 text-primary'}>
      <h1 className={'text-4xl'}>404</h1>
      <p>We couldn&apos;t find the page you were looking for</p>
      <Button variant="link">
        <Link href="/">Return to home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
