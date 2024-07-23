/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'featured': "url('https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg')"
      },
      boxShadow: {
        'custome_for_featured': '0px -10px 10px 5px #1E293B',
        'custome_for_dividers' : '5px 0px 5px 0px #f8fafc'
      },
    },
  },
  plugins: [],
}