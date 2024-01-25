# Express Static Files

```js
app.use(express.static('public'))
```

The name of the static directory is not part of the URL.

To sue multiple static directories, call `express.static` multiple times.

```js
app.use(express.static('public'));
app.use(express.static('files'));
```

Express looks up files in the order in which you set the static directories.

To create a virtual path prefix, specify a mount path:

```js
app.use('/static', express.static('public'));
```

Load the files in the public directory from the `/static` path prefix:

```
http://localhost:3000/static/images/kitten.jpg
```

The path passed to `express.static` is relative to the directory from where you launch the node process.

## Options

```js
express.static(root, [options])
```

* `dotfiles: string`. Default `ignore`.
* `etag: boolean`. Default `true`.
* `extensions`
