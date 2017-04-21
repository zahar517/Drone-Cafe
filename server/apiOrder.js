const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


const { UserDish } = require('./models');

router.get('/order', (req, res) => {
  console.log('Order GET with query: ', req.query);

  UserDish.find(req.query)
    .populate({ path: '_dish', select: 'name -_id' })
    .then(order => res.status(200).json(order))
    .catch(err => res.sendStatus(500));
});

module.exports = router;
