'use strict';

angular.module('wmataapp').controller('tocController', function ($scope, esriLoader, esriRegistry, configMap) {
    var vm = this;

    esriRegistry.get('wmata-map').then(function(res) {
        // establish a click listener on the view in the response

    });

    vm.layers = configMap.mapLayers;

    vm.outerItems = [
        {name: 'apple', children: []},
        {name: 'rasberry', children: [{name: 'red'}]}
    ];

    esriLoader.require([
        'esri/Map',
        'esri/widgets/Search',
        'esri/PopupTemplate',
        'esri/layers/FeatureLayer'
    ], function (Map, Search, PopupTemplate, FeatureLayer) {
    });

});