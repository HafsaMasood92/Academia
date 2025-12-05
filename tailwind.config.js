/** @type {import('tailwindcss').Config} */
export default {
 
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'], // For headers
      },
      colors: {
        // "Tech" Palette
        primary: "#3B82F6", 
        accent: "#6366f1", // Indigo
        surface: "#0f172a", // Slate 900
        glass: "rgba(255, 255, 255, 0.05)",
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}