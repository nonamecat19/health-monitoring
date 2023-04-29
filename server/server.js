const express = require('express')
const cors = require('cors');

const app = express()

const corsOption = {
    origin: ['http://localhost:5173'],
};

app.use(cors(corsOption));


app.get('/test', (req, res) => {
    res.json('test')
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})