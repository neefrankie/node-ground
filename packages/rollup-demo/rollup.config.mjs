import liverealod from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

export default {
  input: 'client/main.js',
  output: {
    file: 'build/bundle.js',
    format: 'iife'
  },
  plugins: [
    serve({
      contentBase: ['public', 'build']
    }),
    liverealod({
      // By default, it watches the current directory.
      watch:['public', 'build'],
    }),
  ]
};
