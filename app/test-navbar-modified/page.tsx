import NavbarWithModifiedTheme from '@/components/NavbarWithModifiedTheme';

export default function TestNavbarModifiedPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarWithModifiedTheme/>

      <main className="flex-grow container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Modified Navbar Test Page</h1>
        <p className="mb-8">This page is used to test the NavbarWithModifiedTheme component.</p>

        <div className="p-4 border border-gray-300 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
          <p>Check if the ModifiedThemeSelector is visible in the navbar above.</p>
          <p className="mt-2">If it is visible, then the issue might be with the asChild prop in the original
            ThemeSelector.</p>
        </div>
      </main>
    </div>
  );
}