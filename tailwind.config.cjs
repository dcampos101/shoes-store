/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}',
          './pages/**/*.jsx',
        './components/**/*.jsx',
  ],
  theme: {
    extend: {    
      fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },},
        screens: {
      'xl': {'max': '1200px'},
      'lg': {'max': '991px'},
      'md': {'max': '767px'},
      'sm': {'max': '550px'},
      'xsm': {'max': '375px'},
    },
  },
  plugins: [],
};
