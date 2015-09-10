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

        ctrl = $controller('AwaitingSettlementsCtrl', {
          $scope: $scope,
          settlementData:data
        });
      }
    ));

  it('should set settlements', function () {
    console.log('HOER',$scope.settlements);
    expect($scope.settlements.length).toBeGreaterThan(2);
  });


});

