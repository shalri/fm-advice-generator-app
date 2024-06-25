import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        "ag-light-cyan": "hsl(193, 38%, 86%)",
        "ag-neon-green": "hsl(150, 100%, 66%)",
        // Neutral
        "ag-grayish-blue": "hsl(217, 19%, 38%)",
        "ag-dark-grayish-blue": "hsl(217, 19%, 24%)",
        "ag-dark-blue": "hsl(218, 23%, 16%)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontWeight: {
        normal: "800",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      backgroundImage: {
        // "sample-bg": "/tsugini" // basepath of github pages
      },
    },
  },
  plugins: [],
};
export default config;
