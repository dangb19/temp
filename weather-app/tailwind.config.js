/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      sans: ["Inter", "Helvetica", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "0.5rem",
        },
      },
      animation: {
        "spin-slow": "spin-slow 20s linear infinite",
        "fade-in-out": "fade-in-out 5s linear infinite",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in-out": {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "25%": {
            opacity: 0.8,
            transform: "translateY(5px)",
          },
          "50%": {
            opacity: 0.6,
            transform: "translateY(0)",
          },
          "75%": {
            opacity: 0.8,
            transform: "translateY(-5px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
