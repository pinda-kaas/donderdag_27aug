app.directive('tableFilter', function ($filter) {
  return {
    restrict: 'E',
    //scope:{security:"=security"},
    templateUrl: 'views/tableFilter.html',
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

      $scope.orderSourceTypes = [
        'All',
        'Portfolio transacting',
        'Transacting',
        'Off-platform (new)',
        'Bulked managed investments',
        'Automatic cash management',
        'Model portfolios',
        'Dollar cost averaging',
        'Low cash auto sell',
        'Manual orders',
        'Bulked managed investment and TDs',
        'Funds transfer',
        'Exercise/assignments (new)'
      ];
    },
    link: function ($scope) {


    }
  };
});
