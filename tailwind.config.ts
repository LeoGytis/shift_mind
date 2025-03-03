import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        testColor: "#ff00ff",
      },
      backgroundImage: {
        gradientmain: "linear-gradient(90deg, #F175B9, #8089FF, #3DF7FF)",
      },
    },
  },
  plugins: [],
} satisfies Config;
