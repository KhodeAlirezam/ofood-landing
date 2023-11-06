/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow' : 'spin 100s linear infinite'
      },
      colors: {
        primary: {
          lighter: "hsla(201, 81%, 96%, <alpha-value>)",
          light: "hsla(198, 85%, 71%, <alpha-value>)",
          DEFAULT: "hsla(198, 100%, 46%, <alpha-value>)",
          dark: "hsla(198, 100%, 32%, <alpha-value>)",
          darker: "hsla(198, 100%, 18%, <alpha-value>)",
        },
        seperator: "hsla(222, 29%, 24%, 0.08)",
      },
    },
  },
  plugins: [],
};
