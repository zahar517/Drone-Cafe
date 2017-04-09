'use strict';

describe('Drone Cafe Customer module', function() {
  beforeEach(module('DroneCafe.Customer'));

  let controller;

  beforeEach(inject(function($componentController){
    controller = $componentController('customer');
  }));

  it('it should have title, username, balance, addMoney', function() {
    expect(controller.title).toBeDefined();
    expect(controller.username).toBeDefined();
    expect(controller.balance).toBeDefined();
    expect(controller.addMoney).toBeDefined();
  });
});
