angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.addLink = function() {
    console.log('added link!');
    return Links.addOne($scope.link);
  };

  $scope.signout = function() {
    Auth.signout();
  };
  // $scope.logout = function() {
  //   Links.logout(?)
  //   .then(function() {
  //     $window.localStorage.setItem('com.shortly', null);
  //     console.log($window.localStorage.getItem('com.shortly'));
  //   })
  //   .catch
  // };
});
