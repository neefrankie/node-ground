import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default defineConfig([
  {
    input: "./script/main.ts",
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
        tsconfig: './tsconfig.json' // relative to process.cwd().
      }),
      production && terser(),
    ],
  },
]);


