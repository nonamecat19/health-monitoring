const express = require("express")
const cors = require('cors')
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const auth = require('../../middleware/auth')
const isCriticalConditionPerson = require("../../utils/isCriticalCondition");
const {PAGE_LIST, PAGE_RECORDS} = require("../../config/consts");
const corsOption = {
    origin: ['http://localhost:5173'],
}
const router = express.Router()
router.use(cors(corsOption))

router.get("/", auth, async (req, res) => {
    try {
        const page = req.query.page - 1 || 0

        const search = req.query.search || ''

        let maxId = await prisma.person.aggregate({
            _max: {
                id_person: true
            }
        })

        let cursor = maxId._max.id_person - PAGE_LIST * page

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
            skip: page * PAGE_LIST,
            take: PAGE_LIST,
            orderBy: {
                id_person: "desc"
            },
            where: params
        })

        const totalCount = await prisma.person.count({
            where: params
        })

        let maxPage = Math.ceil(totalCount / PAGE_LIST)

        res.json({data, maxPage});
    } catch (error) {
        console.log({error: error.message})
        res.status(500).json(error.message)
    }
})

router.get('/dashboard', auth, async (req, res) => {
    try {
        const day = +req.query.day
        const month = +req.query.month
        const year = +req.query.year
        const id = +req.query.id

        const where = {
            recorded_date: new Date(year, month - 1, day + 1)
        }
        if (id) {
            where.id_person = id
        }

        const data = await prisma.person_records.findMany({
            where,
            include: {
                person: true,
            }
        })

        res.status(200).json(data)

    } catch (error) {
        console.log({error: error.message})
        res.send(error.message)
    }
})

router.get('/records', auth, async (req, res) => {
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
        console.log({error: error.message})
        res.status(500).json(error.message)
    }
})


router.post('/records', auth, async (req, res) => {
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
        console.log({error: error.message})
        res.status(500).json(error.message)
    }
})

router.put('/records',async (req, res) => {
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
        console.log({error: error.message})
        res.status(500).json(error.message);
    }
});


router.get('/records/:id', auth, async (req, res) => {
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
        console.log({error: error.message})
        res.status(500).json(error.message)
    }
})

router.get("/:id", auth, async (req, res) => {
    try {
        const where = req.params.id ? {id_person: parseInt(req.params.id)} : {};
        const data = await prisma.person.findMany({where});
        res.json(data)
    } catch (error) {
        console.log({error: error.message})
        res.status(500).json(error.message)
    }
})

module.exports = router