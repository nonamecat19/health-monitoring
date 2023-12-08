const express = require('express')
const cors = require('cors')
const mainRouter = require('./src/routes/mainRouter')

const app = express()
const PORT = 4000

const corsOption = {
    origin: ['http://localhost:5173'],
}

app.use(cors(corsOption))
app.use(express.json())
app.use('/', mainRouter)

app.listen(PORT, '192.168.31.226',() => {
    console.log('Server started on port 4000')
})
