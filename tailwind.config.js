/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "alaz-white": "#fcfcfc",
        "alaz-black": "#0f0a0a",
        "alaz-blue": "#256eff",
        "alaz-red": "#ff495c",
        "alaz-violet": "#46237a",
        "alaz-aquamarine": "#3ddc97",
        "alaz-champagne": "#fff3b0",
      }
    }
  },
  plugins: [],
}
