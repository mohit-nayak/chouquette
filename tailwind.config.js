/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "italian-old-style": ["ItalianOldStyle", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          light: "var(--primary-light)",
          DEFAULT: "var(--primary)",
        },
        light: "var(--light)",
      },
      backgroundColor: {
        "hover-on-light": "var(--primary)",
        light: "var(--light)",
      },
      transitionTimingFunction: {
        primary: "cubic-beizer(.61,.04,.45,.96)",
      },
    },
  },
  plugins: [],
};
