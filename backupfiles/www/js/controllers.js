angular.module('starter.controllers', [])

.controller('AppCtrl', function( $scope, $state, $ionicSideMenuDelegate ) {
    $scope.toggleMenu = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };  
})



.controller('HomeCtrl', function($scope, $ionicNavBarDelegate) {
  $scope.hasFocus = false;
  $scope.setFocus = function(){
    $scope.hasFocus = true;
    $ionicNavBarDelegate.setTitle('');

  };

  $scope.noFocus = function(){
    $scope.hasFocus = false;
    $ionicNavBarDelegate.setTitle('Welcome');
  }

})

function scrollCtrl($scope, $http) {
  $scope.items = [];
  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });
}
