import express from 'express'
const router = express.Router()
import AuthRoutes from '@/routes/oauth/index.route'
router.use('/auth', AuthRoutes)
export default router
