'use strict';

angular.module('app').controller('mapController', function ($scope, esriLoader) {
    var vm = this;

    esriLoader.require([
        'esri/Map',
        'esri/widgets/Search',
        'esri/PopupTemplate',
        'esri/layers/FeatureLayer'
    ], function (Map, Search, PopupTemplate, FeatureLayer) {

        //options binding doesn't work
        vm.mapOptions = {
            extent: {
                xmin: -9177811,
                ymin: 4247000,
                xmax: -9176791,
                ymax: 4247784,
                spatialReference: 102100
            },
            zoom: 9
        };
        vm.map = new Map({
            basemap: 'streets'
        });

        vm.onViewCreated = function(view) {
            var searchWidget = new Search({
                view: view
            });
            searchWidget.startup();

            // add the search widget to the top left corner of the view
            view.ui.add(searchWidget, {
                position: 'top-left',
                index: 0
            });

            // destroy the search widget when angular scope is also being destroyed
            $scope.$on('$destroy', function() {
                searchWidget.destroy();
            });

            vm.mapView = view;
            vm.mapView.watch('center,scale,zoom,rotation', function() {
                $scope.$applyAsync('vm.mapView');
            });

        };
        vm.onViewError = function(){
            console.log('here');
        }

        var template = new PopupTemplate({
            title: 'Marriage in NY, Zip Code: {ZIP}',
            content: '<p>As of 2015, <b>{MARRIEDRATE}%</b> of the population in this zip code is married.</p>' +
            '<ul><li>{MARRIED_CY} people are married</li>' +
            '<li>{NEVMARR_CY} have never married</li>' +
            '<li>{DIVORCD_CY} are divorced</li><ul>',
            fieldInfos: [{
                fieldName: 'MARRIED_CY',
                format: {
                    digitSeparator: true,
                    places: 0
                }
            }, {
                fieldName: 'NEVMARR_CY',
                format: {
                    digitSeparator: true,
                    places: 0
                }
            }, {
                fieldName: 'DIVORCD_CY',
                format: {
                    digitSeparator: true,
                    places: 0
                }
            }]
        });

        var featureLayer = new FeatureLayer({
            url: '//services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/NYCDemographics1/FeatureServer/0',
            outFields: ['*'],
            popupTemplate: template
        });

        //vm.map.add(featureLayer);

        vm.switchBasemap = function (bname){
            vm.map.basemap = vm.basemap;

        }
    });


});
