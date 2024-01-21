# TypeORM Cheatsheet

## Install

```sh
pnpm add typeorm reflect-metadata mysql2
pnpm add -D @types/node
```

Import `reflect-metadata` in the global place of your app, for exmaple in `app.ts`:

```ts
import "reflect-metadata"
```

TypeScript configuration should enable the following settings:

```json
{
    "compilerOpitons": {
        "lib": [
            "es6"
        ],
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true
    }
}
```

Use CLI to generate a starter project:

```sh
npx typeorm init --name MyProject --database mysql
```

Or run `typeorm init` on an existing project -- it may override some files you already have.

Edit `data-source.ts` and put your own database configuration.

Run `npm start`.

## Create Models

Database tables are created from your models. Only those you define as entities.

Entity is the model decorated by an `@Entity` decorator. A table will be created for such modles.

To add database columns, decorate an entity's properties with a `@Column` decorator. Column types are inferred from the property types you used:

* number -> integer
* string -> varchar
* boolean -> bool

You can explicitly specify a column type into the `@Column` decorator.

## Primary Column

To make a column a primary key, use the `@PrimaryColumn` decorator.

```ts
@Entity()
class Photo {
    @PrimaryColumn()
    id: number;
}
```

To create an auto-generated column, change `@PrimaryColumn` decorator to a `@PrimaryGeneratedColumn` decorator.

```ts
@PrimaryGeneratedColumn()
id: number;
```

## Column data types

## Repositories

Each entiry has itw own repository which handles all operations with its entity.
