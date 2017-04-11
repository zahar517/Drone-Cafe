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

  it('it should have empty properties after init', function() {
    let length = controller.dishes.length;
    expect(length).toBe(0);
  });

  it('it should have title "Choose dish"', function() {
    expect(controller.title).toBe('Choose dish');
  });  
});
