/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ["Poppins", 'sans-serif'],
      'podkova': ["Podkova", 'system-ui'],
      'frank-ruhl-libre': ["Frank Ruhl Libre", 'serif'],
    },
    extend: {
      colors: {
        'banner-color': '#FAE3B6',
        'box-color': '#FEECC8',
        // 'light-maroon-color': '#FEECC8',
      },
      boxShadow: {
        'sign': '0 0 4px 4px rgba(0,0,0,.25)',
      },
    },
  },
  plugins: [],
}
// font-family: "Poppins", sans-serif;
// font-family: "Podkova", serif;
// font-family: "Frank Ruhl Libre", serif;