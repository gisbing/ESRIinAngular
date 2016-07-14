(function (angular) {

    var layers = [{
        mapid: 'facilities',
        url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer', // 'http://10.90.6.100:6080/arcgis/rest/services/WMATA/SDE_Facilities/MapServer',
        visible: true,
        opacity: 0.3
    }]

    var configMap = {
        mapLayers: layers
    }

    angular.module('app').value('configMap', configMap);
})(angular);