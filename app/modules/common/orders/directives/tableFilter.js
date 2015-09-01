app.directive('tableFilter', function ($filter) {
  return {
    restrict: 'E',
    //scope:{security:"=security"},
    templateUrl: '../../../../views/tableFilter.html',
    controller: function ($scope) {
      //console.log('security',$scope.security);

      $scope.assetTypes = [
        'SMA',
        'Super',
        'Aus. Equities',
        'Intl. Equities',
        'Managed Investments',
        'TD\'s',
        'Pension',
        'All',
        ''
      ];

      $scope.tradeTypes = [
        'SELL',
        'BUY',
        'App (application)',
        'REDEMPTION',
        'Switches',
        'All'];
    },
    link: function ($scope) {


    }
  };
});
