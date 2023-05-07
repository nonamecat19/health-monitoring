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
const PAGE_LIMIT = 9;

// router.get("/", async (req, res) => {
//     try {
//         const page = req.query.page || 1
//         const skip = (page - 1) * PAGE_LIST;
//         const data = await prisma.person.findMany({
//             skip,
//             take: PAGE_LIST
//         });
//         res.json(data)
//     } catch (error) {
//         console.error(error)
//         res.status(500).json(error.message)
//     }
// })

router.get("/", async (req, res) => {
    try {
        const page =  req.query.page || null

        const maxId = await prisma.person.aggregate({
            _max: {
                id_person: true
            }
        });

        let cursor = maxId._max.id_person - PAGE_LIMIT * page

        const data = await prisma.person.findMany({
            cursor: cursor ? { id_person: cursor } : undefined,
            take: PAGE_LIMIT,
            orderBy: { id_person: "desc" }
        });
        const nextCursor = data[data.length - 1]?.id_person || null;
        res.json({ data, nextCursor });
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

router.get('/records', async (req, res) => {
    try {
        const page = req.query.page || 1
        const skip = (page - 1) * PAGE_RECORDS;

        const data = await prisma.person_records.findMany({
            skip,
            take: PAGE_RECORDS,
            include: {
                person: true,
                room: true
            }
        });
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

function isCriticalConditionPerson(body_temperature, oxygen, heart_rate) {
    const is_temperature_critical = body_temperature > 37 || body_temperature < 36.3;
    const is_oxygen_critical = oxygen < 0.5;
    const is_heart_rate_critical = heart_rate < 40 || heart_rate > 120;

    return is_temperature_critical || is_oxygen_critical || is_heart_rate_critical;
}

router.post('/records', async (req, res) => {
    try {
        const { id_person, id_room, id_date, oxygen, heart_rate, body_temperature } = req.body;
        const is_critical_condition = isCriticalConditionPerson(body_temperature, oxygen, heart_rate);

        const new_data = await prisma.person_records.create({
            data: {
                id_person,
                id_room,
                id_date,
                oxygen,
                heart_rate,
                body_temperature,
                is_critical_condition,
                recorded_time: new Date()
            },
        })
        console.log(new_data)
        res.json(new_data);
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

router.put('/records', async (req, res) => {
    try {
        const id = parseInt(req.query.id);
        const { oxygen, heart_rate, body_temperature } = req.body;
        const is_critical_condition = isCriticalConditionPerson(body_temperature, oxygen, heart_rate);
        //const where = req.query.id ? { id_person: parseInt(req.query.id) } : {};

        const edited_data = await prisma.person_records.update({
            where: { id },
            data: {
                oxygen,
                heart_rate,
                body_temperature,
                is_critical_condition,
            },
        });

        console.log(edited_data);
        res.json(edited_data);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
});


router.get('/records/:id', async (req, res) => {
    try {
        const page = req.query.page || 1
        const skip = (page - 1) * PAGE_RECORDS;
        const where = req.params.id ? { id_person: parseInt(req.params.id) } : {};
        // якщо передано id то шукати за цим id, а якщо ні, то робити селект всіх даних

        const data = await prisma.person_records.findMany({
            skip,
            take: PAGE_RECORDS,
            where,
            include: {
                person: true,
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
        const where = req.params.id ? { id_person: parseInt(req.params.id) } : {};
        // якщо передано id то шукати за цим id, а якщо ні, то робити селект всіх даних
        const data = await prisma.person.findMany({
            where
        });
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

module.exports = router