import TestThemeSelector from '@/components/TestThemeSelector';

export default function TestThemePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Theme Selector Test Page</h1>
      <p className="mb-8">This page is used to test the ThemeSelector component in isolation.</p>

      <div className="grid grid-cols-1 gap-6">
        <TestThemeSelector/>
      </div>
    </div>
  );
}