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
        const page = req.query.page || 1
        const skip = (page - 1) * PAGE_LIST;
        const data = await prisma.room.findMany({
            skip,
            take: PAGE_LIST
        });
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

router.get('/records', async (req, res) => {
    try {
        const page = req.query.page || 1
        const skip = (page - 1) * PAGE_RECORDS;

        const data = await prisma.room_records.findMany({
            skip,
            take: PAGE_RECORDS,
            include: {
                room: true,
            }
        });
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
        const skip = (page - 1) * PAGE_RECORDS;
        const where = req.params.id ? { room_number: req.params.id } : {};
        // якщо передано id то шукати за цим id, а якщо ні, то робити селект всіх даних

        const data = await prisma.room_records.findMany({
            skip,
            take: PAGE_RECORDS,
            where,
            include: {
                room: true
            }
        });
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const where = req.params.id ? { room_number: req.params.id } : {};
        // якщо передано id то шукати за цим id, а якщо ні, то робити селект всіх даних
        const data = await prisma.room.findMany({
            where
        });
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

module.exports = router