(function (angular){
    angular.module('wmataapp').directive('layerProperties', ['esriLoader', 'esriRegistry', 'configMap',
        function (esriLoader, esriRegistry, configMap){

        var controller = function ($scope, $element, $attrs) {

            var self = this;
            this.visible = false;
            esriRegistry.get(configMap.mapRegId).then(function(res) {
                //console.log(lId)
                self.thisLayer = res.view.map.findLayerById($scope.layerPropertiesCtrl.layerId);
                self.visible = self.thisLayer.visible;
                //$scope.$apply();
            });


            this.getLayer = function (map, id){
                vm.thisLayer = map.findLayerById(id);
                //this.setVisibility(thisLayer.visible);
            }

            this.setVisibility = function (){
                self.thisLayer.visible = self.visible;
            }

        }


        return {
            restrict: 'E',
            scope: {
                map: '=?',
                layerId: '@?',
                visible: '=?'
            },
            controller: controller,
            controllerAs: 'layerPropertiesCtrl',
            bindToController: true,
            templateUrl: 'common/directives/layerProperties/layerProperties.html',
            link: function (scope, element, attrs, controller) {
                scope.$watch('mapImageLayerCtrl.map', function (newVal) {
                    if (newVal === undefined){
                        return;
                    }
                    controller.getLayer(newVal, attrs.layerid);
                });
            }
        }
    }])
})(angular);