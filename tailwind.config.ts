import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        bounce: 'bounce-custom 2s infinite',
      },
      keyframes: {
        'bounce-custom': {
          '0%, 100%': {
            transform: 'translateY(15px)',
            opacity: '1',
          },
          '50%': {
            transform: 'translateY(-15px)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
