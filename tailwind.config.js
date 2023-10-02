/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./src/assets/home.jpg')",
        about: "url('./src/assets/newhome.jpg')",
      },
    },
  },
  plugins: [],
};
