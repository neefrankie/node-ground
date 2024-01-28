const postCssPresetEnv = require('postcss-preset-env');

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    /* other plugins */
		/* remove autoprefixer if you had it here, it's part of postcss-preset-env */
    postCssPresetEnv()
  ]
}
