import type {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Rhett Harrison | Senior Software Engineer',
  description: 'Full-stack Senior Software Engineer specializing in modern web technologies',
  applicationName: "Rhett Harrison",
  authors: [{name: "Rhett Harrison", url: 'https://rhettharrison.com'}],
  creator: "Rhett Harrison",
  openGraph: {
    type: "website",
    url: "https://rhettharrison.com",
    description: "Full-stack Senior Software Engineer specializing in modern web technologies",
    siteName: "Rhett Harrison",
    images: [
      {
        url: "/images/rhett_profile.jpeg",
        height: "512",
        width: "512",
        type: "image/jpeg",
        alt: "Rhett Profile Picture",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: '@site',
    creator: '@creator',
    title: 'Rhett Harrison',
    description: 'Senior Software Engineer',
    images: {
      url: "/images/rhett_profile.jpeg",
      height: "512",
      width: "512",
      type: "image/jpeg",
      alt: "Rhett Profile Picture",
    }
  },
  appleWebApp: {capable: true, title: "Rhett Harrison", statusBarStyle: "black-translucent"},
  icons: {
    shortcut: '/favicon.ico',
  },
};