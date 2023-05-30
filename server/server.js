const express = require('express')
const cors = require('cors')
const mainRouter = require('./src/routes/mainRouter')

const app = express()
const PORT = 3000

const PAGE_RECORDS = 5

const corsOption = {
    origin: ['http://localhost:5173'],
}

app.use(cors(corsOption))
app.use(express.json())
app.use('/', mainRouter)

app.listen(PORT, () => {
    console.log('Server started on port 3000')
})
