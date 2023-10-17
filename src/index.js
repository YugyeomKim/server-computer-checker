const express = require('express')

const app = express()

app.use('/', (req, res) => {
  res.send("I'm here father!")
})

app.listen(3001, () => {
  console.log("I'm listening on port 3001 father!");
})