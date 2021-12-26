import express, { ErrorRequestHandler } from 'express'
import morgan from 'morgan'

import './db'
import characterRoutes from './routes/characters.routes'
import ApiError from './errors/ApiError'

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(express.json())

app.use('/characters', characterRoutes)

app.use((req, res, next) => {
  const error = new ApiError(404, 'Api not available')

  next(error)
})

app.use(((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      message: err.message,
      status: err.status,
    },
  })

  next(err)
}) as ErrorRequestHandler)

app.listen(port, () => {
  console.log(`Creatory game api listening at http://localhost:${port}`)
})
