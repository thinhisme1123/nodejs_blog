const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Worldasdsd!')
})

app.listen(port, () => {
  console.log(`Example app listening on port https://localhost:${port}`)
})