/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) /<alpha-value>)",
        foreground: "hsl(var(--foreground) /<alpha-value>)",

        'white': "var(--clr-light)",
        'black': "var(--clr-dark)",
        'secondary': "var(--clr-secondary)",
        'main': "var(--clr-main)",
      },
      textColor: {
        background: "hsl(var(--background) /<alpha-value>)",
        foreground: "hsl(var(--foreground) /<alpha-value>)",
      },
      maxWidth: {
        ch: "60ch",
      },
      aspectRatio: {
        card: "1 / 1.25",
      },
      backgroundImage: {
        shape: "url('./assets/bgshapes.svg')",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
