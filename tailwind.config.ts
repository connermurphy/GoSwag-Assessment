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
      },
      //group colours together
      //lifted from Figma, 
      colors: {

        //base white
        'white': '#fff',

        //grey (consist of grey & charcoal like colours)
        'grey-900': '#101828',

        'grey-700': '#344054',
        'grey-600': '#475467',
        'grey-500': '#667085',

        'grey-300': '#D0D5DD',
        'grey-200': '#EAECF0',
        'grey-50': '#F9FAFB',

        //blue (brand blue)
        'blue-900': '#155EEF',
        'blue-50': '#C0CFED',

        //success (green)
        'success-500': '#17B26A',

        //primary colour (?)
        'primary-700': '#1F2133'
      },
      'backgroundImage': {
        //primary gradient bg
        'primary-gradient': 'linear-gradient(107deg, #155EEF 1.86%, #229CD1 48.8%, #22BC97 98.76%)'
      }
    },
  },
  plugins: [],
};
export default config;
