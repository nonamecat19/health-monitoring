const express = require("express")
const router = express.Router()

const personRouter = require("./routers/personRouter")
const testPersonRouter = require("./routers/testPersonRouter")

const roomRouter = require("./routers/roomRouter")
const testRoomRouter = require("./routers/testRoomRouter")

router.use('/persons', personRouter)
router.use('/testPersons', testPersonRouter)
router.use('/rooms', roomRouter)
router.use('/testRooms', testRoomRouter)


module.exports = router
