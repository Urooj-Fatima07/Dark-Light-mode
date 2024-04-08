import type { Config } from "tailwindcss";

const config: Config = {
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
      colors: {
        dark: {
          DEFAULT: '#000205', // Dark mode background color
          text: '#FFFFFF',    // Dark mode text color
          // Add more custom dark mode colors as needed
        },
        light: {
          DEFAULT: '#FFFFFF', // Light mode background color
          text: '#333333',    // Light mode text color
          // Add more custom light mode colors as needed
        },
      },
    },
  },
  plugins: [],
};

export default config;
