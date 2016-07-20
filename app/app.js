(function (angular) {
    'use strict';

    angular.module('wmataapp', ['ngRoute', 'esri.map', 'ui.bootstrap'])
        .config(function ($routeProvider, appConfig) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'home/home.html',
                    controller: 'homeController'
                })
                .when('/map', {
                    templateUrl: 'map/map.html',
                    controller: 'mapController'
                })
                .otherwise({
                    redirecTo: '/home'
                });

        });
})(angular);