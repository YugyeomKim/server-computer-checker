const express = require('express')

const app = express()

app.get('/health-check', (req, res) => {
  console.log("I'm healthy father!");
  res.send("I'm alive father!")
})

app.use('/', (req, res) => {
  console.log("Something is coming... I'm so scared papa...");
  res.send("I'm here father!")
})

app.listen(3001, () => {
  console.log("I'm listening on port 3001 father!");
})