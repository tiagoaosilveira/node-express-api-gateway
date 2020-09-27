const express = require('express')
const app = express()
const port = 3000

app.get('/about', (req, res) => {
  res.send('Be yourself, is all that you can do...')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})