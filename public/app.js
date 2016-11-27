//Main file
var app = angular.module('myTextbook', ['addTextbookCtrl', 'homeCtrl', 'searchCtrl', 'detailCtrl', 'ngRoute', 'angular-filepicker'])
    .config(function($routeProvider, filepickerProvider){
        //The route provider handles the client request to switch route
        $routeProvider
            .when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'homeController'
            })
            .when('/search', {
                templateUrl: 'partials/searchTextbook.html',
                controller: 'searchController'
            })
            .when('/detail/:id', {
                templateUrl: 'partials/detailTextbook.html',
                controller: 'detailController'
            })
            .when('/addTextbook', {          
                templateUrl: 'partials/addTextbook.html',
                controller: 'addTextbookController'            
            })
            //Redirect to addTextbook in all the other cases.
            .otherwise({redirectTo:'/home'});
            //Add the API key to use filestack service
            filepickerProvider.setKey('AslUn8qpRb6pCaGKcexQsz');
});