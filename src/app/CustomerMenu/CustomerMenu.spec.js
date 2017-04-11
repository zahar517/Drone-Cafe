'use strict';

describe('Drone Cafe Customer Menu module', function() {
  beforeEach(module('DroneCafe.CustomerMenu'));

  let controller;

  beforeEach(inject(function($componentController){
    controller = $componentController('customerMenu');
  }));

  it('it should have title, dishes, makeOrder', function() {
    expect(controller.title).toBeDefined();
    expect(controller.dishes).toBeDefined();
  });
});
