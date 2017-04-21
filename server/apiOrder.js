const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


const { UserDish, User, Dish } = require('./models');

router.get('/order', (req, res) => {
  console.log('Order GET with query: ', req.query);

  UserDish.find(req.query)
    .populate({ path: '_dish', select: 'name -_id' })
    .then(order => res.status(200).json(order))
    .catch(err => res.sendStatus(500));
});

router.post('/order', (req, res) => {
  console.log('Order POST with body: ', req.body);
  const { _user, _dish } = req.body;

  User.findById(_user)
    .then(user => {
      return Dish.findById(_dish)
        .then(dish => {
          if (user.balance >= dish.price) {

            let userDish = new UserDish({ _user, _dish })
            user.balance -= dish.price;

            return user.save().then(() => userDish.save())

          } else {
            throw new Error('Not enough money');
          }
        })
    })
    .then(order => res.status(200).json(order))
    .catch(err => res.sendStatus(500));
});

module.exports = router;
