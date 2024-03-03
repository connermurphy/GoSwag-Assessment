import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.75rem', //12px
        'xs': '.875rem', //14px
        'sm': '1rem', //16px
        'md': '1.125rem', //18px
        'lg': '1.25rem', //20px
      }
    },
  },
  plugins: [],
};
export default config;
