import Link from 'next/link';
import {Github, Linkedin} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-theme-navbar border-t border-theme-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-theme-body">
              © {new Date().getFullYear()} Rhett Harrison. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/reharri7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-body hover:text-theme-link"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/rhettharrison"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-body hover:text-theme-link"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
