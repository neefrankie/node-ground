import { Router } from 'express';
import multer from 'multer'

const router = Router();
const upload = multer();

router.get('/', (req, res) => {
  res.render('login.html');
})

router.post('/', upload.none(), (req, res) => {
  console.log(req.body);
  
  res
    .cookie('access_token', 'Bearer 12345678', {
      expires: new Date(Date.now() + 8 * 3600000)
    })
    .cookie('email', req.body.email)
    .redirect(301, '/admin');
});

export default router;
