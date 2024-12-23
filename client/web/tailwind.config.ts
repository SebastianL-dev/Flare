import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        global: "#0b0016",
      },
      boxShadow: {
        "button-hover": "0px 0px 30px 2px #a855f79c;",
        "button-default": "0px 0px 60px 2px #d400ff2c;",
        "button-default-white": "0px 0px 60px 2px #ffffff2c;",
        "button-hover-1": "0px 0px 50px 2px #a855f76c;",
        "button-hover-white": "0px 0px 50px 2px #ffffff5c;",
        "feature-card": "0px 20px 30px 0px #a855f700;",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        button: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
        "message-button": "cubic-bezier(0.83, 0, 0.17, 1)",
        form: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
