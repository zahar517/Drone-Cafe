const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const { User } = require('./models');

router.get('/users/:id', (req, res) => {
  console.log('Users GET with params=', req.params);
  User.findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(err => res.sendStatus(500));
});

router.put('/users/:id', (req, res) => {

  if (!req.body) return res.sendStatus(400);

  console.log(`Users PUT with id=${req.params.id}, balance=${req.body.balance}`);

  const { balance } = req.body;

  User.findById(req.params.id)
    .then(user => {
      user.balance += parseInt(balance);
      return user.save();
    })
    .then(user => res.status(200).json(user))
    .catch(err => {console.log(err); return res.sendStatus(500);});
});

module.exports = router;
