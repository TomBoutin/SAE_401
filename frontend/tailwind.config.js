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
        navBorder: "url('./public/img/NavBorder.png')",
        cardGradiant: "linear-gradient(180deg, rgba(22,15,15,0) 0%, #160F0F 100%)",
        HeaderImage: "linear-gradient(180deg, rgba(22,15,15,0) 0%,rgba(22,15,15,0) 45%, #160F0F 100%), url('/img/bg-image.webp')",
        DetailsGradiant: "linear-gradient(180deg, rgba(22,15,15,0) 0%, #160F0F 100%)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      backgroundSize: {
        "16": "2.25606rem 4rem",
      },
      translate: {
        29: "7.25rem",
        42: "10.5rem",
        37: "9.25rem",
        38: "9.5rem",
      },
      width: {
        88: "22rem",
        140: "35rem",
      },
      height: {
        88: "22rem",
        140: "35rem",
      },
      spacing: {
      140: "35rem",
    },
    },
  },
  plugins: [],
};
