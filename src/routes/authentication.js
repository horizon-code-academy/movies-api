import { verifyRegister, requireAuth } from '../config/passport';
import { logIn, logOut } from '../controllers/authentication';

export default function(router) {
  router.post('/login', verifyRegister, logIn);
  router.get('/logout', requireAuth, logOut);
}