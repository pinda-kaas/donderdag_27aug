'use strict';

app.directive('datePicker', function () {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'views/datepicker.html',
    scope: {dt: '=par1'},
    controller: function ($scope) {
      console.log('datepicker controller');
      debugger;
      $scope.today = function () {
        $scope.dt = new Date();
      };
      $scope.today();

      $scope.clear = function () {
        $scope.dt = null;
      };

      $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
      };
      $scope.toggleMin();


      $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
      };

      $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/mm/dd', 'dd-MMM-YYYY', 'shortDate'];
      $scope.format = $scope.formats[1];

      $scope.status = {
        opened: false
      };

      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var afterTomorrow = new Date();
      afterTomorrow.setDate(tomorrow.getDate() + 2);
      $scope.events =
        [
          {
            date: tomorrow,
            status: 'full'
          },
          {
            date: afterTomorrow,
            status: 'partially'
          }
        ];

      $scope.getDayClass = function (date, mode) {
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

          for (var i = 0; i < $scope.events.length; i++) {
            var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

            if (dayToCheck === currentDay) {
              return $scope.events[i].status;
            }
          }
        }
        return '';
      };
    }
  };
});

//angular.module('WIP').directive('myDate',function(dateFilter,$parse){
//  return{
//    restrict:'EAC',
//    require:'?ngModel',
//    link:function(scope,element,attrs,ngModel,ctrl){
//      ngModel.$parsers.push(function(viewValue){
//        console.log('hiero');
//        return dateFilter(viewValue,'yyyy-MM-dd');
//      });
//    }
//  }
//});

//angular.module('WIP')
//  .directive('datepickerPopup', function (){
//    return {
//      restrict: 'EAC',
//      require: 'ngModel',
//      link: function(scope, element, attr, controller) {
//        //remove the default formatter from the input directive to prevent conflict
//        console.log('hiero');
//        controller.$formatters.shift();
//      }
//    }
//  });
