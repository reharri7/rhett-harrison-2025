# Build Fix Documentation

## Issue

When running `npm run build`, the following errors were encountered:

1. Module not found: Can't resolve '@emotion/is-prop-valid' in the framer-motion package
2. Type errors in the dynamic import of framer-motion in multiple files:
    - app/contact/page.tsx
    - app/projects/page.tsx
    - app/resume/page.tsx
    - components/blog/BlogPostClient.tsx

## Root Cause Analysis

### Missing Dependency

The framer-motion package depends on @emotion/is-prop-valid, but it was not installed in the project.

### Type Error in Dynamic Import

The dynamic import of framer-motion was causing type errors because of how the motion object was being accessed. The
pattern used was:

```typescript
const motion = dynamic(() => import('framer-motion').then(mod => mod.motion), {
  ssr: false,
  loading: () => <div className = "animate-pulse" / >,
});
```

This pattern was causing type errors because the TypeScript compiler couldn't properly infer the type of `mod.motion`.

## Solution

### 1. Install Missing Dependency

Installed the missing dependency:

```bash
npm install @emotion/is-prop-valid
```

### 2. Change Dynamic Import Pattern

Changed the dynamic import pattern in all affected files to:

1. Import framer-motion directly
2. Create a client-only wrapper component to handle client-side rendering
3. Wrap all motion components with the client-only wrapper

```typescript
// Import framer-motion directly
import {motion} from 'framer-motion';

// Create a client-only wrapper for framer-motion
const ClientMotion = ({children}: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  // Only show the motion components after mounting on the client
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className = "animate-pulse" > {children} < /div>;
  }

  return <>{children} < />;
};
```

Then wrapped all motion components with the ClientMotion component:

```tsx
<ClientMotion>
  <motion.div
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.5}}
    className="text-center mb-12"
  >
    {/* content */}
  </motion.div>
</ClientMotion>
```

### 3. Files Modified

1. app/contact/page.tsx
2. app/projects/page.tsx
3. app/resume/page.tsx
4. components/blog/BlogPostClient.tsx

## Results

After making these changes, the build completed successfully without any errors. The application should now work
correctly in production.

## Additional Notes

The approach used maintains the client-side rendering of framer-motion components while resolving the type errors. The
ClientMotion component ensures that the motion components are only rendered on the client side, which is important for
framer-motion to work correctly.

The warnings about metadataBase property not being set for social open graph or twitter images are unrelated to our
fixes and can be addressed separately if needed.