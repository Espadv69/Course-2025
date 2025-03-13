const express = require('express')
const cors = require('cors')
const audi = require('./data/data.js')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 5000

app.get('/', async (req, res) => {
  res.send('Hello World!')
})

app.get('/api/audi', async (req, res) => {
  res.json(audi)
})

const server = app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
