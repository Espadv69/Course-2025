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

const cleanUp = () => {
  console.log('\n🔻 Closing server...')

  try {
    server.closeAllConnections()
    console.log('🗑️ Connection closed.')
  } catch (err) {
    console.error('❌ Error closing connection:', err)
  }

  server.close(() => {
    console.log('🔒 Server closed.')
    process.exit(0)
  })
}

process.on('SIGINT', cleanUp) // Ctrl + C
process.on('SIGTERM', cleanUp)
