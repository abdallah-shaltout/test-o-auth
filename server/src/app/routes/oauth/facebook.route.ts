import { Router } from 'express';
const router = Router();
import passport from 'passport';

router.get('/facebook', passport.authenticate('facebook'));

export default router;
