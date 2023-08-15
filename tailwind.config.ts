const withMT = require("@material-tailwind/react/utils/withMT");
import type { Config } from "tailwindcss";

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotasi: {
          "0%": {
            transform: "rotate(0deg)translate(-200px)",
          },
          "100%": {
            transform: "rotate(360deg)translate(-200px)",
          },
        },
      },
      animation: {
        rotasi: "rotasi 5s linear infinite",
      },
    },
  },
  plugins: [],
});
export default config;
