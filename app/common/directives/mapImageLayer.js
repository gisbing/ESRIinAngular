(function (angular) {
    angular.module('app')
        .controller('mapImageLayerController', ['esriLoader', function mapImageLayerController(esriLoader) {
            var vm = this;

            esriLoader.require([
                'esri/layers/MapImageLayer'
            ], function (MapImageLayer) {
                vm.addLayer = function (map){

                    var mapLayer = new MapImageLayer({
                        url: 'http://10.90.6.100:6080/arcgis/rest/services/WMATA/SDE_Facilities/MapServer',
                        outFields: ['*']
                    });
                    map.add(mapLayer);
                }
            });
        }]);


})(angular);

(function (angular) {
    angular.module('app')
        .directive('mapImageLayer', function mapImageLayer() {
            return {
                restrict: 'E',
                transclude: true,
                scope: {
                    map: '=?'

                },
                controllerAs: 'mapImageLayerCtrl',
                bindToController: true,
                controller: 'mapImageLayerController',
                link: function (scope, element, attrs, controller) {
                    scope.$watch('mapImageLayerCtrl.map', function (newVal) {
                        if (newVal === undefined){
                            return;
                        }
                        controller.addLayer(newVal);
                    });
                }
            }

        });


})(angular);