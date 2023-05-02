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

app.get('/test/environment_conditions', async (req, res) => {
    try {
        const page = req.query.page
        let data = []
        if (page === '1') {
            data = [
                {
                    "id_environment_condition": 1,
                    "id_room": 1,
                    "id_date": 1,
                    "humidity": 50.3,
                    "air_temperature": 22.1,
                    "air_pressure": 1013.2,
                    "nitrogen_content": 78.5,
                    "is_critical_condition": false,
                    "recorded_time": "1970-01-01T12:30:00.000Z",
                    "room": {
                        "id_room": 1,
                        "room_number": 383
                    },
                    "date_of_recording": {
                        "id_date": 1,
                        "recorded_date": "2023-01-22T00:00:00.000Z"
                    }
                },
                {
                    "id_environment_condition": 2,
                    "id_room": 2,
                    "id_date": 1,
                    "humidity": 48.7,
                    "air_temperature": 23.5,
                    "air_pressure": 1011.8,
                    "nitrogen_content": 79.2,
                    "is_critical_condition": false,
                    "recorded_time": "1970-01-01T12:30:00.000Z",
                    "room": {
                        "id_room": 2,
                        "room_number": 180
                    },
                    "date_of_recording": {
                        "id_date": 1,
                        "recorded_date": "2023-01-22T00:00:00.000Z"
                    }
                },
                {
                    "id_environment_condition": 3,
                    "id_room": 3,
                    "id_date": 1,
                    "humidity": 52.1,
                    "air_temperature": 22.8,
                    "air_pressure": 1014.5,
                    "nitrogen_content": 77.8,
                    "is_critical_condition": false,
                    "recorded_time": "1970-01-01T12:30:00.000Z",
                    "room": {
                        "id_room": 3,
                        "room_number": 179
                    },
                    "date_of_recording": {
                        "id_date": 1,
                        "recorded_date": "2023-01-22T00:00:00.000Z"
                    }
                },
                {
                    "id_environment_condition": 4,
                    "id_room": 18,
                    "id_date": 10,
                    "humidity": 45.2,
                    "air_temperature": 20.4,
                    "air_pressure": 1010.7,
                    "nitrogen_content": 81.3,
                    "is_critical_condition": false,
                    "recorded_time": "1970-01-01T22:30:00.000Z",
                    "room": {
                        "id_room": 18,
                        "room_number": 122
                    },
                    "date_of_recording": {
                        "id_date": 10,
                        "recorded_date": "2023-02-21T00:00:00.000Z"
                    }
                },
                {
                    "id_environment_condition": 5,
                    "id_room": 19,
                    "id_date": 10,
                    "humidity": 43.6,
                    "air_temperature": 19.8,
                    "air_pressure": 1011.5,
                    "nitrogen_content": 80.9,
                    "is_critical_condition": false,
                    "recorded_time": "1970-01-01T22:30:00.000Z",
                    "room": {
                        "id_room": 19,
                        "room_number": 434
                    },
                    "date_of_recording": {
                        "id_date": 10,
                        "recorded_date": "2023-02-21T00:00:00.000Z"
                    }
                }
            ]
        } else if (page === '2') {
            data = [
                {
                    "id_environment_condition": 6,
                    "id_room": 20,
                    "id_date": 10,
                    "humidity": 42.8,
                    "air_temperature": 20.2,
                    "air_pressure": 1012.3,
                    "nitrogen_content": 80.5,
                    "is_critical_condition": false,
                    "recorded_time": "1970-01-01T22:30:00.000Z",
                    "room": {
                        "id_room": 20,
                        "room_number": 417
                    },
                    "date_of_recording": {
                        "id_date": 10,
                        "recorded_date": "2023-02-21T00:00:00.000Z"
                    }
                }
            ]
        }

        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

app.get('/test/person_conditions', async (req, res) => {
    try {
        const page = req.query.page
        let data = []
        if (page === '1') {
            data = [
                {
                    "id_person_condition": 1,
                    "id_person": 1,
                    "id_room": 1,
                    "id_date": 1,
                    "oxygen": 90,
                    "heart_rate": 120,
                    "body_temperature": 38.5,
                    "is_critical_condition": true,
                    "recorded_time": "1970-01-01T08:00:00.000Z",
                    "person": {
                        "id_person": 1,
                        "name_person": "Іваненко Іван Іванович",
                        "study_group": "ВТ-21-1",
                        "role": "Студент"
                    },
                    "room": {
                        "id_room": 1,
                        "room_number": 383
                    },
                    "date_of_recording": {
                        "id_date": 1,
                        "recorded_date": "2023-01-22T00:00:00.000Z"
                    }
                },
                {
                    "id_person_condition": 2,
                    "id_person": 1,
                    "id_room": 1,
                    "id_date": 1,
                    "oxygen": 95,
                    "heart_rate": 80,
                    "body_temperature": 36.6,
                    "is_critical_condition": false,
                    "recorded_time": "1970-01-01T09:00:00.000Z",
                    "person": {
                        "id_person": 1,
                        "name_person": "Іваненко Іван Іванович",
                        "study_group": "ВТ-21-1",
                        "role": "Студент"
                    },
                    "room": {
                        "id_room": 1,
                        "room_number": 383
                    },
                    "date_of_recording": {
                        "id_date": 1,
                        "recorded_date": "2023-01-22T00:00:00.000Z"
                    }
                },
                {
                    "id_person_condition": 3,
                    "id_person": 2,
                    "id_room": 2,
                    "id_date": 1,
                    "oxygen": 88,
                    "heart_rate": 115,
                    "body_temperature": 38.9,
                    "is_critical_condition": true,
                    "recorded_time": "1970-01-01T08:00:00.000Z",
                    "person": {
                        "id_person": 2,
                        "name_person": "Петренко Олександр Миколайович",
                        "study_group": "ВТ-22-1",
                        "role": "Студент"
                    },
                    "room": {
                        "id_room": 2,
                        "room_number": 180
                    },
                    "date_of_recording": {
                        "id_date": 1,
                        "recorded_date": "2023-01-22T00:00:00.000Z"
                    }
                },
                {
                    "id_person_condition": 4,
                    "id_person": 2,
                    "id_room": 2,
                    "id_date": 1,
                    "oxygen": 98,
                    "heart_rate": 70,
                    "body_temperature": 36.5,
                    "is_critical_condition": false,
                    "recorded_time": "1970-01-01T09:00:00.000Z",
                    "person": {
                        "id_person": 2,
                        "name_person": "Петренко Олександр Миколайович",
                        "study_group": "ВТ-22-1",
                        "role": "Студент"
                    },
                    "room": {
                        "id_room": 2,
                        "room_number": 180
                    },
                    "date_of_recording": {
                        "id_date": 1,
                        "recorded_date": "2023-01-22T00:00:00.000Z"
                    }
                },
                {
                    "id_person_condition": 5,
                    "id_person": 3,
                    "id_room": 3,
                    "id_date": 2,
                    "oxygen": 85,
                    "heart_rate": 125,
                    "body_temperature": 39.2,
                    "is_critical_condition": true,
                    "recorded_time": "1970-01-01T08:00:00.000Z",
                    "person": {
                        "id_person": 3,
                        "name_person": "Ковальчук Оксана Сергіївна",
                        "study_group": "ІСТ-22-1",
                        "role": "Студент"
                    },
                    "room": {
                        "id_room": 3,
                        "room_number": 179
                    },
                    "date_of_recording": {
                        "id_date": 2,
                        "recorded_date": "2023-03-07T00:00:00.000Z"
                    }
                }
            ]
        } else if (page === '2') {
            data = [
                {
                    "id_person_condition": 6,
                    "id_person": 3,
                    "id_room": 3,
                    "id_date": 2,
                    "oxygen": 96,
                    "heart_rate": 75,
                    "body_temperature": 36.8,
                    "is_critical_condition": false,
                    "recorded_time": "1970-01-01T09:00:00.000Z",
                    "person": {
                        "id_person": 3,
                        "name_person": "Ковальчук Оксана Сергіївна",
                        "study_group": "ІСТ-22-1",
                        "role": "Студент"
                    },
                    "room": {
                        "id_room": 3,
                        "room_number": 179
                    },
                    "date_of_recording": {
                        "id_date": 2,
                        "recorded_date": "2023-03-07T00:00:00.000Z"
                    }
                },
                {
                    "id_person_condition": 7,
                    "id_person": 4,
                    "id_room": 4,
                    "id_date": 4,
                    "oxygen": 88,
                    "heart_rate": 115,
                    "body_temperature": 36.5,
                    "is_critical_condition": true,
                    "recorded_time": "1970-01-01T08:00:00.000Z",
                    "person": {
                        "id_person": 4,
                        "name_person": "Сидоренко Анастасія Олександрівна",
                        "study_group": "КБ-22-2",
                        "role": "Студент"
                    },
                    "room": {
                        "id_room": 4,
                        "room_number": 200
                    },
                    "date_of_recording": {
                        "id_date": 4,
                        "recorded_date": "2023-02-08T00:00:00.000Z"
                    }
                },
                {
                    "id_person_condition": 8,
                    "id_person": 4,
                    "id_room": 4,
                    "id_date": 4,
                    "oxygen": 98,
                    "heart_rate": 70,
                    "body_temperature": 38.9,
                    "is_critical_condition": false,
                    "recorded_time": "1970-01-01T10:00:00.000Z",
                    "person": {
                        "id_person": 4,
                        "name_person": "Сидоренко Анастасія Олександрівна",
                        "study_group": "КБ-22-2",
                        "role": "Студент"
                    },
                    "room": {
                        "id_room": 4,
                        "room_number": 200
                    },
                    "date_of_recording": {
                        "id_date": 4,
                        "recorded_date": "2023-02-08T00:00:00.000Z"
                    }
                },
                {
                    "id_person_condition": 9,
                    "id_person": 4,
                    "id_room": 4,
                    "id_date": 4,
                    "oxygen": 85,
                    "heart_rate": 125,
                    "body_temperature": 39.2,
                    "is_critical_condition": false,
                    "recorded_time": "1970-01-01T13:00:00.000Z",
                    "person": {
                        "id_person": 4,
                        "name_person": "Сидоренко Анастасія Олександрівна",
                        "study_group": "КБ-22-2",
                        "role": "Студент"
                    },
                    "room": {
                        "id_room": 4,
                        "room_number": 200
                    },
                    "date_of_recording": {
                        "id_date": 4,
                        "recorded_date": "2023-02-08T00:00:00.000Z"
                    }
                }
            ]
        }
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

app.get('/test/persons', async (req, res) => {
    try {
        const data = [
            {
                "id_person": 1,
                "name_person": "Іваненко Іван Іванович",
                "study_group": "ВТ-21-1",
                "role": "Студент"
            },
            {
                "id_person": 2,
                "name_person": "Петренко Олександр Миколайович",
                "study_group": "ВТ-22-1",
                "role": "Студент"
            },
            {
                "id_person": 3,
                "name_person": "Ковальчук Оксана Сергіївна",
                "study_group": "ІСТ-22-1",
                "role": "Студент"
            },
            {
                "id_person": 4,
                "name_person": "Сидоренко Анастасія Олександрівна",
                "study_group": "КБ-22-2",
                "role": "Студент"
            },
            {
                "id_person": 5,
                "name_person": "Григоренко Тетяна Василівна",
                "study_group": "ІПЗ-22-3",
                "role": "Студент"
            }
        ]
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})


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