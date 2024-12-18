'use client';

import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';
import CodeWindow from '@/components/ui/code-window';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-blue-600 mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-blue-600 mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-blue-600 mt-6 mb-3">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 ml-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-gray-600 dark:text-gray-300">{children}</li>
    ),
    a: ({ href, children }) => (
      <Link 
        href={href || '#'} 
        className="text-blue-600 hover:text-blue-700 underline"
      >
        {children}
      </Link>
    ),
    img: ({ src, alt, width, height }) => (
      <div className="my-6">
        <Image
          src={src || ''}
          alt={alt || ''}
          width={width as number || 800}
          height={height as number || 400}
          className="rounded-lg"
        />
      </div>
    ),
    pre: ({ children }) => children,
    code: ({ className, children }) => {
      // If it's an inline code block (no language specified)
      if (!className) {
        return (
          <code className="bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded px-2 py-1 text-sm font-mono">
            {children}
          </code>
        );
      }
      // For code blocks with language specified
      const language = className.replace('language-', '');
      return (
        <CodeWindow
          code={children as string}
          language={language}
          showLineNumbers={true}
        />
      );
    },
    CodeWindow: ({ code, language, title }) => (
      <CodeWindow
        code={code}
        language={language}
        title={title}
        showLineNumbers={true}
      />
    ),
    ...components,
  };
}