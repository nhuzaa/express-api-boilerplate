import { Router } from 'express';
import * as services from './services';
import * as validators from './validators';

let router = Router();

router.post('/login', validators.login, (req, res, next) => {
  const { user } = req.body;

  services
    .login(user)
    .then(data => res.json(data))
    .catch(err => next(err));
});

router.get('/logout', (req, res, next) => {
  res.json({ message: services.logout() });
});

export default router;
