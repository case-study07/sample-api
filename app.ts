import express from 'express'
import 'reflect-metadata'
import { indexRouter } from './src/router'

var app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routing
app.use('/', indexRouter)

// Listen
app.listen(9000)
