import {Metadata} from 'next';
import {metadata as mData} from '../../../lib/metadata';

export const metadata: Metadata = {
  ...mData,
  title: 'Introducing Harrison\'s Law | Rhett Harrison',
  description: "Early in my career, I was given three months to build a full app from scratch. It took me six. Then I rewrote it... Three more times.",
  openGraph: {
    type: 'website',
    url: 'https://rhettharrison.com',
    description:
      "Introducing Harrison\'s Law | Early in my career, I was given three months to build a full app from scratch. It took me six. Then I rewrote it... Three more times.",
    siteName: 'Rhett Harrison',
    images: [
      {
        url: '/images/blogs/introducing-harrisons-law/Digital-Time-Blocking.webp',
        height: '820',
        width: '312',
        type: 'image/webp',
        alt: 'Introducing Harrison\'s Law Cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    title: 'Introducing Harrison\'s Law | Rhett Harrison',
    description: "Early in my career, I was given three months to build a full app from scratch. It took me six. Then I rewrote it... Three more times.",
    images: {
      url: '/images/blogs/introducing-harrisons-law/Digital-Time-Blocking.webp',
      height: '820',
      width: '312',
      type: 'image/webp',
      alt: 'Introducing Harrison\'s Law Cover',
    },
  },
};
const LearningToLearnLayout = ({children}: { children: React.ReactNode[] }) => {
  return {...children};
};

export default LearningToLearnLayout;
