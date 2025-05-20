// tailwind.config.ts
const config = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
      {
        pattern: /gap-[1248]/, // an example how to apply dynamic classes comming from the backend/or else where
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ibm)", "sans-serif"],
      },
      padding: {
        "xxs-4": "4px",
        "xxs-6": "6px",
        "xs-8": "8px",
        "xs-12": "12px",
        "sm-16": "16px",
        "md-24": "24px",
        "md-36": "36px",
        "lg-48": "48px",
        "lg-64": "64px",
        "xl-96": "96px",
      },
      boxShadow: {
        "1cm":
          "0px 3px 9px 0px rgba(0, 0, 0, 0.02), 0px 3px 4px 0px rgba(0, 0, 0, 0.02)",
        "2cm":
          "0px 4px 12px 0px rgba(0, 0, 0, 0.04), 0px 6px 9px 0px rgba(0, 0, 0, 0.02)",
        "3cm":
          "0px 12px 27px 0px rgba(0, 0, 0, 0.02), 0px 7px 16px 3px rgba(0, 0, 0, 0.04), 0px 6px 14px 0px rgba(0, 0, 0, 0.02), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)",
        "4cm":
          "0px 12px 24px -4px rgba(0, 0, 0, 0.02), 0px 11px 16px -3px rgba(0, 0, 0, 0.02), 0px 21px 22px -5px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)",
        "5cm":
          "0px 44px 24px -4px rgba(0, 0, 0, 0.02), 0px 13px 16px -3px rgba(0, 0, 0, 0.02), 0px 28px 22px -5px rgba(0, 0, 0, 0.03), 0px 0px 0px 1px rgba(0, 0, 0, 0.03)",
        "6cm": "-1px 2px 10px -1px rgba(169, 169, 169, 1)",
      },
      transitionProperty: {
        "max-height": "max-height",
      },
    },
  },
  plugins: [],
} as unknown as import("tailwindcss").Config;

export default config;
