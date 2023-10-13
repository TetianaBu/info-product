/** @type {import('tailwindcss').Config} */

import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{html,js,ts,jsx,tsx}"];

export const theme = {
  extend: {
    colors: {
      white: "hsla(0, 0%, 100%, 1)",
      offwhite: "hsla(45, 29%, 97%, 1)",
      black: "hsla(223, 5%, 21%, 1)",
      primary: "hsla(239, 28%, 46%, 1)",
      grey: "hsla(240, 5%, 75%, 1)",
      yellow: "hsla(46, 100%, 87%, 1)",
    },

    fontFamily: {
      jura: ['"Jura"', ..._fontFamily.sans],
    },
    backgroundImage: {
      "gradient-radial":
        "radial-gradient(50% 50% at 50% 50%, hsla(46, 100%, 87%, 1) 0%, hsla(46, 100%, 87%, 0.95) 27.08%, hsla(46, 100%, 87%, 0.2) 68.75%, hsla(0, 0%, 85%, 0) 100%);",
    },
  },
};

export const plugins = [];
