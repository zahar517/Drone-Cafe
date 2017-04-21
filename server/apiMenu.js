const router = require('express').Router();
const { Dish } = require('./models');

router.get('/menu', (req, res) => {
  Dish.find()
    .then(menu => res.status(200).json(menu))
    .catch(err => res.sendStatus(500));
});

module.exports = router;
