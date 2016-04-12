angular.module('timeApp')
  .directive('showTime', function () {
    return {
      scope: { // THIS DIRECTIVES NEW SCOPE, IF NOT SET WILL INHERIT CONTROLLER SCOPE
        nameAttr: '=name'
      },
      restrict: 'E',
      template: '<div ng-click="timeClicked()"> Hi {{nameAttr}}, the current time is {{time}} </div>',
      link: function (scope, element, attrs) {
        var currentTime = new Date();
        scope.time = currentTime.toString();
      },
      // ADVANCED
      controller: function($scope){
        $scope.shortFormat = true;

        $scope.timeClicked = function () {
          if ($scope.shortFormat) {
            $scope.time = new Date();
            $scope.time = $scope.time.toDateString();
          }
          else {
            $scope.time = new Date();
            $scope.time = $scope.time.toString();
          }
          $scope.shortFormat = !$scope.shortFormat;
        };
      }
    };
  });
