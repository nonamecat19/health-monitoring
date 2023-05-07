const express = require("express")

const router = express.Router()


router.get("/?page=1", async (req, res) => {
    try {
        const data = [
            {
                "room_number": "128",
                "room_type": "Лабораторна,ауд."
            },
            {
                "room_number": "135",
                "room_type": "Лабораторна,ауд."
            },
            {
                "room_number": "165",
                "room_type": "Лабораторна,ауд."
            },
            {
                "room_number": "229",
                "room_type": "Лекція,ауд."
            }
        ]
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

router.get("/?page=2", async (req, res) => {
    try {
        const data = [
            {
                "room_number": "135",
                "room_type": "Лабораторна,ауд."
            },
            {
                "room_number": "165",
                "room_type": "Лабораторна,ауд."
            },
            {
                "room_number": "229",
                "room_type": "Лекція,ауд."
            }
        ]
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

router.get('/records?page=1', async (req, res) => {
    try {
        const data = [
            {
                "id_room_records": 1,
                "room_number": "229",
                "humidity": "50.3",
                "temperature": "22.1",
                "pressure": "750",
                "carbon_dioxide": "400",
                "air_ions": "600",
                "ozone": "0.16",
                "is_critical_results": false,
                "recorded_time": "1970-01-01T12:30:00.000Z",
                "recorded_date": "2023-03-12T00:00:00.000Z",
                "room": {
                    "room_number": "229",
                    "room_type": "Лекція,ауд."
                }
            },
            {
                "id_room_records": 2,
                "room_number": "12",
                "humidity": "62",
                "temperature": "25.5",
                "pressure": "750",
                "carbon_dioxide": "501",
                "air_ions": "400",
                "ozone": "0.12",
                "is_critical_results": true,
                "recorded_time": "1970-01-01T12:30:00.000Z",
                "recorded_date": "2023-03-12T00:00:00.000Z",
                "room": {
                    "room_number": "12",
                    "room_type": "Практика,ауд."
                }
            },
            {
                "id_room_records": 3,
                "room_number": "113",
                "humidity": "52.1",
                "temperature": "22.8",
                "pressure": "760",
                "carbon_dioxide": "400",
                "air_ions": "500",
                "ozone": "0.14",
                "is_critical_results": false,
                "recorded_time": "1970-01-01T12:30:00.000Z",
                "recorded_date": "2023-03-13T00:00:00.000Z",
                "room": {
                    "room_number": "113",
                    "room_type": "Лекція,ауд."
                }
            },
            {
                "id_room_records": 4,
                "room_number": "229",
                "humidity": "45.2",
                "temperature": "20.4",
                "pressure": "750",
                "carbon_dioxide": "500",
                "air_ions": "500",
                "ozone": "0.1",
                "is_critical_results": false,
                "recorded_time": "1970-01-01T22:30:00.000Z",
                "recorded_date": "2023-03-12T00:00:00.000Z",
                "room": {
                    "room_number": "229",
                    "room_type": "Лекція,ауд."
                }
            }
        ]
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

router.get('/records?page=2', async (req, res) => {
    try {
        const data = [
            {
                "id_room_records": 5,
                "room_number": "12",
                "humidity": "43.6",
                "temperature": "19.8",
                "pressure": "760",
                "carbon_dioxide": "800",
                "air_ions": "600",
                "ozone": "0.11",
                "is_critical_results": true,
                "recorded_time": "1970-01-01T22:30:00.000Z",
                "recorded_date": "2023-03-12T00:00:00.000Z",
                "room": {
                    "room_number": "12",
                    "room_type": "Практика,ауд."
                }
            },
            {
                "id_room_records": 6,
                "room_number": "113",
                "humidity": "56.8",
                "temperature": "20.2",
                "pressure": "770",
                "carbon_dioxide": "430",
                "air_ions": "550",
                "ozone": "0.15",
                "is_critical_results": false,
                "recorded_time": "1970-01-01T22:30:00.000Z",
                "recorded_date": "2023-03-13T00:00:00.000Z",
                "room": {
                    "room_number": "113",
                    "room_type": "Лекція,ауд."
                }
            }
        ]
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

router.get('/records/:id?page=1', async (req, res) => {
    //по 12 кабінету
    try {
        const data =[
            {
                "id_room_records": 2,
                "room_number": "12",
                "humidity": "62",
                "temperature": "25.5",
                "pressure": "750",
                "carbon_dioxide": "501",
                "air_ions": "400",
                "ozone": "0.12",
                "is_critical_results": true,
                "recorded_time": "1970-01-01T12:30:00.000Z",
                "recorded_date": "2023-03-12T00:00:00.000Z",
                "room": {
                    "room_number": "12",
                    "room_type": "Практика,ауд."
                }
            }
        ]
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

router.get('/records/:id?page=2', async (req, res) => {
    //по 12 кабінету
    try {
        const data =[
            {
                "id_room_records": 5,
                "room_number": "12",
                "humidity": "43.6",
                "temperature": "19.8",
                "pressure": "760",
                "carbon_dioxide": "800",
                "air_ions": "600",
                "ozone": "0.11",
                "is_critical_results": true,
                "recorded_time": "1970-01-01T22:30:00.000Z",
                "recorded_date": "2023-03-12T00:00:00.000Z",
                "room": {
                    "room_number": "12",
                    "room_type": "Практика,ауд."
                }
            }
        ]
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const data = [
            {
                "room_number": "12",
                "room_type": "Практика,ауд."
            }
        ]
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

module.exports = router