/** @type {import('tailwindcss').Config} */
import nextuitheme from './nextuitheme.config';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [...nextuitheme.plugins],
};
