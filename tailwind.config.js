export const content = ["./src/**/*.{js,jsx,ts,tsx}"];

export const theme = {
  extend: {
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      blink: {
        "0%, 100%": { color: "#5ddb41" },
        "50%": { color: "white" },
      },
    },
    animation: {
      fadeIn: "fadeIn 1s ease-out forwards",
      fadeBlink: "fadeIn 1s ease-out forwards, blink 0.3s 1s 3",
    },
  },
};
export const plugins = [];
