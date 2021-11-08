import express from 'express'
import 'reflect-metadata'

var app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routing

// Listen
app.listen(9000)
