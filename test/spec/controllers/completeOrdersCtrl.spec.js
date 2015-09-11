'use strict';

describe('', function () {
  var $scope, ctrl;
  var data =[{'name':'joop'}];

  beforeEach(function () {
    module('WIP');
  });

  beforeEach(
    inject(function ($controller,$rootScope) {
        $scope = $rootScope.$new();

        ctrl = $controller('CompleteOrdersCtrl', {
          $scope: $scope,
          settlementData:data
        });
      }
    ));

  it('should set settlements', function () {
    console.log('ding',$scope.settlements);
    expect($scope.settlements.length).toBeGreaterThan(0);
  });

});

