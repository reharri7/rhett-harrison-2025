import {Metadata} from "next";
import {metadata as mData} from '../../../lib/metadata'

export const metadata: Metadata = {
  ...mData,
  title: "Learning to Learn | Rhett Harrison",
  description:
    "I recently completed an online course on how to learn. Here\'s how it went",
  openGraph: {
    type: "website",
    url: "https://rhettharrison.com",
    description: "Learning to Learn | I recently completed an online course on how to learn. Here\'s how it went",
    siteName: "Rhett Harrison",
    images: [
      {
        url: "/images/blogs/learning-to-learn/learning-to-learn-cover.webp",
        height: "1200",
        width: "800",
        type: "image/webp",
        alt: "Learning to Learn Cover",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: '@site',
    creator: '@creator',
    title: 'Learning to Learn | Rhett Harrison',
    description: 'I recently completed an online course on how to learn. Here\'s how it went',
    images: {
      url: "/images/blogs/learning-to-learn/learning-to-learn-cover.webp",
      height: "1200",
      width: "800",
      type: "image/webp",
      alt: "Learning to Learn Cover",
    }
  },
};
const LearningToLearnLayout = ({children}: { children: React.ReactNode[] }) => {
  return (
    {...children}
  )
}

export default LearningToLearnLayout;