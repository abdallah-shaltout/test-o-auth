import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import appRoutes from '~/config/routes'
import GlobalUse from '~/config/GlobalUse'
const app: Application = express()

dotenv.config({
    path: 'config.env'
})

GlobalUse(app)
app.use('/', appRoutes)
app.get('/', (_req: Request, res: Response) => {
    console.log(_req.user)
    res.send('Server Home Page Name')
})

export default app
