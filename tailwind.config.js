/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl2: "1510px",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
