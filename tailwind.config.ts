import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mantou: ["Mantou Sans", "sans-serif"],
        headline: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        label: ["Space Grotesk", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        /* Louis design tokens – opacity variants work via rgb(<alpha-value>) */
        primary: {
          DEFAULT: "rgb(137 81 0 / <alpha-value>)",
          container: "rgb(255 158 24 / <alpha-value>)",
          fixed: "rgb(255 220 188 / <alpha-value>)",
        },
        "on-primary": {
          DEFAULT: "#ffffff",
          container: "#673c00",
          fixed: "#2c1700",
        },
        secondary: {
          DEFAULT: "rgb(110 91 75 / <alpha-value>)",
          container: "rgb(249 221 201 / <alpha-value>)",
        },
        "on-secondary": {
          DEFAULT: "#ffffff",
          container: "#756051",
        },
        tertiary: {
          DEFAULT: "rgb(114 91 53 / <alpha-value>)",
          fixed: "#fedeae",
        },
        "on-tertiary": {
          DEFAULT: "#ffffff",
          container: "#57431f",
        },
        surface: {
          DEFAULT: "#f9f9f7",
          "container-lowest": "#ffffff",
          "container-low": "#f4f4f2",
          container: "#eeeeec",
          "container-high": "#e8e8e6",
        },
        "on-surface": {
          DEFAULT: "#1a1c1b",
          variant: "#544434",
        },
        "outline-variant": "rgb(218 194 174 / <alpha-value>)",
        background: "#f9f9f7",
        "inverse-surface": "#2f3130",
        "inverse-on-surface": "#f1f1ef",
        "inverse-primary": "#ffb86c",
        /* shadcn compat */
        foreground: "hsl(var(--foreground))",
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
