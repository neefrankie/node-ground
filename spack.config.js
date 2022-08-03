const { config } = require('@swc/core/spack');
const { resolve } = require('path');

module.exports = config({
  entry: {
    main: resolve(__dirname, 'client/script/main.ts')
  },
  output: {
    path: resolve(__dirname, 'build/script'),
  }
});
