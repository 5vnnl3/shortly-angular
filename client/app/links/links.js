angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here
  $scope.data = {};
  Links.getAll().then( function(response) {
    $scope.data.links = response;
  });

  $scope.signout = function() {
    Auth.signout();
  };
});
