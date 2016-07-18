(function (angular) {

    var mapRegId = 'wmata-map';

    var layers = [{
        mapid: 'facilities',
        //url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer',
        url: 'http://10.90.6.100:6080/arcgis/rest/services/WMATA/SDE_Facilities/MapServer',
        visible: true,
        opacity: 0.3
    }]

    var configMap = {
        mapRegId: mapRegId,
        mapLayers: layers
    }

    angular.module('wmataapp').value('configMap', configMap);
})(angular);