const express = require("express")

const router = express.Router()


router.get("/", async (req, res) => {
    try {
        const data = [
            {
                "id_person": 1,
                "name_person": "Іваненко Іван Іванович",
                "study_group": "ВТ-21-1",
                "role_person": "Студент"
            },
            {
                "id_person": 2,
                "name_person": "Петренко Олександр Миколайович",
                "study_group": "ВТ-22-1",
                "role_person": "Студент"
            },
            {
                "id_person": 3,
                "name_person": "Ковальчук Оксана Сергіївна",
                "study_group": "ІСТ-22-1",
                "role_person": "Студент"
            },
            {
                "id_person": 4,
                "name_person": "Сидоренко Анастасія Олександрівна",
                "study_group": "КБ-22-2",
                "role_person": "Студент"
            },
            {
                "id_person": 5,
                "name_person": "Григоренко Тетяна Василівна",
                "study_group": "ІПЗ-22-3",
                "role_person": "Студент"
            },
            {
                "id_person": 6,
                "name_person": "Скрипник Марина Ігорівна",
                "study_group": "ІПЗ-22-1",
                "role_person": "Студент"
            },
            {
                "id_person": 7,
                "name_person": "Козак Андрій Віталійович",
                "study_group": "КБ-22-1",
                "role_person": "Студент"
            },
            {
                "id_person": 8,
                "name_person": "Мельник Дмитро Олександрович",
                "study_group": "ВТ-22-2",
                "role_person": "Студент"
            },
            {
                "id_person": 9,
                "name_person": "Бондар Олег Володимирович",
                "study_group": "ІПЗ-22-2",
                "role_person": "Студент"
            },
            {
                "id_person": 10,
                "name_person": "Кравченко Марія Євгенівна",
                "study_group": "КБ-22-3",
                "role_person": "Студент"
            },
            {
                "id_person": 11,
                "name_person": "Савченко Олена Михайлівна",
                "study_group": "ІСТ-22-1",
                "role_person": "Студент"
            },
            {
                "id_person": 12,
                "name_person": "Кузьменко Юлія Вікторівна",
                "study_group": "ВТ-21-1",
                "role_person": "Студент"
            },
            {
                "id_person": 13,
                "name_person": "Шевченко Віктор Петрович",
                "study_group": "ІПЗ-22-4",
                "role_person": "Студент"
            },
            {
                "id_person": 14,
                "name_person": "Коваленко Сергій Анатолійович",
                "study_group": "ВТ-22-1",
                "role_person": "Студент"
            },
            {
                "id_person": 15,
                "name_person": "Морозова Аліна Володимирівна",
                "study_group": "КБ-22-3",
                "role_person": "Студент"
            },
            {
                "id_person": 16,
                "name_person": "Петров Олександр Олександрович",
                "study_group": "ІПЗ-22-2",
                "role_person": "Студент"
            },
            {
                "id_person": 17,
                "name_person": "Шевченко Оксана Миколаївна",
                "study_group": "КБ-22-2",
                "role_person": "Студент"
            },
            {
                "id_person": 18,
                "name_person": "Мельник Артем Олександрович",
                "study_group": "ВТ-22-2",
                "role_person": "Студент"
            },
            {
                "id_person": 19,
                "name_person": "Гончаренко Юрій Ігорович",
                "study_group": "ІСТ-22-1",
                "role_person": "Студент"
            },
            {
                "id_person": 20,
                "name_person": "Козаченко Анастасія Віталіївна",
                "study_group": "ІПЗ-22-3",
                "role_person": "Студент"
            },
            {
                "id_person": 21,
                "name_person": "Поліщук Андрій Миколайович",
                "study_group": "ВТ-21-1",
                "role_person": "Студент"
            },
            {
                "id_person": 22,
                "name_person": "Третьяк Дарина Ігорівна",
                "study_group": "КБ-22-3",
                "role_person": "Студент"
            },
            {
                "id_person": 23,
                "name_person": "Харченко Юлія Віталіївна",
                "study_group": "ІПЗ-22-2",
                "role_person": "Студент"
            },
            {
                "id_person": 24,
                "name_person": "Мельниченко Василь Петрович",
                "study_group": "КБ-22-1",
                "role_person": "Студент"
            },
            {
                "id_person": 25,
                "name_person": "Гриненко Вікторія Сергіївна",
                "study_group": "ІСТ-22-1",
                "role_person": "Студент"
            },
            {
                "id_person": 26,
                "name_person": "Сидоренко Олексій Олександрович",
                "study_group": null,
                "role_person": "Викладач"
            },
            {
                "id_person": 27,
                "name_person": "Іванова Ірина Володимирівна",
                "study_group": null,
                "role_person": "Викладач"
            },
            {
                "id_person": 28,
                "name_person": "Петренко Євгенія Петрівна",
                "study_group": null,
                "role_person": "Викладач"
            },
            {
                "id_person": 29,
                "name_person": "Дмитрієва Оксана Олександрівна",
                "study_group": null,
                "role_person": "Викладач"
            },
            {
                "id_person": 30,
                "name_person": "Кравець Валерій Михайлович",
                "study_group": null,
                "role_person": "Викладач"
            },
            {
                "id_person": 31,
                "name_person": "Шевченко Людмила Миколаївна",
                "study_group": null,
                "role_person": "Викладач"
            },
            {
                "id_person": 32,
                "name_person": "Кравченко Микола Іванович",
                "study_group": null,
                "role_person": "Викладач"
            },
            {
                "id_person": 33,
                "name_person": "Гончар Олег Володимирович",
                "study_group": null,
                "role_person": "Викладач"
            },
            {
                "id_person": 34,
                "name_person": "Сергієнко Юлія Анатоліївна",
                "study_group": null,
                "role_person": "Викладач"
            },
            {
                "id_person": 35,
                "name_person": "Ковальова Анастасія Віталіївна",
                "study_group": null,
                "role_person": "Викладач"
            },
            {
                "id_person": 36,
                "name_person": "Головко Світлана Петрівна",
                "study_group": null,
                "role_person": "Викладач"
            },
            {
                "id_person": 37,
                "name_person": "Овчаренко Олександр Михайлович",
                "study_group": null,
                "role_person": "Викладач"
            },
            {
                "id_person": 38,
                "name_person": "Кравчук Ігор Миколайович",
                "study_group": null,
                "role_person": "Викладач"
            },
            {
                "id_person": 39,
                "name_person": "Романенко Тетяна Анатоліївна",
                "study_group": null,
                "role_person": "Викладач"
            },
            {
                "id_person": 40,
                "name_person": "Тарасенко Олена Володимирівна",
                "study_group": null,
                "role_person": "Викладач"
            }
        ]
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

router.get('/records', async (req, res) => {
    try {
        const data = [
            {
                "id_person_records": 1,
                "id_person": 1,
                "room_number": "229",
                "oxygen": "90",
                "heart_rate": "120",
                "temperature": "38.5",
                "is_critical_results": true,
                "recorded_time": "1970-01-01T08:00:00.000Z",
                "recorded_date": "2023-03-12T00:00:00.000Z",
                "person": {
                    "id_person": 1,
                    "name_person": "Іваненко Іван Іванович",
                    "study_group": "ВТ-21-1",
                    "role_person": "Студент"
                },
                "room": {
                    "room_number": "229",
                    "room_type": "Лекція,ауд."
                }
            },
            {
                "id_person_records": 2,
                "id_person": 1,
                "room_number": "12",
                "oxygen": "95",
                "heart_rate": "80",
                "temperature": "36.6",
                "is_critical_results": false,
                "recorded_time": "1970-01-01T09:00:00.000Z",
                "recorded_date": "2023-03-12T00:00:00.000Z",
                "person": {
                    "id_person": 1,
                    "name_person": "Іваненко Іван Іванович",
                    "study_group": "ВТ-21-1",
                    "role_person": "Студент"
                },
                "room": {
                    "room_number": "12",
                    "room_type": "Практика,ауд."
                }
            },
            {
                "id_person_records": 3,
                "id_person": 2,
                "room_number": "128",
                "oxygen": "88",
                "heart_rate": "115",
                "temperature": "38.9",
                "is_critical_results": true,
                "recorded_time": "1970-01-01T08:00:00.000Z",
                "recorded_date": "2023-03-13T00:00:00.000Z",
                "person": {
                    "id_person": 2,
                    "name_person": "Петренко Олександр Миколайович",
                    "study_group": "ВТ-22-1",
                    "role_person": "Студент"
                },
                "room": {
                    "room_number": "128",
                    "room_type": "Лабораторна,ауд."
                }
            },
            {
                "id_person_records": 4,
                "id_person": 2,
                "room_number": "124",
                "oxygen": "98",
                "heart_rate": "70",
                "temperature": "36.5",
                "is_critical_results": false,
                "recorded_time": "1970-01-01T09:00:00.000Z",
                "recorded_date": "2023-03-13T00:00:00.000Z",
                "person": {
                    "id_person": 2,
                    "name_person": "Петренко Олександр Миколайович",
                    "study_group": "ВТ-22-1",
                    "role_person": "Студент"
                },
                "room": {
                    "room_number": "124",
                    "room_type": "Практика,ауд."
                }
            },
            {
                "id_person_records": 5,
                "id_person": 3,
                "room_number": "113",
                "oxygen": "85",
                "heart_rate": "125",
                "temperature": "39.2",
                "is_critical_results": true,
                "recorded_time": "1970-01-01T08:00:00.000Z",
                "recorded_date": "2023-03-14T00:00:00.000Z",
                "person": {
                    "id_person": 3,
                    "name_person": "Ковальчук Оксана Сергіївна",
                    "study_group": "ІСТ-22-1",
                    "role_person": "Студент"
                },
                "room": {
                    "room_number": "113",
                    "room_type": "Лекція,ауд."
                }
            },
            {
                "id_person_records": 6,
                "id_person": 3,
                "room_number": "135",
                "oxygen": "96",
                "heart_rate": "75",
                "temperature": "36.8",
                "is_critical_results": false,
                "recorded_time": "1970-01-01T09:00:00.000Z",
                "recorded_date": "2023-03-14T00:00:00.000Z",
                "person": {
                    "id_person": 3,
                    "name_person": "Ковальчук Оксана Сергіївна",
                    "study_group": "ІСТ-22-1",
                    "role_person": "Студент"
                },
                "room": {
                    "room_number": "135",
                    "room_type": "Лабораторна,ауд."
                }
            },
            {
                "id_person_records": 7,
                "id_person": 4,
                "room_number": "135",
                "oxygen": "88",
                "heart_rate": "115",
                "temperature": "36.5",
                "is_critical_results": true,
                "recorded_time": "1970-01-01T08:00:00.000Z",
                "recorded_date": "2023-03-12T00:00:00.000Z",
                "person": {
                    "id_person": 4,
                    "name_person": "Сидоренко Анастасія Олександрівна",
                    "study_group": "КБ-22-2",
                    "role_person": "Студент"
                },
                "room": {
                    "room_number": "135",
                    "room_type": "Лабораторна,ауд."
                }
            },
            {
                "id_person_records": 8,
                "id_person": 4,
                "room_number": "12",
                "oxygen": "98",
                "heart_rate": "70",
                "temperature": "38.9",
                "is_critical_results": false,
                "recorded_time": "1970-01-01T10:00:00.000Z",
                "recorded_date": "2023-03-12T00:00:00.000Z",
                "person": {
                    "id_person": 4,
                    "name_person": "Сидоренко Анастасія Олександрівна",
                    "study_group": "КБ-22-2",
                    "role_person": "Студент"
                },
                "room": {
                    "room_number": "12",
                    "room_type": "Практика,ауд."
                }
            },
            {
                "id_person_records": 9,
                "id_person": 4,
                "room_number": "165",
                "oxygen": "85",
                "heart_rate": "125",
                "temperature": "39.2",
                "is_critical_results": false,
                "recorded_time": "1970-01-01T13:00:00.000Z",
                "recorded_date": "2023-03-12T00:00:00.000Z",
                "person": {
                    "id_person": 4,
                    "name_person": "Сидоренко Анастасія Олександрівна",
                    "study_group": "КБ-22-2",
                    "role_person": "Студент"
                },
                "room": {
                    "room_number": "165",
                    "room_type": "Лабораторна,ауд."
                }
            }
        ]
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})


router.get('/records/:id', async (req, res) => {
    try {
        const data =[
            {
                "id_person_records": 1,
                "id_person": 1,
                "room_number": "229",
                "oxygen": "90",
                "heart_rate": "120",
                "temperature": "38.5",
                "is_critical_results": true,
                "recorded_time": "1970-01-01T08:00:00.000Z",
                "recorded_date": "2023-03-12T00:00:00.000Z",
                "person": {
                    "id_person": 1,
                    "name_person": "Іваненко Іван Іванович",
                    "study_group": "ВТ-21-1",
                    "role_person": "Студент"
                },
                "room": {
                    "room_number": "229",
                    "room_type": "Лекція,ауд."
                }
            },
            {
                "id_person_records": 2,
                "id_person": 1,
                "room_number": "12",
                "oxygen": "95",
                "heart_rate": "80",
                "temperature": "36.6",
                "is_critical_results": false,
                "recorded_time": "1970-01-01T09:00:00.000Z",
                "recorded_date": "2023-03-12T00:00:00.000Z",
                "person": {
                    "id_person": 1,
                    "name_person": "Іваненко Іван Іванович",
                    "study_group": "ВТ-21-1",
                    "role_person": "Студент"
                },
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
                "id_person": 1,
                "name_person": "Іваненко Іван Іванович",
                "study_group": "ВТ-21-1",
                "role_person": "Студент"
            }
        ]
        res.json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
})

module.exports = router