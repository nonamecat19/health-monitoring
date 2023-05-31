const express = require("express")
const cors = require('cors')
const { PrismaClient } = require("@prisma/client")
const auth = require("../../middleware/auth");
const {PAGE_RECORDS} = require("../../config/consts");
const prisma = new PrismaClient()
const corsOption = {
    origin: ['http://localhost:5173'],
}
const router = express.Router()
router.use(cors(corsOption))

router.get("/", auth, async (req, res) => {
    try {
        const data = await prisma.room.findMany()
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

router.get('/dashboard', auth, async (req, res) => {
    try {
        const day = +req.query.day
        const month = +req.query.month
        const year = +req.query.year
        const id = req.query.id

        const where = {
            recorded_date: new Date(year, month - 1, day + 1),
        }

        if (id) {
            where.room_number = id
        }

        const data = await prisma.room_records.findMany({
            where,
            include: {
                room: true,
            }
        })

        res.status(200).json(data)

    } catch (error) {
        res.send(error.message)
    }
})

router.get('/records', auth, async (req, res) => {
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

router.get('/records/:id', auth, async (req, res) => {
    try {
        const page = req.query.page || 1
        const skip = (page - 1) * PAGE_RECORDS
        const onlyCritical = req.query.onlyCritical === 'true' ?? false
        const where = {
            room_number: req.params.id
        }
        const include = {
            room: true
        }
        const take = PAGE_RECORDS
        if (onlyCritical) {
            where.is_critical_results = true
        }

        const data = await prisma.room_records.findMany({
            skip, take, where, include
        })
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

router.get("/:id", auth, async (req, res) => {
    try {
        const where = { room_number: req.params.id }
        const data = await prisma.room.findMany({where})
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

module.exports = router