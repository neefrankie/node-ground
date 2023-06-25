import liverealod from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'client/main.js',
  output: {
    file: 'build/bundle.js',
    format: 'iife',
    
  },
  plugins: [
    babel(),
    serve({
      contentBase: ['public', 'build']
    }),
    liverealod({
      // By default, it watches the current directory.
      watch:['public', 'build'],
    }),
  ]
};
