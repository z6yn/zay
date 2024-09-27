module.exports = {
  content: [
    './index.html',
    './images/airzy.jpg', // Include all HTML files in the public folder
    './src/tailwind.config.js',
    './src/postcss.config.js',
    './src/styles.css',        // Include all JS files in the src folder (optional if you use JS with Tailwind)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
