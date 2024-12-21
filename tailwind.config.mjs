/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px'
      },
    },
    fontFamily: {
      primary: 'var(--font-bebasNeue)',
      secondary: 'var(--font-inter)'
    },
    extend: {
      colors: {
        primary: '#f19509',
        primaryDark:'#e86f00',
        lightOrange:'#f1dabf',
        darkGray: '#1a1f25',
        lightGray: '#272c35',
        accent: {
          DEFAULT: '#7edad2',
          hover: '#79d3cc'
        }
      },
      boxShadow: {
        custom: '0px 14px 54px rgba(0,0,0,0.1)'
      },
    },
  },
  plugins: [],
};
