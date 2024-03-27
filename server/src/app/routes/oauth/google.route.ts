import { Router } from 'express';
const router = Router();
import passport from 'passport';

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

export default router;
