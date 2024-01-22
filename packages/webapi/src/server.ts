import express, { response } from 'express';
import { configure } from 'nunjucks';
import { resolve } from 'path';
import ws from 'ws';
import { homePageCtx } from './server/model/page';
import apiRouter from './server/api';
import { renderAppLogin } from './page/ssr';

const app = express();
const port = 3000;

// Configure nunjucks template engine.
configure(
  [
    resolve(__dirname, "views"), // Tempalate search path
  ],
  {
    noCache: process.env.NODE_ENV === "development",
    watch: process.env.NODE_ENV === "development",
    express: app, // Set nunjucks as express template engine.
  }
);

app.use(express.static(resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.render('index.html', homePageCtx);
});
app.get('/login', (req, res) => {
  res.render('login.html');
});
app.get('/upload', (req, res) => {
  res.render('upload.html');
});
app.get('/ssr', (req, res) => {
  renderAppLogin(res);
});
app.get('/mathjax', (req, res) => {
  res.render('mathjax.html', {title: 'MathJax Playground'})
});

app.use('/api', apiRouter);


const wsServer = new ws.Server({ noServer: true });

wsServer.on('connection', socket => {
  socket.on('error', console.error);

  socket.on('message', message => console.log(message));

  socket.send('something');
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, socket => {
    wsServer.emit('connection', socket, request);
  });
});
