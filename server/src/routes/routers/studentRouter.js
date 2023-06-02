const express = require("express")
const cors = require('cors')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const firebaseAuth = require('../../middleware/firebaseAuth')
const corsOption = {
    origin: ['http://localhost:5173'],
}
const router = express.Router()
router.use(cors(corsOption))


router.get('/me', firebaseAuth, async (req, res) => {
    const {email} = req.data
    console.log(req.data)
    console.log(req.data.firebase)
    res.send({name, email})
})

router.get('/records', firebaseAuth, async (req, res) => {
    const {name, email} = req.data
    res.send({name, email})
})

module.exports = router