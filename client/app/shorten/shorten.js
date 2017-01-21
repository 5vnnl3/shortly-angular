angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function() {
    console.log('added link!');
    return Links.addOne($scope.link);
  };
});
