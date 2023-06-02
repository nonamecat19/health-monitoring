const express = require("express")
const router = express.Router()

const personRouter = require("./routers/personRouter")
const roomRouter = require("./routers/roomRouter")
const authRouter = require("./routers/authRouter")
const studentRouter = require("./routers/studentRouter")

router.use('/persons', personRouter)
router.use('/rooms', roomRouter)
router.use('/auth', authRouter)
router.use('/student', studentRouter)

module.exports = router
