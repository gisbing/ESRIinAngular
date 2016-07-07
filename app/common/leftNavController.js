'use strict';

angular.module('app').controller('LeftNavController', function ($scope, appConfig){
   var vm = this;

    $scope.$on('$routeChangeStart', function(event, next){
       vm.tocShow = isTocPath;
    });
});