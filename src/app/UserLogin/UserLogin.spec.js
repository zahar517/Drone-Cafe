'use strict';

describe('Drone Cafe User Login module', function() {
  beforeEach(module('DroneCafe'));

  let controller;

  beforeEach(inject(function($componentController){
    controller = $componentController('userLogin');
  }));

  it('it should have title', function() {
    expect(controller.title).toBeDefined();
  });

  it('it should have method to check user', function() {
    expect(controller.checkUser).toBeDefined();
  });
});

