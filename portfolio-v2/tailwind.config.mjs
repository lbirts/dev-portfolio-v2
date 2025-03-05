/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-giest)"],
        mono: ["var(--font-giest-mono)"],
      },
    },
  },
  plugins: [],
};

export default config;