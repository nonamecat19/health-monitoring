const admin = require('../config/firebase')

async function firebaseAuth(req, res, next) {
    try {
        const token = req.headers['authorizationfirebase'] && req.headers['authorizationfirebase'].split(' ')[1]
        if (!token) {
            return res.status(401).json({
                message: 'No token'
            })
        }
        req.data = await admin.auth().verifyIdToken(token)
        next()
    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }
}
module.exports = firebaseAuth