const express = require("express")
const router = express.Router()

const personRouter = require("./routers/personRouter")
const roomRouter = require("./routers/roomRouter")
const authRouter = require("./routers/authRouter")

router.use('/persons', personRouter)
router.use('/rooms', roomRouter)
router.use('/auth', authRouter)


module.exports = router
