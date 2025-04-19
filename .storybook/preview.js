import '../app/globals.css';
import {ThemeProvider} from '@/components/theme-provider';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="p-8">
        <Story/>
      </div>
    </ThemeProvider>
  ),
];