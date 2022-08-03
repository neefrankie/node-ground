import express from 'express';
import { configure } from 'nunjucks';
import { resolve } from 'path';
import multer from 'multer';

const upload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, resolve(__dirname, '../build/'))
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  }),
});

const app = express();
const port = 3000;

// Configure nunjucks template engine.
configure(
  [
    resolve(__dirname, "../views"), // Tempalate search path
  ],
  {
    noCache: process.env.NODE_ENV === "development",
    watch: process.env.NODE_ENV === "development",
    express: app, // Set nunjucks as express template engine.
  }
);

// Serve static file for bootstrap from node_modules.
app.use(express.static(resolve(__dirname, '../node_modules/bootstrap/dist/css')));
app.use(express.static(resolve(__dirname, '../build')));

app.get('/', (req, res) => {
  res.render('index.html')
});

app.put('/upload', upload.single('apk'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.json({
    ok: true,
  })
});

app.listen(port, () => {
  console.log(`Example app listening on oprt ${port}`);
});
