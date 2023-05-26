/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      white:"#ffffff",
      blue:{
        10:"#025efe",
        20:"#eff5f9",
        30:"#1e2a53",
        40:"#afcbe1",
        50:"#333c5d",
        60:"#afb1c0",
        70:"#f0f5ff",
        80:"#eff5f9",
        90:"#e7ebef",
        100:"#e0e5ee"
      }
    },
    fontSize: {
      lg:["22px", "37.4px"],
      '2md':["16px", "24px"],
      'md':["14px", "24px"],
      'sm':["12px", "24px"]
    },
    extend: {},
  },
  plugins: [],
}

