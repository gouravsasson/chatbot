/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle at 50% 100%, #d0e3fb, #ebf1ff 53%)',
      },
      fontFamily :{
        'Maison Neue Light' : ['Maison Neue Light'],
        "Maison Neue Bold" : ["Maison Neue Bold"],
        "Lexend":["Lexend", 'sans-serif']
        

      },
    },
  },
  plugins: [],
}

