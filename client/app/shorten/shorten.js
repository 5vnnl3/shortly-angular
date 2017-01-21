angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.validUrl = 'Invalid url';
  $scope.addLink = function() {
    console.log('added link!');
    return Links.addOne($scope.link);
  };

  $scope.signout = function() {
    Auth.signout();
  };

  $scope.isValidUrl = function(url) {
    if ( !url || url.length > 7 && url.slice(0, 8) === 'https://' || url.slice(0, 7) === 'http://') {
      $scope.validUrl = 'Is a valid url';
    } else {
      $scope.validUrl = 'Invalid url';
    }
  };
});
