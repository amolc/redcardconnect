// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'



var requestToken = "";
var accessToken = "";
var clientId = "683383756975-ju6l6ufitj2pfnhbkd9js4t2riqljj9e.apps.googleusercontent.com";
var clientSecret = "X3KFDDYgMoE0ZZeKD6hIoGYU ";
 






var exampleApp=angular.module('starter', ['ionic','ui.router'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider){

$stateProvider

.state('menu', {
      name: 'menu',
      url: "/menu",
      abstract: true,
      templateUrl: "partials/menu.html"
     // controller: 'SecureController'
    })



.state('login', {
      name: 'login',
      url: "/login",
      //abstract: true,
      templateUrl: "partials/login.html",
      //controller: 'LoginController'
    })



.state('secure', {
      name: 'secure',
      url: "/secure",
      //abstract: true,
      templateUrl: "partials/secure.html",
      controller: 'SecureController'
    })


.state('menu.features', {
     // name: 'features',
      url: "/features",
      //abstract: true,
      views:{
        'menuContent':{
      templateUrl: "partials/feature.html"
     // controller: 'SecureController'
    }
  }
    })

.state('features.tabs', {
      url: "/tabs",
      //abstract: true,
      tabs: {
        
        templateUrl: "partials/ontv.html",
       // controller: 'tabsCtrl'
        }
       
    })




$urlRouterProvider.otherwise('/menu');

})


exampleApp.controller('LoginController', function($scope, $http, $location) {
 
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
 
    $scope.login = function() {
        var ref = window.open('https://accounts.google.com/o/oauth2/auth?client_id=' + clientId + '&redirect_uri=http://localhost:8100/oauth2callback&scope=https://www.googleapis.com/auth/urlshortener&approval_prompt=force&response_type=code&access_type=offline', '_blank', 'location=no');
        ref.addEventListener('loadstart', function(event) {
            if((event.url).startsWith("http://localhost:8100/callback")) {
                requestToken = (event.url).split("code=")[1];
                $http({method: "post", url: "https://accounts.google.com/o/oauth2/token", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=http://localhost:8100/oauth2callback " + "&grant_type=authorization_code" + "&code=" + requestToken })
                    .success(function(data) {
                        accessToken = data.access_token;
                        $location.path("/secure");
                    })
                    .error(function(data, status) {
                        alert("ERROR: " + data);
                    });
                ref.close();
            }
        });
    }
 
    if (typeof String.prototype.startsWith != 'function') {
        String.prototype.startsWith = function (str){
            return this.indexOf(str) == 0;
        };
    }
    
});
 
exampleApp.controller('SecureController', function($scope, $http) {
 
    $scope.accessToken = accessToken;
    
});







