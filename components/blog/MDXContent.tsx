'use client';

import {MDXProvider} from '@mdx-js/react';
import {ReactNode} from 'react';

// eslint-disable-next-line jsx-a11y/heading-has-content
const components = {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  h1: (props: any) => <h1 className="text-4xl font-bold text-theme-title mb-6" {...props} />,
  // eslint-disable-next-line jsx-a11y/heading-has-content
  h2: (props: any) => <h2 className="text-3xl font-bold text-theme-title mt-8 mb-4" {...props} />,
  // eslint-disable-next-line jsx-a11y/heading-has-content
  h3: (props: any) => <h3 className="text-2xl font-bold text-theme-subtitle mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="text-theme-body mb-4" {...props} />,
  code: (props: any) => <code className="bg-theme-muted rounded px-1" {...props} />,
  pre: (props: any) => (
    <pre className="bg-theme-muted rounded-lg p-4 mb-4 overflow-x-auto" {...props} />
  ),
  ul: (props: any) => <ul className="list-disc list-inside text-theme-body mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside text-theme-body mb-4" {...props} />,
  li: (props: any) => <li className="text-theme-body mb-2" {...props} />,
};

export default function MDXContent({ children }: { children: ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
