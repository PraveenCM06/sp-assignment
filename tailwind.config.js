/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-img':"url('/hero-bg.jpg')", 
        'hero-img-mobile':"url('/hero-bg-mobile.jpg')", 

      },
      keyframes: {
        spinit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        }
      },
      animation: {
        'spin-slow':'spinit 5s linear infinite'
      },
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities ={
        ".no-scrollbar::-webkit-scrollbar":{
          display:"none",
        },
        ".no-scrollbar":{
          "-ms-overflow-style":"none",
          "scrollbar-width":"none",
        }
      };
      addUtilities(newUtilities);
    }
  ],
}