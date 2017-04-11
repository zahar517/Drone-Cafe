'use strict';

describe('Drone Cafe Customer Menu Item module', function() {
  beforeEach(module('DroneCafe.CustomerMenuItem'));

  let controller;

  beforeEach(inject(function($componentController){
    controller = $componentController('customerMenuItem');
  }));

  it('it should have title, order, addDish', function() {
    expect(controller.balance).toBeDefined();
    expect(controller.makeOrder).toBeDefined();
  });
});
