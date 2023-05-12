const express = require("express")
const cors = require('cors')
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const corsOption = {
    origin: ['http://localhost:5173'],
}
const router = express.Router()
router.use(cors(corsOption))

const PAGE_RECORDS = 24
const PAGE_LIST = 48
const PAGE_LIMIT = 9

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
        const page = req.query.page - 1 || 0

        const search = req.query.search || ''

        let maxId = await prisma.person.aggregate({
            _max: {
                id_person: true
            }
        })

        let cursor = maxId._max.id_person - PAGE_LIMIT * page

        const params = {
            OR: [
                {
                    name_person: {
                        contains: search,
                        mode: 'insensitive',
                    }
                },
                {
                    study_group: {
                        contains: search,
                        mode: 'insensitive',
                    }
                }
            ]
        }

        const data = await prisma.person.findMany({
            // cursor:
            //     cursor
            //         ? {id_person: cursor}
            //         : undefined,
            skip: page * PAGE_LIMIT,
            take: PAGE_LIMIT,
            orderBy: {
                id_person: "desc"
            },
            where: params
        })

        const totalCount = await prisma.person.count({
            where: params
        })

        let maxPage = Math.ceil(totalCount / PAGE_LIMIT)

        res.json({data, maxPage});
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

        let whereParams = {}

        if (onlyCritical) {
            whereParams.is_critical_results = true
        }

        const data = await prisma.person_records.findMany({
            skip,
            take: PAGE_RECORDS,
            where: whereParams,
            include: {
                person: true, room: true
            }
        })
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
        const {id_person, id_room, id_date, oxygen, heart_rate, body_temperature} = req.body;
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
        const {oxygen, heart_rate, body_temperature} = req.body;
        const is_critical_condition = isCriticalConditionPerson(body_temperature, oxygen, heart_rate);

        const edited_data = await prisma.person_records.update({
            where: {id},
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
        const skip = (page - 1) * PAGE_RECORDS
        const onlyCritical = req.query.onlyCritical === 'true' ?? false

        const where = req.params.id ? {id_person: parseInt(req.params.id)} : {};

        if (onlyCritical) {
            where.is_critical_results = true
        }

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
        const where = req.params.id ? {id_person: parseInt(req.params.id)} : {};
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