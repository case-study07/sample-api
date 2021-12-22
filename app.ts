import express from 'express'
import 'reflect-metadata'
import { errorHandler, notFound } from './src/middleware/errorMiddleware'
import { photoRouter } from './src/router'

var app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routing
app.use('/photo', photoRouter)

//middleware
app.use(notFound);
app.use(errorHandler);

// Listen
const PORT = 9000
app.listen(PORT, () => {
  console.log(`Started Server on port ${PORT}`)
})
