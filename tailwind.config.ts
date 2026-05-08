import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        border: "#DDDDDD",
        input: "#DDDDDD",
        ring: "#222222",
        background: "#FFFFFF",
        foreground: "#222222",
        primary: {
          DEFAULT: "#FF385C", // Rausch
          active: "#E00B41",
          disabled: "#FFD1DA",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#717171",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FF385C",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F7F7F7", // Surface Soft
          foreground: "#6A6A6A",
        },
        ink: "#222222",
        body: "#3F3F3F",
        mutedText: "#6A6A6A",
        mutedSoft: "#929292",
        hairline: "#DDDDDD",
        hairlineSoft: "#EBEBEB",
        surfaceSoft: "#F7F7F7",
        surfaceStrong: "#F2F2F2",
        rausch: "#FF385C",
        luxe: "#460479",
        plus: "#92174D",
      },
      borderRadius: {
        none: "0",
        sm: "8px",
        md: "14px",
        lg: "24px",
        xl: "32px",
        full: "9999px",
      },
      boxShadow: {
        airbnb: "rgba(0, 0, 0, 0.02) 0 0 0 1px, rgba(0, 0, 0, 0.04) 0 2px 6px, rgba(0, 0, 0, 0.1) 0 4px 8px",
      },
      spacing: {
        xxs: "2px",
        xs: "4px",
        sm: "8px",
        md: "12px",
        base: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
        section: "64px",
      },
      fontSize: {
        'display-xl': ['28px', { lineHeight: '1.43', fontWeight: '700' }],
        'display-lg': ['22px', { lineHeight: '1.18', fontWeight: '500', letterSpacing: '-0.44px' }],
        'display-md': ['21px', { lineHeight: '1.43', fontWeight: '700' }],
        'display-sm': ['20px', { lineHeight: '1.20', fontWeight: '600', letterSpacing: '-0.18px' }],
        'title-md': ['16px', { lineHeight: '1.25', fontWeight: '600' }],
        'title-sm': ['16px', { lineHeight: '1.25', fontWeight: '500' }],
        'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.43', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.29', fontWeight: '500' }],
        'caption-sm': ['13px', { lineHeight: '1.23', fontWeight: '400' }],
        'badge': ['11px', { lineHeight: '1.18', fontWeight: '600' }],
        'micro-label': ['12px', { lineHeight: '1.33', fontWeight: '700' }],
        'uppercase-tag': ['8px', { lineHeight: '1.25', fontWeight: '700', letterSpacing: '0.32px' }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
