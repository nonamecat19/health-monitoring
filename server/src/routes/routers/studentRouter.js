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
    try {
        const {email} = req.data
        const user = await prisma.person.findFirst({
            where: {email}
        })
        res.send(user)
    } catch (error) {
        res.status(404).send('')
    }
})

router.get('/records', firebaseAuth, async (req, res) => {
    try {
        const {email} = req.data
        const user = await prisma.person.findFirst({
            where: {email}
        })
        const id_person = user.id_person
        const records = await prisma.person_records.findMany({
            where: {id_person}
        })
        res.send(records)
    } catch (error) {
        res.status(404).send('')
    }
})

module.exports = router