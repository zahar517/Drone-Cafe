'use strict';

describe('Drone Cafe User Login module', function() {
  beforeEach(module('DroneCafe.UserLogin'));

  let controller, scope;

  beforeEach(inject(function($componentController, $rootScope){
    scope = $rootScope.$new();
    controller = $componentController('userLogin', {$scope: scope});
  }));

  it('it should have title', function() {
    expect(controller.title).toBeDefined();
  });

  it('it should have method to check user', function() {
    expect(controller.checkUser).toBeDefined();
  });

  it('it should have empty properties after init', function() {
    expect(controller.newUser).toBeNull();
  });
});
