import { Router } from 'express';
import multer from 'multer'
import bodyParser from 'body-parser';
import { User } from '../entity/User';
import { userStore } from './store';
import { Credentials, SignupParams } from '../model/form-data';
import { ResponseError } from './response-error';

const router = Router();
const upload = multer();

router.use(bodyParser.json());

router.post('/login', (req, res) => {
  console.log(req.body);
  const credentials: Credentials = req.body;

  const user = userStore.findByEmail(credentials.email);

  if (!user) {
    throw ResponseError.fobidden('user not found');
  }
  
  const ok = user.isPasswordMatched(credentials.password);
  if (!ok) {
    throw ResponseError.fobidden('passwod not matched')
  }

  res
    .cookie('id', user.id)
    .redirect(301, '/');
});

router.post('/signup', (req, res, next) => {
  async function singup() {
    const params: SignupParams = req.body;

    console.log(params);

    if (params.password != params.confirmPassword) {
      throw ResponseError.badRequest('passwords mismatched!')
    }

    const user = await (new User()).withCredentials(params);

    userStore.add(user);

    res.cookie('id', user.id)
      .redirect(301, '/');
  };
  
  singup().catch(next);
});

export default router;
