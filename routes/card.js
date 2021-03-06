const {Router} = require('express')
const Card = require('../models/card')
const Course = require('../models/course')
const router = Router()

router.post('/add', async (req, res) => {
    const course = await Course.getById(req.body.id)
    await Card.add(course)
    res.redirect('/card')
})

router.get('/', async (req, res) => {
    const card = await Card.feth()
    res.render('card', {
        title: 'Корзина',
        card
    })
})

module.exports = router