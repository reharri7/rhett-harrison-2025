'use client';

import {ThemeSelector} from '@/components/ThemeSelector';
import {SimpleThemeSelector} from '@/components/SimpleThemeSelector';
import {ModifiedThemeSelector} from '@/components/ModifiedThemeSelector';

export default function TestThemeSelector() {
  return (
    <div className="p-4 border border-red-500 bg-gray-100 dark:bg-gray-800 rounded-md">
      <h2 className="text-lg font-bold mb-2">Theme Selector Test</h2>
      <p className="mb-4">This is a test component to verify that the ThemeSelector is working correctly.</p>

      <div className="space-y-6">
        <div>
          <h3 className="text-md font-semibold mb-2">Original ThemeSelector (Dropdown with asChild):</h3>
          <div className="inline-block border border-blue-500 p-2">
            <ThemeSelector/>
          </div>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-2">Modified ThemeSelector (Dropdown without asChild):</h3>
          <ModifiedThemeSelector/>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-2">Simple ThemeSelector (Buttons):</h3>
          <SimpleThemeSelector/>
        </div>
      </div>
    </div>
  );
}
