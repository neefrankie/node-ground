# A Node.js and frontend playground

This is monorepo consists of:

* auth-vue: a Vue.js app for authentication;
* build-your-react: demonstrate how to build react from scratch
* hello-js-react: demonstrate how to build React written in JS using webpack;
* hello-ts-react: demonstrate how to build React written in TS using webpack;
* rollup-demo: demonstrate how to configure rollup;
* server: a simple express app.
* svelte-demo: a svelte app demo.

## Editor Setup

This project uses yarn 2, which no longer depends on npm_modules directory. Dependencies are saved in `.yarn/cache` directory as zip files. You editor might not work with it without proper configuration.

For VSCode, install `ZipFS` plugin. Then open any of the typescript file and press `ctrl+shift+p`, choose `Select Typescript Version` and then pick `Use Workspace Version`. For further reference see [Editor SDKs](https://yarnpkg.com/getting-started/editor-sdks).

Do not remove files in `.yarn/plugins/@yarnpkg` and `.yarn/sdks`. They enable editor integration and should be commited to git.

## Frontend Tooling

A compiler performs parsing of the source codes, generates abstract syntax tree and transforms the code into another representation.

A bundler links multiple files into a single one.

This project demonstrate 3 sets of tooling for bundling and transpiling:

* rollup + tsc
* esbuild
* spack + swc

Alternatively you can use rollup + babel + preset-typescript to replace the first group.

### Compiler

* Typescript compiler
* Babel
* swc
* esbuild

### Bundler

* webpack
* rollup
* spack
* esbuild

### Minification

* terser
* esbuild
