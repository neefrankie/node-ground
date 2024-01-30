# Module

## Exaport

Any file containing a top-level `import` or `export` is considered a module.

A file without any top-level `import` or `export` declarations is treated as a script.

## Exporting a declaration

```ts
export interface StringValidator {
    isAcceptable(s: string): boolean;
}
```

## Export statements

```ts
export { ZipCodeValidator as mainValidator }
```

## Re-exports

```ts
export { ZipCodeValidator } from './ZipCodeValidator';
```
