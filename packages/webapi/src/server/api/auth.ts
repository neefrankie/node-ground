import { Router } from 'express';
import multer from 'multer'
import { User } from '../entity/User';

const router = Router();
const upload = multer();

router.post('/login', upload.none(), (req, res) => {
  console.log(req.body);
  const user = new User();
  
  res
    .cookie('id', user.id)
    .redirect(301, '/');
});

export default router;
