  // tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            title: ["Nunito"],
            body: ["Open Sans"],
            "source-sans-pro": ["Source Sans Pro"],
        },
        extend: {
            width: {
              "1/7": "14.2857143%",
              "2/7": "28.5714286%",
              "3/7": "42.8571429%",
              "4/7": "57.1428571%",
              "5/7": "71.4285714%",
              "6/7": "85.7142857%",
            },
            colors: {
              'tint-color': "#52734d",
              'back-color': "#ffd56b",
              'back-button': '#ffcc29',
              'back-gray': '#f6f7f8',
              'color-button': '#91C788'
            },
        },
    },
    variants: {
        extend: {
          opacity: ['disabled'],
        },
    },
    plugins: [],
}