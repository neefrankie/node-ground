const postCssPresetEnv = require('postcss-preset-env');
const tailwindcss = require('tailwindcss');

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    tailwindcss(),
    /* other plugins */
		/* remove autoprefixer if you had it here, it's part of postcss-preset-env */
    postCssPresetEnv()
  ]
}
