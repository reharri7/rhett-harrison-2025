'use client';

import { MDXProvider } from '@mdx-js/react';
import { ReactNode } from 'react';

const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="mb-4" {...props} />,
  code: (props: any) => <code className="bg-gray-100 dark:bg-gray-800 rounded px-1" {...props} />,
  pre: (props: any) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 overflow-x-auto" {...props} />
  ),
  ul: (props: any) => <ul className="list-disc list-inside mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
};

export default function MDXContent({ children }: { children: ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}