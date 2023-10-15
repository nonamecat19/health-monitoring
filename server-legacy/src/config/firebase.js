const serviceAccount = require("./firebaseKey.json");
const admin = require("firebase-admin")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
module.exports = admin