import express from 'express'
import 'reflect-metadata'
import { photoRouter } from './src/router'

var app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routing
app.use('/photo', photoRouter)

// Listen
const PORT = 9000
app.listen(PORT, () => {
  console.log(`Started Server on port ${PORT}`)
})
