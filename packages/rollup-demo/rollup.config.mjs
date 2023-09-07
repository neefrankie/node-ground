import liverealod from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import { babel } from '@rollup/plugin-babel';
// import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: [
    'client/scripts/animate.js', 
    'client/scripts/transition.js',
    'client/scripts/html-element.js',
    'client/scripts/canvas.js',
    'client/scripts/webgl.js',
  ],
  output: {
    // file: 'build/bundle.js',
    // format: 'iife',
    dir: 'build/scripts',
    entryFileNames: '[name].js'
  },
  plugins: [
    // babel({
    //   babelHelpers: 'bundled'
    // }),
    // postcss({
    //   plugins: [
    //     production && cssnano({
    //       preset: 'default'
    //     })
    //   ],
    //   extract: true,
    // }),
    !production && serve({
      contentBase: ['public', 'build']
    }),
    !production && liverealod({
      // By default, it watches the current directory.
      watch:['public', 'build/**'],
    }),
  ]
};
