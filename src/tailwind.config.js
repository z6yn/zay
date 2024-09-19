module.exports = {
  content: [
    './index.html', // Include all HTML files in the public folder
    './src/tailwind.config.js',
    './src/postcss.config.js',        // Include all JS files in the src folder (optional if you use JS with Tailwind)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
