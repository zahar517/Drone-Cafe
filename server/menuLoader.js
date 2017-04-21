const menu = require('./menu.json');
const { Dish } = require('./models');

exports.loadMenu = () => {
  let menuPromises = menu.map(item => {
    return Dish.findOne({ name: item.name })
    .then(dish => {
      if (dish) return dish;

      dish = new Dish({
        name: item.name,
        price: item.price,
      })

      return dish.save();
    })
  });

  return Promise.all(menuPromises);
}