const express = require('express')
const cors = require('cors')
const { PrismaClient } = require("@prisma/client")
const mainRouter = require('./src/routes/mainRouter')
const cookieSession = require('express-session')
const passport = require('passport')
const passportSetup = require('./src/config/passport')

const app = express()
const prisma = new PrismaClient()
const PORT = 3000

const PAGE_RECORDS = 5

const corsOption = {
    origin: ['http://localhost:5173'],
}

app.use(express.urlencoded({ extended: true }));

app.use(
    cookieSession({
        secret: 'secret_key',
        resave: false,
        saveUninitialized: false
    })
)

app.use(passport.initialize())
app.use(passport.session())
app.use(cors(corsOption))
app.use(express.json())
app.use('/', mainRouter)


//http://localhost:3000/environment_conditions?page=2
app.get('/room_records', async (req, res) => {
    try {
        const page = req.query.page || 1
        const skip = (page - 1) * PAGE_RECORDS;
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
app.post('/room_records', async (req, res) => {
    if (!req.body) {
        console.log(req.body)
        //res.status(400).send();
    }
    try {
        const { id_room, id_date, humidity, air_temperature, air_pressure, nitrogen_content } = req.body;
        const is_critical_condition = isCriticalConditionEnvironment(humidity, air_temperature, air_pressure, nitrogen_content);

        const newEnvironmentCondition = await prisma.environmentCondition.create({
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
        console.log(newEnvironmentCondition)
        res.json(newEnvironmentCondition);
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

app.put('/room_records', async (req, res) => {
    try {
        const id = parseInt(req.query.id);
        const { humidity, air_temperature, air_pressure, nitrogen_content} = req.body;
        const is_critical_condition = isCriticalConditionEnvironment(humidity, air_temperature, air_pressure, nitrogen_content);
        //const where = req.query.id ? { id_person: parseInt(req.query.id) } : {};

        const updatedEnvironmentCondition = await prisma.personCondition.update({
            where: { id },
            data: {
                humidity,
                air_temperature,
                air_pressure,
                nitrogen_content,
                is_critical_condition
            },
        });

        console.log(updatedEnvironmentCondition);
        res.json(updatedEnvironmentCondition);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
})

app.listen(PORT, () => {
    console.log('Server started on port 3000')
})
