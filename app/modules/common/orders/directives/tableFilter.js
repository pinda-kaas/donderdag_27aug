app.directive('tableFilter', function (wipService,configService) {
  return {
    restrict: 'E',
    //scope:{security:"=security"},
    templateUrl: 'views/tableFilter.html',
    controller: function ($scope)
    {
      $scope.assetTypes = wipService.getData(configService.config('assetTypes',''));

      $scope.tradeTypes = wipService.getData(configService.config('tradeTypes',''));;

      $scope.orderSourceTypes = wipService.getData(configService.config('orderSourceTypes',''));;
    },

    link: function ($scope) {


    }
  };
});
