console.clear()
import 'module-alias/register'
import app from '~/app'
const { PORT, BASE } = process.env
app.listen(PORT, () => {
    console.log(`App listening on ${BASE}:${PORT}`)
})
