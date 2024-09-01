/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        rocketMove: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-20px, 10px)' },
          '75%': { transform: 'translate(10, -10px)' },
        },

        moveBlob1: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(100%, 0)" },
          "50%": { transform: "translate(100%, 100%)" },
          "75%": { transform: "translate(0, 100%)" },
        },
        moveBlob2: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-100%, 0)" },
          "50%": { transform: "translate(-100%, -100%)" },
          "75%": { transform: "translate(0, -100%)" },
        },

      },

      animation: {
        rocketMove: 'rocketMove 1.5s infinite ease-in-out',
        moveBlob1: "moveBlob1 20s linear infinite",
        moveBlob2: "moveBlob2 20s linear infinite",
      },
    },
  },
  plugins: [],
};
