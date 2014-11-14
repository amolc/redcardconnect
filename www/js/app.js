
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider



    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })
    /*.state('app.menu', {
      url: "/menu",
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })*/
    

.state('app.login', {
      url: "/login",
      views:{
            'menuContent':{
      templateUrl: "templates/login.html",
    
       
  }
  }
})
.state('app.loginform', {
      url: "/loginform",
      views:{
            'menuContent':{
      templateUrl: "templates/loginform.html",
  
       
  }
  }
})

.state('app.home', {
      url: "/home",
      views:{
            'menuContent':{
      templateUrl: "templates/home1.html",
  
       
  }
  }
}) 
    .state('app.radio', {
      url: "/radio",
      views: {
        'menuContent' :{
          templateUrl: "templates/radio.html"
        }
      }
    })
.state('app.radio.articles1', {
      url: "/articles1",
      views: {
        'menuContent' :{
          templateUrl: "templates/radioart.html"
        }
      }
    })

.state('app.radio.articles', {
      url: "/articles",
      views: {
        'menuContent' :{
          templateUrl: "templates/radioart1.html"
        }
      }
    })
  
    .state('app.tv', {
      url: "/tv",
      views: {
        'menuContent' :{
          templateUrl: "templates/tv.html"
        }
      }
    })
    .state('app.tvarticles', {
      url: "/tvarticles",
      views: {
        'menuContent' :{
            templateUrl: "templates/tvart1.html",
            controller: "tvartCtrl" 
        }
      }
    })
    .state('app.digital', {
      url: "/digital",
      views: {
        'menuContent' :{
          templateUrl: "templates/digital.html",
          
        }
      }
    })
      .state('app.social', {
      url: "/social",
      views: {
        'menuContent' :{
          templateUrl: "templates/social.html",
          
        }
      }
    })
  .state('app.list', {
      url: "/list",
      views: {
        'menuContent' :{
          templateUrl: "templates/list.html",
          controller:"tvartCtrl"
        }
      }
    })

.state('app.setting', {
      url: "/setting",
      views: {
        'menuContent' :{
          templateUrl: "templates/setting.html",
          
        }
      }
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});


