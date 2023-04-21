import { createServer } from 'http';
import { join, extname } from 'path';
import { access } from 'fs/promises';
import { createReadStream } from 'fs';

const PORT = 8000;

type MIME = {
  default: string;
  [index: string]: string;
}
const MIME_TYPES: MIME = {
  default: 'application/octet-stream',
  html: 'text/html; charset=UTF-8',
  js: 'application/javascript',
  css: 'text/css',
  png: 'image/png',
  jpg: 'image/jpg',
  gif: 'image/gif',
  ico: 'image/x-icon',
  svg: 'image/svg+xml',
};

const STATIC_PATH = join(process.cwd(), './');

const toBool = [() => true, () => false];

async function prepareFile(url: string) {
  const paths = [STATIC_PATH, url];
  if (url.endsWith('/')) {
    paths.push('index.html');
  }

  const filePath = join(...paths);
  const pathTraversal = !filePath.startsWith(STATIC_PATH);
  const exists = await access(filePath).then(...toBool);
  const found = !pathTraversal && exists;
  const streamPath = found ? filePath : STATIC_PATH + '/404.html';
  const ext = extname(streamPath).substring(1).toLowerCase();
  const stream = createReadStream(streamPath);
  return {
    found,
    ext,
    stream,
  };
}

createServer(async (req, res) => {
  const file = await prepareFile(req.url || '/');
  const statusCode = file.found ? 200 : 400;
  const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
  res.writeHead(statusCode, { 'Content-Type': mimeType });
  file.stream.pipe(res);
  console.log(`${req.method} ${req.url} ${statusCode}`)
})
  .listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
