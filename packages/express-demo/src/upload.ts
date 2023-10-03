import { Router } from 'express';
import multer from 'multer';
import { resolve } from 'path';

const router = Router();

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

router.get('/', (req, res) => {
  res.render('upload.html');
});

router.put('/', upload.single('apk'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.json({
    ok: true,
  });
});

export default router;
