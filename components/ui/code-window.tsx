'use client';

import React, {useEffect, useState} from 'react';
import Prism from 'prismjs';
import {ClipboardCopy} from 'lucide-react';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import {toast} from 'sonner';

interface CodeWindowProps {
  code: string;
  language: string;
  title?: string;
  showLineNumbers?: boolean;
}

export default function CodeWindow({
                                     code,
                                     language,
                                     title,
                                     showLineNumbers = true,
                                   }: CodeWindowProps) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(code.trim())
      .then(() => toast.success('Code copied to clipboard successfully!'))
      .catch(() => toast.error('Failed to copy code to clipboard!'));
  };

  return (
    <div
      className="relative rounded-lg overflow-hidden mb-6 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title && <div className="bg-gray-800 px-4 py-2 text-gray-200 text-sm">{title}</div>}
      <pre className={`${showLineNumbers ? 'line-numbers' : ''}`}>
        <code className={`language-${language}`}>{code.trim()}</code>
      </pre>
      {isHovered && (
        <div className="absolute top-10 right-0 mt-2 mr-2">
          <button className="bg-gray-800 text-gray-200 p-1 rounded" onClick={copyToClipboard}>
            <ClipboardCopy className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
