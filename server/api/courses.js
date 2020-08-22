const router = require('express').Router()
const {Course} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const response = await Course.findAll({
      attributes: ['courseName', 'courseIntro', 'courseMoreInformation']
    })
    res.json(response)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const course = await Course.findByPk(req.params.id)
    res.json(course)
  } catch (err) {
    next(err)
  }
})