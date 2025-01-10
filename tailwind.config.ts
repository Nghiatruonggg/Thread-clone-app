import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--back-color)",
        text: "var(--text-color)",
        input: "var(--inputback-color)",
        outline: "var(--outline-color)"
      },
    },
  },
  plugins: [],
} satisfies Config;
