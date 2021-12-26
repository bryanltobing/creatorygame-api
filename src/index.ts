import express from 'express'
import morgan from 'morgan'

import './db/db'

import characterRoutes from './routes/characters.routes'

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(express.json())

app.use('/characters', characterRoutes)

app.listen(port, () => {
  console.log(`Creatory game api listening at http://localhost:${port}`)
})
