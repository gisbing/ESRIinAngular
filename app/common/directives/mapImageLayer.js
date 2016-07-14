(function (angular) {
    angular.module('app')
        .controller('mapImageLayerController', ['esriLoader', 'configMap', function mapImageLayerController(esriLoader, configMap) {
            var vm = this;

            esriLoader.require([
                'esri/layers/MapImageLayer'
            ], function (MapImageLayer) {
                vm.addLayer = function (map, layerId){
                    angular.forEach(configMap.mapLayers, function (val){
                        if (val.mapid === layerId){
                            var mapLayer = new MapImageLayer({
                                url: val.url,
                                outFields: ['*']
                            });
                            mapLayer.visible = val.visible || true;
                            mapLayer.opacity = val.opacity || 1;
                            map.add(mapLayer);
                        }
                    })

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
                        controller.addLayer(newVal, attrs.layerid);
                    });
                }
            }

        });


})(angular);