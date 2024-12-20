import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "l-dark-purple": "#070F2B",
        "l-main-purple": "#1B1A55", 
        "l-light-purple": "#535C91",
      },
    },
  },
  plugins: [],
};

export default config;
