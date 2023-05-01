const express = require('express')
const cors = require('cors')
const { PrismaClient } = require("@prisma/client")

const app = express()
const prisma = new PrismaClient()
const PORT = 3000

const PAGE_RECORDS = 5

const corsOption = {
    origin: ['http://localhost:5173'],
}

app.use(cors(corsOption))

//http://localhost:3000/person_conditions?page=2

app.get('/persons', async (req, res) => {
    try {
        const page = req.query.page || 1
        const skip = (page - 1) * PAGE_RECORDS; // розрахунок кількості записів, які потрібно пропустити
        const persons = await prisma.person.findMany({
            skip,
            take: PAGE_RECORDS
        });
        res.json(persons)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

app.get('/person_conditions', async (req, res) => {
    try {
        const page = req.query.page || 1
        const skip = (page - 1) * PAGE_RECORDS; // розрахунок кількості записів, які потрібно пропустити
        const where = req.query.id ? { id_person: parseInt(req.query.id) } : {};
        // якщо передано id то шукати за цим id, а якщо ні, то робити селект всіх даних

        const person_conditions = await prisma.personCondition.findMany({
            skip,
            take: PAGE_RECORDS,
            where,
            include: {
                person: true,
                room: true,
                date_of_recording: true
            }
        });
        res.json(person_conditions)
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

app.post('/person_conditions', async (req, res) => {
    try {
        const { id_person, id_room, id_date, oxygen, heart_rate, body_temperature } = req.body;
        const is_critical_condition = isCriticalConditionPerson(body_temperature, oxygen, heart_rate);

        const newPersonCondition = await prisma.personCondition.create({
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
        console.log(newPersonCondition)
        res.json(newPersonCondition);
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

app.put('/person_conditions', async (req, res) => {
    try {
        const id = parseInt(req.query.id);
        const { oxygen, heart_rate, body_temperature } = req.body;
        const is_critical_condition = isCriticalConditionPerson(body_temperature, oxygen, heart_rate);
        //const where = req.query.id ? { id_person: parseInt(req.query.id) } : {};

        const updatedPersonCondition = await prisma.personCondition.update({
            where: { id },
            data: {
                oxygen,
                heart_rate,
                body_temperature,
                is_critical_condition,
            },
        });

        console.log(updatedPersonCondition);
        res.json(updatedPersonCondition);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
});


//http://localhost:3000/environment_conditions?page=2
app.get('/environment_conditions', async (req, res) => {
    try {
        const page = req.query.page || 1
        const skip = (page - 1) * PAGE_RECORDS; // розрахунок кількості записів, які потрібно пропустити
        const where = req.query.id ? { id_room: parseInt(req.query.id) } : {};
        // якщо передано id то шукати за цим id, а якщо ні, то робити селект всіх даних

        const environment_conditions = await prisma.environmentCondition.findMany({
            skip,
            take: PAGE_RECORDS,
            where,
            include: {
                room: true,
                date_of_recording: true
            }
        });
        res.json(environment_conditions)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

function isCriticalConditionEnvironment(humidity, air_temperature, air_pressure, nitrogen_content) {
    const is_humidity_critical = humidity > 37 || humidity < 36.3;
    const is_air_temperature_critical = air_temperature < 0.5;
    const is_air_pressure_critical = air_pressure < 40 || air_pressure > 120;
    const is_nitrogen_content_critical = nitrogen_content < 40 || nitrogen_content > 120;

    return is_humidity_critical || is_air_temperature_critical || is_air_pressure_critical || is_nitrogen_content_critical;
}
app.post('/environment_conditions', async (req, res) => {
    try {
        const { id_room, id_date, humidity, air_temperature, air_pressure, nitrogen_content } = req.body;
        const is_critical_condition = isCriticalConditionEnvironment(humidity, air_temperature, air_pressure, nitrogen_content);

        const newPersonCondition = await prisma.personCondition.create({
            data: {
                id_room,
                id_date,
                humidity,
                air_temperature,
                air_pressure,
                nitrogen_content,
                is_critical_condition,
                recorded_time: new Date()
            },
        })
        console.log(newPersonCondition)
        res.json(newPersonCondition);
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})



app.listen(PORT, () => {
    console.log('Server started on port 3000')
})