/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // content: [
  //   "*",
  // ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD2A4',
        navbg: '#0D0D0D',
        navbtn: '#1C1D28',
        subheading: '#161722',
        serviceitembg: '#FFF5EB',
        watchbg: '#F5F2F0',
      },
      maxWidth: {
        'container': '1280px',
      },
      fontFamily: {
          robotocondenced: "Roboto Condensed, sans-serif",
      },
      backgroundImage: {
        'banner': "url('./assets/images/banner.jpg')",
        overlay: 'linear-gradient(40deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%);',
        textgradiant: "linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%);",
        visitbg: "url('./assets/images/visit.jpg')"
      },
      fontSize: {
        bannerheading: '64px',
      }
    },
  },
  plugins: [],
}

