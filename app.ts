import express from 'express'
import 'reflect-metadata'
import { indexRouter } from './src/router/index'
import { notFound, errorHandler} from './src/middleware/errorMiddleware'

var app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routing
app.use('/', indexRouter)
app.use(notFound)
app.use(errorHandler)

// Listen
const PORT = 9000
app.listen(PORT, () => {
  console.log(`Started Server on port ${PORT}`)
})
