import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        specialTheme: {
          primary: "#0000ff",
          secondary: "#3a7800",
          accent: "#b2b400",
          neutral: "#0d1314",
          "base-100": "#002c37",
          info: "#0076f6",
          success: "#00e8c3",
          warning: "#dd1300",
          error: "#ff7f7c",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
export default config;
