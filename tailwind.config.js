module.exports = {
   // mode: 'jit',
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      container: {
         center: true,
         padding: {
            DEFAULT: '0 1rem',
            sm: '0 2rem',
            lg: '0 4rem',
            xl: '0 5rem',
            '2xl': '0 6rem',
         },
      },
      extend: {
         colors: {
            googleBlue: '#4285F4',
          }
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
