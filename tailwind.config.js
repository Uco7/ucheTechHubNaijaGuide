/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12261F",
        paper: "#F6F7F4",
        slip: "#FBF7EC",
        forest: {
          DEFAULT: "#0B3D2E",
          light: "#0F5B44",
          bright: "#0B6E4F",
        },
        stamp: {
          DEFAULT: "#F2A93B",
          dark: "#C97F1E",
        },
        line: "#DEDCD0",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "dots": "radial-gradient(circle, #DEDCD0 1px, transparent 1px)",
      },
      backgroundSize: {
        "dots-sm": "10px 10px",
      },
      borderRadius: {
        card: "10px",
      },
    },
  },
  plugins: [],
};
