import { Router } from 'express';
import multer from 'multer'
import { User } from '../entity/User';
import { userStore } from './store';
import { Credentials, SignupParams } from '../model/form-data';

const router = Router();
const upload = multer();

router.post('/login', upload.none(), (req, res) => {
  console.log(req.body);
  const credentials: Credentials = req.body;

  const user = userStore.findByEmail(credentials.email);

  if (!user) {
    // TODO: handle error
    return;
  }
  
  const ok = user.isPasswordMatched(credentials.password);
  if (!ok) {
    // TODO: handle error
    return;
  }

  res
    .cookie('id', user.id)
    .redirect(301, '/');
});

router.post('/signup', (req, res) => {
  async function singup() {
    const params: SignupParams = req.body;

    if (params.password != params.confirmPassword) {
      // TODO: handle errors
      return;
    }

    const user = await (new User()).withCredentials(params);

    userStore.add(user);

    res.cookie('id', user.id)
      .redirect(301, '/');
  };
  
  singup();
});

export default router;
