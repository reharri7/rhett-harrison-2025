# Build Fixes Documentation

## Issue 1: useSearchParams() not wrapped in a Suspense boundary

### Problem

When running `npm run build`, the following error was encountered:

```
useSearchParams() should be wrapped in a suspense boundary at page "/[page]". Read more: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
```

This error occurred because the `useSearchParams()` hook was being used in the GoogleAnalytics component without being
wrapped in a Suspense boundary. According to Next.js documentation, client-side hooks like `useSearchParams()` need to
be wrapped in a Suspense boundary to prevent hydration mismatches.

### Solution

1. Imported the Suspense component from React in the app/layout.tsx file:

```tsx
import {Suspense} from 'react';
```

2. Wrapped the GoogleAnalytics component in a Suspense boundary with a null fallback:

```tsx
<Suspense fallback={null}>
  {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
    <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}/>
  )}
</Suspense>
```

## Issue 2: metadataBase property not set in metadata export

### Problem

When running `npm run build`, the following warning was displayed:

```
metadataBase property in metadata export is not set for resolving social open graph or twitter images, using "http://localhost:3000". See https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
```

This warning occurred because the metadataBase property was not set in the metadata export, which is used to resolve
relative URLs in metadata, particularly for social media images in OpenGraph and Twitter metadata.

### Solution

Added the metadataBase property to the metadata object in lib/metadata.ts:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://rhettharrison.com'),
  // ... other metadata properties
};
```

## Verification

After making these changes, running `npm run build` completes successfully without any errors or warnings. All routes
are generated as static pages, and the application is ready for deployment.

## References

- [Next.js Documentation: Missing Suspense with CSR Bailout](https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout)
- [Next.js Documentation: Metadata Base](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase)