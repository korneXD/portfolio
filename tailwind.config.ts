import type { Config } from "tailwindcss";

export const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        "grid-pattern": "url('../public/bg.png')",
      },
    },
  },
  plugins: [],
  important: true,
};
