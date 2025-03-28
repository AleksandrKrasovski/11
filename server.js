const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('public'))

app.get('/api/weather', (req, res) => {
  res.json({
    temperature: 26,
    status: 'cloudy'
  })
})

app.get('/api/currency', (req, res) => {
  res.json({
    USD: 26,
  })
})

app.get('/api/weather', (req, res) => {
  res.json({
    temperature: 26,
    status: 'cloudy'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})