import { Application, urlencoded, json } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import ExpressSession from 'express-session'
import passportConfig from '@/utils/passport'
export default function GlobalUse(app: Application) {
    app.use(json())
    app.use(helmet())
    app.use(
        urlencoded({
            extended: true
        })
    )
    app.use(
        cors({
            origin: 'http://localhost:5173',
            credentials: true
        })
    )
    app.use(morgan('dev'))
    app.use(
        ExpressSession({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 1000 * 60 * 60 // 1 hour
            }
        })
    )
    app.use(passportConfig().session())

    app.use(passportConfig().initialize())
}
