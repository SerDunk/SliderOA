import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyan-500": "hsl(174, 77%, 80%)",
        "cyan-700": "hsl(174, 86%, 45%)",
        "grayRed-400": "hsl(14, 92%, 95%)",
        "red-300": "hsl(15, 100%, 70%)",
        "blue-300": "hsl(226, 100%, 87%)",
        "blue-200": "hsl(230, 100%, 99%)",
        grayBlue: "hsl(224, 65%, 95%)",
        grayishBlue: "hsl(223, 50%, 87%)",
        "grayBlue-500": "hsl(225, 20%, 60%)",
        "blue-500": "hsl(227, 35%, 25%)",
      },
      fontFamily: {
        manrope: "Manrope",
      },
    },
  },
  plugins: [],
};

export default config;
