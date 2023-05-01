const Router = require('express');
const router = new Router;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get('/person_conditions', async (req, res) => {
    try {
        const persons = await prisma.personCondition.findMany();
        res.json(persons);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
});



module.exports = router