const express = require("express")
const cors = require('cors')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const corsOption = {
    origin: ['http://localhost:5173'],
}
const router = express.Router()
router.use(cors(corsOption))

const PAGE_RECORDS = 24
const PAGE_LIST = 48

router.get("/", async (req, res) => {
    try {
        const data = await prisma.room.findMany()
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

router.get('/records', async (req, res) => {
    try {
        const page = req.query.page || 1
        const skip = (page - 1) * PAGE_RECORDS
        const onlyCritical = req.query.onlyCritical === 'true' ?? false

        let where = {}

        if (onlyCritical) {
            where.is_critical_results = true
        }

        const data = await prisma.room_records.findMany({
            skip,
            take: PAGE_RECORDS,
            where,
            include: {
                room: true,
            }
        })

        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})


// записи по людині
router.get('/records/:id', async (req, res) => {
    try {
        const page = req.query.page || 1
        const skip = (page - 1) * PAGE_RECORDS
        const onlyCritical = req.query.onlyCritical === 'true' ?? false

        const where = { room_number: req.params.id }


        if (onlyCritical) {
            where.is_critical_results = true
        }

        const data = await prisma.room_records.findMany({
            skip,
            take: PAGE_RECORDS,
            where,
            include: {
                room: true
            }
        })
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const where = { room_number: req.params.id }
        const data = await prisma.room.findMany({
            where
        })
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

module.exports = router