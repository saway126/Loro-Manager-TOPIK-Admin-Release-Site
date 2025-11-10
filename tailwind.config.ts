
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af', // blue-800
          light: '#3b82f6', // blue-500
          dark: '#1e3a8a' // blue-900
        },
        accent: {
          DEFAULT: '#10b981', // emerald-500
          light: '#34d399', // emerald-400
          dark: '#059669' // emerald-600
        },
        gray: {
          light: '#e2e8f0', // slate-200
          DEFAULT: '#64748b', // slate-500
          dark: '#1e293b' // slate-800
        }
      },
      borderRadius: {
        'lg': '8px',
        'xl': '12px',
      },
      boxShadow: {
        'soft-lg': '0 10px 30px -15px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
export default config;
