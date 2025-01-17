import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "Helvetica", "sans-serif"],
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
        pacifico: "var(--font-pacifico)",
      },
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities }) => {
      addBase({
        html: { "@apply scroll-smooth": {} },
        body: { "@apply text-base": {} },
        "body::-webkit-scrollbar": { "@apply hidden": {} },
        "input, textarea": { "@apply bg-transparent": {} },
        "input:focus, textarea:focus, select:focus, button:focus": {
          "@apply outline-none": {},
        },
        "input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button":
          { "@apply hidden": {} },
      });
      addComponents({
        ".main-layout::-webkit-scrollbar": { "@apply hidden": {} },
      });
      addUtilities({
        ".center": { "@apply grid place-items-center": {} },
        ".prevent-scrolling": { "@apply overflow-hidden": {} },
      });
    }),
  ],
} satisfies Config;
