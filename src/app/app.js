'use strict';

angular.module('DroneCafe', [
  'ui.router',
  'ngMaterial', 
  'ngMessages', 
  'DroneCafe.UserLogin', 
  'DroneCafe.Customer',
  'DroneCafe.Order',
  'DroneCafe.OrderItem',
  'DroneCafe.CustomerMenu',
  'DroneCafe.CustomerMenuItem',
  'DroneCafe.Client',
  'DroneCafe.Kitchen',
  'DroneCafe.DishOrdered',
  'DroneCafe.DishOrderedItem',
  'DroneCafe.DishCooking',
  'DroneCafe.DishCookingItem',
  'btford.socket-io',
  ])

.config($stateProvider => {
  $stateProvider
    .state('home', {
      url: '',
      component: 'userLogin',
    })
    .state('client', {
      url: '/client',
      component: 'client',
      resolve: {
        user: (userService) => userService.getUser()
          .then(res => res.data),
        order: (menuService) => menuService.getOrder()
          .then(res => res.data)
      }
    })
    .state('kitchen', {
      url: '/kitchen',
      component: 'kitchen',
      resolve: {
        order: (kitchenService) => kitchenService.getOrder()
          .then(res => res.data)
      }
    })
});
