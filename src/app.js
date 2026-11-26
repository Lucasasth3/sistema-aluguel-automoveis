import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import inicioRoutes from './routes/inicio.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const app = express()

app.disable('x-powered-by')
app.set('view engine', 'ejs')
app.set('views', path.join(root, 'src', 'views'))
app.use(express.static(path.join(root, 'public')))
app.use(inicioRoutes)

app.use((_req, res) => {
  res.status(404).send('Página não encontrada.')
})

export default app
