import { defineConfig } from 'rollup';
import liverealod from 'rollup-plugin-livereload';
import typescript from '@rollup/plugin-typescript';
import terser from "@rollup/plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default defineConfig([
  {
    input: "./client/script/main.ts",
    output: {
      file: "./build/script/main.js",
      format: "iife",
      sourcemap: true,
    },
    plugins: [
      // When using this plugin, tsconfig.json cannot have this option:  
      // "outDir": "../build/ts-out"
      // See https://github.com/rollup/plugins/issues/287
      typescript({
        tsconfig: './client/tsconfig.json' // relative to process.cwd().
      }),
      !production && liverealod({
        // By default, it watches the current directory.
        watch:['client/script'],
      }),
      production && terser(),
    ],
  },
]);


