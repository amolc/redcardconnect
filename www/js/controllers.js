angular.module('starter.controllers', [])

.controller('AppCtrl', function( $scope, $state, $ionicSideMenuDelegate ) {
    $scope.toggleMenu = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.jumparent = function(){

<<<<<<< HEAD
      $state.go('app.radio');
      console.log( $state.$current );
=======
      $state.go('prev');
>>>>>>> 04353a09f21c23548cc49de863bdd112b3951c64
    }
  
})



.controller('headerCtrl', function($scope,$state ,$ionicNavBarDelegate) {
  $scope.hasFocus = false;
  $scope.setFocus = function(){
    $scope.hasFocus = true;
     //$state.go('app.home.radio');
  //  $ionicNavBarDelegate.setTitle('');
    

  };

 $scope.noFocus = function(){
    $scope.hasFocus = false;
    //$ionicNavBarDelegate.setTitle('Welcome'); 
    //state.go('app,home.radio');
  

  }
    


})
.controller('tvartCtrl', function($scope,$state,$ionicNavBarDelegate){
     /*   $scope.click=function(user) {
          $state.go('app.home.tv');
        };*/

         $scope.hasFocus = false;
  $scope.setFocus = function(){
    $scope.hasFocus =true;
     $state.go('app.home.radio');
    //$ionicNavBarDelegate.setTitle('');

  };

 $scope.noFocus = function(){
    $scope.hasFocus = false;
    //$ionicNavBarDelegate.setTitle('Welcome'); 
    state.go('app,home.radio');
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
