import TestThemeSelector from '@/components/TestThemeSelector';

export default function TestAllThemesPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">All Theme Selectors Test Page</h1>
      <p className="mb-8">This page compares all three implementations of the theme selector.</p>

      <div className="grid grid-cols-1 gap-6">
        <TestThemeSelector/>

        <div className="p-4 border border-gray-300 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Debugging Instructions</h2>
          <p>Check which theme selectors are visible above:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>If only the Simple ThemeSelector (buttons) is visible, the issue is likely with the DropdownMenu
              component.
            </li>
            <li>If both the Simple ThemeSelector and Modified ThemeSelector are visible, but the Original ThemeSelector
              is not, the issue is likely with the asChild prop.
            </li>
            <li>If none are visible, the issue might be with the theme context or mounting logic.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">Other Test Pages:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="/test-navbar" className="text-blue-600 hover:underline">Test Simple Navbar</a> - Tests the
              SimpleThemeSelector in a navbar
            </li>
            <li><a href="/test-navbar-modified" className="text-blue-600 hover:underline">Test Modified Navbar</a> -
              Tests the ModifiedThemeSelector in a navbar
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">Possible Solutions:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>If the issue is with the asChild prop, update the original ThemeSelector to not use asChild.</li>
            <li>If the issue is with the DropdownMenu component, consider using the SimpleThemeSelector as a
              replacement.
            </li>
            <li>Check browser console for any errors that might provide additional clues.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}