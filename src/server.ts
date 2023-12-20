import express from 'express'
import payload from 'payload'

const app = express()
require('dotenv').config()

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
  })

}

app.listen(3100, async () => {
  console.log(
    "Express is now listening for incoming connections on port 3100."
  )
})

start()

