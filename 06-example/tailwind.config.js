/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#115A5B",
        secondary: "#103E3F",
        tertiery: "#167475",
        text: "#E3D3C4",
      },
      fontFamily: {
        body: ["Fredoka", "sans-serif"],
        title: ["Mountains of Christmas", "serif"]
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
