app.directive('tableFilter', function ($filter) {
  return {
    restrict: 'E',
    //scope:{security:"=security"},
    templateUrl: 'modules/common/orders/partials/tableFilter.html',
    controller: function ($scope) {
      //console.log('security',$scope.security);

      $scope.assetTypes = [
        {name: 'SMA'},
        {name: 'Super'},
        {name: 'Aus. Equities'},
        {name: 'Intl. Equities'},
        {name: 'Managed Investments'},
        {name: 'TD\'s'},
        {name: 'Pension'},
        {name: 'All'}
      ];

      $scope.tradeTypes = [
        {name: 'SELL'},
        {name: 'BUY'},
        {name: 'BUY'},
        {name: 'App (application)'},
        {name: 'App (application)'},
        {name: 'Red (redemption)'},
        {name: 'Switches)'},
        {name: 'All'}];
    },
    link: function ($scope) {


    }
  };
});
