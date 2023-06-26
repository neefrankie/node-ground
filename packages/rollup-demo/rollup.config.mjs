import liverealod from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import { babel } from '@rollup/plugin-babel';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'client/main.js',
  output: {
    file: 'build/bundle.js',
    format: 'iife',
    
  },
  plugins: [
    babel({
      babelHelpers: 'bundled'
    }),
    !production && serve({
      contentBase: ['public', 'build']
    }),
    !production && liverealod({
      // By default, it watches the current directory.
      watch:['public', 'build'],
    }),
  ]
};
