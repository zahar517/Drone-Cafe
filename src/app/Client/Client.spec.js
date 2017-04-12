'use strict';

describe('Drone Cafe Client module', function() {
  beforeEach(module('DroneCafe.Client'));

  let controller;

  beforeEach(inject(function($componentController){
    controller = $componentController('client');
  }));

  it('it should have user, order', function() {
    expect(controller.user).toBeDefined();
    expect(controller.order).toBeDefined();
  });
});
