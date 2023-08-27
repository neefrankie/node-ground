import { Router } from 'express';
import multer from 'multer';

const router = Router();
const upload = multer();


router.get('/', (req, res) => {
  res.send({
    name: '/api',
    description: 'Hello, this is app api',
  });
});

router.post('/login', upload.none(), (req, res) => {
  console.log(req.body);
  
  res
    .cookie('access_token', 'Bearer 12345678', {
      expires: new Date(Date.now() + 8 * 3600000)
    })
    .cookie('email', req.body.email)
    .redirect(301, '/admin');
});

export default router;
