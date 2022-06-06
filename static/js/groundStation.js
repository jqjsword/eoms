import {
    Cartesian2,
    Cartesian3,
    LabelStyle,
    CzmlDataSource,
    Color,
    CallbackProperty,
    Math as CesiumMath,
    Quaternion,
} from "../../../../Source/Cesium.js";

// var stationInfoList = {
//     'Nuuk': [140.5, 75.2, 2000000], // lng lat radius
//     'Sodankyla': [26.58, 67.42, 2000000],
// };

var stationInfoList;

function setFacilitiesInfos(infos) {
    stationInfoList = infos;
}

class GroundStation {
    constructor(name) {
        this.name = name;
        this.lng = stationInfoList[name]['lng'];
        this.lat = stationInfoList[name]['lat'];
        this.alt = stationInfoList[name]['alt'];
        this.radius = stationInfoList[name]['radius'];
        this.entity_id = name + '_id';
    }
}

var groundStationArrayList = {};

function addStation2Scene(groundStation, viewer) {
    groundStationArrayList[groundStation.name] = groundStation;
    viewer.entities.add({
        name: groundStation.name,
        id: groundStation.entity_id,
        position: Cartesian3.fromDegrees(groundStation.lng,
            groundStation.lat, 0.0),
        ellipsoid: {
            radii: new Cartesian3(groundStation.radius,
                groundStation.radius, groundStation.radius),
            //material: Cesium.Color.RED.withAlpha(0.5),
            outline: true,
            outlineColor: Color.BLACK,
            maximumCone: CesiumMath.toRadians(90),
            material: Color.AQUAMARINE.withAlpha(0.3),
            slicePartitions: 24,
            stackPartitions: 36
        }
    });
}

function getStationsNameInScene() {
    var ret = []
    for (let key in groundStationArrayList) {
        console.log(key)
        ret.push(key);
    }
    return ret;
}

function removeGroundStation(stationName, viewer) {
    var s = groundStationArrayList[stationName];
    if (typeof(s) === 'undefined') return;
    viewer.entities.removeById(s.entity_id);
    delete groundStationArrayList[stationName];
}

function getStationByName(name) {
    return groundStationArrayList[name];
}

function getStationNameList() {
    return Object.keys(stationInfoList);
}

export { GroundStation, setFacilitiesInfos, getStationsNameInScene, addStation2Scene, removeGroundStation, getStationByName, getStationNameList };