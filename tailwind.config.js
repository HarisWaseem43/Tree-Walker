/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        // xs: { min: "300px", max: "638px" },
        xs: "300px",

        // xxs: "276px",

        // xss: "275px",
      },
    },
  },
  plugins: [],
};
