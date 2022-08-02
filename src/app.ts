import express from 'express';
import { configure } from 'nunjucks';
import { resolve } from 'path';

const app = express();
const port = 3000;

configure(
  [
    resolve(__dirname, "../views"), 
  ],
  {
    noCache: process.env.NODE_ENV === "development",
    watch: process.env.NODE_ENV === "development",
    express: app,
  }
);

app.use(express.static(resolve(__dirname, '../node_modules/bootstrap/dist/css')));

app.get('/', (req, res) => {
  res.render('index.html')
});

app.listen(port, () => {
  console.log(`Example app listening on oprt ${port}`);
});
