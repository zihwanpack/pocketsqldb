/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundImage: {
      main: "url('/Cute Pokemon Backgrounds.jpeg')",
    },
    extend: {
      fontFamily: {
        serif: ['Noto Serif KR', 'serif'],
      },
    },
    colors: {
      bgColor: '#f5f5f5',
      navyBlue: '#2C3E50',
      headerMint: 'rgba(26, 188, 156, 0.5)',
      textColor: '#333333',
      pink: 'rgba(255, 105, 180, 0.6)',
    },
  },
  plugins: [],
};
