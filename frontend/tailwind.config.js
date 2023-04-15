/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"General Sans"', "system-ui"],
      pixel: ['"Array"', "system-ui"],
      handwritten: ['"Kalam"', "system-ui"],
    },
    extend: {},
  },
  plugins: [],
};
