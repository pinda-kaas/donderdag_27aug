app.directive('tableFilter', function (wipService,configService) {
  return {
    restrict: 'E',
    //scope:{security:"=security"},
    templateUrl: 'views/tableFilter.html',
    controller: function ($scope)
    {
      console.log('tablefilter staer');

      wipService.getData(configService.config('assetType','')).then(function(data){
        $scope.assetTypes =data;
      });

      wipService.getData(configService.config('tradeType','')).then(function(data){
        $scope.tradeTypes=data;
      });

      debugger;
      wipService.getData(configService.config('orderSourceType','')).then(function(data){
        $scope.orderSourceTypes=data;
      });
    },

    link: function ($scope) {


    }
  };
});
