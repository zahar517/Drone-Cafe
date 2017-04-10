'use strict';

describe('Drone Cafe Order module', function() {
  beforeEach(module('DroneCafe.Order'));

  let controller;

  beforeEach(inject(function($componentController){
    controller = $componentController('order');
  }));

  it('it should have title, order, addDish', function() {
    expect(controller.title).toBeDefined();
    expect(controller.order).toBeDefined();
    expect(controller.addDish).toBeDefined();
  });
});
