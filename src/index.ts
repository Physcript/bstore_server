
import cookieParser from "cookie-parser"
import config from './config'
import cors from "cors"
import express from "express"
import mongoose from "mongoose"

import { createServer } from "http"

// const
const app = express()
const httpServer = createServer(app)
const corsOption = { origin: "http://localhost:3000", credential: true }

// use
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOption))
app.use(cookieParser())


// cors
require('./config/_cors')(app)
// middleware
require('./config/_middleware')(app)
// io
require('./config/_io')(httpServer)
// route
require('./config/_route')(app)

mongoose
  .connect(`${config.database.url}`, config.database.options)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err))

httpServer.listen(config.server.port, () => {
  console.log('Server connected')
})
