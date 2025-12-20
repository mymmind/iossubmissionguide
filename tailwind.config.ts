import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './scripts/**/*.ts',
  ],
  safelist: [
    'w-4', 'h-4', 'w-5', 'h-5', 'w-6', 'h-6', 'w-8', 'h-8', 'w-10', 'h-10', 'w-12', 'h-12',
    'bg-apple-blue', 'bg-apple-red', 'bg-apple-green', 'bg-apple-gray', 'bg-yellow-400',
    'blue', 'red', 'green', 'yellow',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        apple: {
          blue: '#0071e3',
          dark: '#1d1d1f',
          gray: '#86868b',
          light: '#f5f5f7',
          border: '#d2d2d7',
          green: '#34c759',
          red: '#ff3b30',
          yellow: '#ffcc00',
        },
      },
    },
  },
  plugins: [],
}

export default config
