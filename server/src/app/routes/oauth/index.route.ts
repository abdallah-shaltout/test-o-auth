import { Router, Request, Response } from 'express'
const router = Router()
import passport = require('passport')
import GoogleRotue from './google.route'
import FacebookRoute from './facebook.route'
router.get('/google/callback', passport.authenticate('google'), (req: Request, res: Response) => {
    return res.json(
        req.user || {
            msg: 'no user in session'
        }
    )
})
router.get(
    '/facebook/callback',
    passport.authenticate('facebook'),
    (req: Request, res: Response) => {
        return res.json(
            req.user || {
                msg: 'no user in session'
            }
        )
        // return res.redirect(process.env.ClientRedirectUrl);
    }
)

router.get('/logout', (req, res) => {
    req.logout({ keepSessionInfo: false }, (err) => {
        if (err) return res.sendStatus(500)
        return
    })

    return res.sendStatus(200)
})

router.get('/profile', (req, res) => {
    if (!req.user) return res.sendStatus(401)
    return res.json(req.user)
})

router.use('/', GoogleRotue)
router.use('/', FacebookRoute)
export default router
