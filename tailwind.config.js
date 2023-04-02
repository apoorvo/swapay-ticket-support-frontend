/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#8CE41D",
       'primary-light':"#B4F15F",
       'blue-violet':"#282C34",
       'accent':"#61DAFB",
       'open':"#ff7575",
       'closed':"#83ff5e",
       'in-progress':"#ffe65e",
       'code-review':"#5edeff",
      }
    },
  },
  safelist: [{
    pattern: /(bg|text|border)-(open|closed|in-progres|code-review)/
} ],
  plugins: [],
}

