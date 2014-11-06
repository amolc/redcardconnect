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



.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})




.controller('PlaylistCtrl', function($scope, $stateParams) {
});
