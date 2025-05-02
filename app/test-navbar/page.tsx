import NavbarWithSimpleTheme from '@/components/NavbarWithSimpleTheme';

export default function TestNavbarPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarWithSimpleTheme/>

      <main className="flex-grow container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Navbar Test Page</h1>
        <p className="mb-8">This page is used to test the NavbarWithSimpleTheme component.</p>

        <div className="p-4 border border-gray-300 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
          <p>Check if the SimpleThemeSelector is visible in the navbar above.</p>
          <p className="mt-2">If it is visible, then the issue might be with the DropdownMenu component in the original
            ThemeSelector.</p>
        </div>
      </main>
    </div>
  );
}