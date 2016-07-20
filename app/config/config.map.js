(function (angular) {

    var mapRegId = 'wmata-map';

    var layers = [
        {
            mapid: 'facilities',
            url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer',
            //url: 'http://10.90.6.100:6080/arcgis/rest/services/WMATA/SDE_Facilities/MapServer',
            visible: true,
            opacity: 0.8
        },
        {
            mapid: 'boundary',
            url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Water_Network_Base_Map/MapServer',
            //url: 'http://10.90.6.100:6080/arcgis/rest/services/WMATA/BOUNDARY/MapServer',
            visible: true,
            opacity: 0.3,
            sublayers:[{
                id: 'railLine',
                name: 'rail line'
            },{
                id: 'boundary',
                name: "boundary"
            }]
        }
    ]

    var configMap = {
        mapRegId: mapRegId,
        mapLayers: layers
    }

    angular.module('wmataapp').value('configMap', configMap);
})(angular);