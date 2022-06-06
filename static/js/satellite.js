import { getLatLngObj, getSatelliteInfo } from "../tle/tlejs.esm.js";
import {
  defined,
  Cartesian2,
  Cartesian3,
  LabelStyle,
  Color,
  ColorGeometryInstanceAttribute,
  CallbackProperty,
  FrustumGeometry,
  FrustumOutlineGeometry,
  GeometryInstance,
  ShowGeometryInstanceAttribute,
  TimeIntervalCollection,
  TimeInterval,
  Math as CesiumMath,
  Matrix3,
  Matrix4,
  Quaternion,
  SampledPositionProperty,
  Transforms,
  JulianDate,
  PathGraphics,
  PerInstanceColorAppearance,
  PerspectiveFrustum,
  PolylineGraphics,
  Primitive,
  VertexFormat,
} from "../../../../Source/Cesium.js";

var satelliteInfos;
var trackTimeDur = 30; //minutes
var exaggeration = 3;

function setTrackTimeDisplayDur(m) {
  trackTimeDur = m;
}

function setTrackExaggeration(e) {
  exaggeration = e;
}
class Sensor {
  constructor(type) {
    this.type = type;
    //for simple cone sensor type
    this.half_angle = 30; //degree
    //for rectangle sensor type
    this.horizontal_half_angle = 30; //degree
    this.vertical_half_angle = 60; //degree
  }
}

class Satellite {
  constructor(name) {
    this.name = name;
    this.height = satelliteInfos[name]["alt"];
    this.footPrintRadius = satelliteInfos[name]["scanRadius2"];
    this.entity_id = name + "_id";
    this.footprint_id = name + "_footprint_id";
    this.viewFrustum_id = name + "_frustum_id";
    this.entityTrack_id = name + "_entityTrack_id";
    this.viewCCDFrustum_id = name + "_ccd_frustum_id";
    this.viewCCDOutLineFrustum_id = name + "_ccd_outline_frustum_id";
    //this.entityTrack = new SampledPositionProperty();
    this.mode = "realTime";
    this.trackPos = [];
    this.sensor = new Sensor("cone", 30, 30, 30);
    this.lastPosition = undefined;
    this.viewer = undefined;
  }

  setSensorParam(par) {
    var t = par["type"];
    var c_half_angle = par["cone_half_angle"];
    var h_half_angle = par["horizontal_half_angle"];
    var v_half_angle = par["vertical_half_angle"];

    console.log(t);
    console.log(c_half_angle);
    console.log(h_half_angle);
    console.log(v_half_angle);
    if (this.sensor === undefined) {
      this.sensor = new Sensor(t, c_half_angle, h_half_angle, v_half_angle);
    } else {
      this.sensor.type = t;
      this.sensor.half_angle = c_half_angle;
      if (t == "cone") {
        this.CCDFrustumBody.show = false;
        this.CCDFrustumOutline.show = false;
        this.frustum._cylinder._bottomRadius._value =
          this.height * Math.tan((this.sensor.half_angle * Math.PI) / 180 / 2);
        this.frustum.show = true;

        this.footPrint._ellipse._semiMajorAxis._value = this.frustum._cylinder._bottomRadius._value;
        this.footPrint._ellipse._semiMinorAxis._value = this.frustum._cylinder._bottomRadius._value;
        this.footPrint.show = true;
      } else if (t == "rectangle") {
        this.frustum.show = false;
        this.footPrint.show = false;
        if (
          h_half_angle === this.sensor.horizontal_half_angle &&
          v_half_angle === this.sensor.vertical_half_angle
        ) {
          this.CCDFrustumBody.show = true;
          this.CCDFrustumOutline.show = true;
          return;
        } else {
          this.sensor.horizontal_half_angle = h_half_angle;
          this.sensor.vertical_half_angle = v_half_angle;
          console.log("half angles changed.");
          _createFrustum(this);
          this.CCDFrustumBody.show = true;
          this.CCDFrustumOutline.show = true;
        }
      }
    }
  }

  setRealTimeMode() {
    this.mode = "realTime";
  }

  resetTrack() {
    if (this.entityTrack) delete this.entityTrack;
    this.entityTrack = new SampledPositionProperty();
    console.log("从新设置轨迹");
  }

  setSimulationMode(start, stop) {
    this.mode = "simulation";
    this.availability = new TimeIntervalCollection([
      new TimeInterval({
        start: start,
        stop: stop,
      }),
    ]);
    console.log("设置模拟仿真模式");
  }

  /*time: timestamp
            position: is latlon
          */
  addPositionSample(time, lnglatelv) {
    console.log("add time-position, time is ", time);
    var epochJulian = JulianDate.fromDate(time);
    console.log("julia time is ", epochJulian);
    var position = Cartesian3.fromDegrees(
      lnglatelv.lng,
      lnglatelv.lat,
      lnglatelv.elv
    );
    this.entityTrack.addSample(epochJulian, position);
  }

  getEntityTrack() {
    return this.entityTrack;
  }

  getCurrentPostion() {
    var ts = new Date().getTime();
    let tle = satelliteInfos[this.name]["tle"];
    const { lat, lng, height } = getSatelliteInfo(tle, ts);
    //3 times exaggeration
    return Cartesian3.fromDegrees(lng, lat, height * 1000 * exaggeration);
  }

  // getCurrentHeight() {
  //   return this.height;
  // }

  getCurrentFootprint() {
    var ts = new Date().getTime();
    // let tle = satellite_tle_map[this.name];
    let tle = satelliteInfos[this.name]["tle"];
    const latLonObj = getLatLngObj(tle, ts);
    return Cartesian3.fromDegrees(latLonObj.lng, latLonObj.lat);
  }

  getPosition(time) {
    // let tle = satellite_tle_map[this.name];
    let tle = satelliteInfos[this.name]["tle"];
    // const latLonObj = getLatLngObj(tle, time);
    const { lat, lng, height } = getSatelliteInfo(tle, time);
    return Cartesian3.fromDegrees(lng, lat, height * 1000 * exaggeration);
  }

  getLatLng(time) {
    // let tle = satellite_tle_map[this.name];
    let tle = satelliteInfos[this.name]["tle"];
    const latLonObj = getLatLngObj(tle, time);
    return latLonObj;
  }
  getFootprint(time) {
    // let tle = satellite_tle_map[this.name];
    let tle = satelliteInfos[this.name]["tle"];
    const latLonObj = getLatLngObj(tle, time);
    return Cartesian3.fromDegrees(latLonObj.lng, latLonObj.lat);
  }

  getTrackPositons(curTimeJ, result) {
    this.trackPos = [];
    var startTimeJ = JulianDate.addMinutes(
      curTimeJ,
      -trackTimeDur / 2,
      new JulianDate()
    );
    var d = JulianDate.toDate(startTimeJ);
    var startTimestamp = d.getTime();
    var endTimeJ = JulianDate.addMinutes(
      curTimeJ,
      trackTimeDur / 2,
      new JulianDate()
    );
    d = JulianDate.toDate(endTimeJ);
    var endTimestamp = d.getTime();
    var t = startTimestamp;
    while (t < endTimestamp) {
      var pos = this.getPosition(t);
      this.trackPos.push(pos);
      t += 100000;
    }
    return this.trackPos;
  }
}

var satelliteArrayList = new Map();

function setSatellitesInfos(infos) {
  satelliteInfos = infos;
}

const colors = [
  "#E74C3C",
  "#DA3C78",
  "#7E349D",
  "#0077C0",
  "#07ABA0",
  "#0EAC51",
  "#F1892D",
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function _createFrustum(satellite) {
  var color = Color.fromCssColorString(getRandomColor()).withAlpha(0.7);
  var fov = (2 * (satellite.sensor.horizontal_half_angle * Math.PI)) / 180;
  var aspectRatio =
    satellite.sensor.horizontal_half_angle /
    satellite.sensor.vertical_half_angle;
  var frustum = new PerspectiveFrustum({
    fov: fov,
    aspectRatio: aspectRatio,
    near: 0.2,
    far: 1,
  });
  var bodyInstance = new GeometryInstance({
    geometry: new FrustumGeometry({
      frustum: frustum,
      origin: Cartesian3.ZERO,
      orientation: Quaternion.IDENTITY,
      vertexFormat: VertexFormat.ALL,
    }),
    id: satellite.viewCCDFrustum_id,
    attributes: {
      color: ColorGeometryInstanceAttribute.fromColor(color),
      show: new ShowGeometryInstanceAttribute(true),
    },
    modelMatrix: Matrix4.IDENTITY,
  });
  var outLineInstance = new GeometryInstance({
    geometry: new FrustumOutlineGeometry({
      frustum: frustum,
      origin: Cartesian3.ZERO,
      orientation: Quaternion.IDENTITY,
      vertexFormat: VertexFormat.ALL,
    }),
    id: satellite.viewCCDOutLineFrustum_id,
    attributes: {
      color: ColorGeometryInstanceAttribute.fromColor(Color.GREEN),
      show: new ShowGeometryInstanceAttribute(true),
    },
    modelMatrix: Matrix4.IDENTITY,
  });
  if (satellite.CCDFrustumOutline !== undefined) {
    if (satellite.viewer !== undefined) {
      satellite.viewer.scene.primitives.remove(satellite.CCDFrustumOutline);
    }
  }
  satellite.CCDFrustumOutline = new Primitive({
    geometryInstances: [outLineInstance],
    appearance: new PerInstanceColorAppearance({
      translucent: false,
      flat: true,
    }),
  });
  if (satellite.CCDFrustumBody !== undefined) {
    if (satellite.viewer !== undefined) {
      satellite.viewer.scene.primitives.remove(satellite.CCDFrustumBody);
    }
  }
  satellite.CCDFrustumBody = new Primitive({
    geometryInstances: [bodyInstance],
    appearance: new PerInstanceColorAppearance({
      translucent: true,
      flat: true,
    }),
  });
  satellite.viewer.scene.primitives.add(satellite.CCDFrustumOutline);
  satellite.viewer.scene.primitives.add(satellite.CCDFrustumBody);
  return;
}

function add2Scene(satellite, viewer) {
  satellite.viewer = viewer;
  var color = Color.fromCssColorString(getRandomColor()).withAlpha(0.7);
  //add satellites footprint entity
  satellite.footPrint = viewer.entities.add({
    position: new CallbackProperty(function (time, result) {
      if (satellite.mode == "simulation") {
        var d = JulianDate.toDate(time);
        var now = d.getTime();
        return satellite.getFootprint(now);
      } else {
        return satellite.getCurrentFootprint();
      }
    }, false),
    name: "footprint of " + satellite.name,
    id: satellite.footprint_id,
    ellipse: {
      semiMinorAxis: satellite.footPrintRadius,
      semiMajorAxis: satellite.footPrintRadius,
      material: color,
    },
  });
  //---------------------------------------------------
  _createFrustum(satellite);
  satellite.CCDFrustumBody.show = false;
  satellite.CCDFrustumOutline.show = false;
  //---------------------------------------------------
  //add satellite entity
  satellite.entity = viewer.entities.add({
    name: satellite.name,
    id: satellite.entity_id,
    position: new CallbackProperty(function (time, result) {
      if (satellite.mode == "realTime") {
        var pos = satellite.getCurrentPostion();
        var footprintPosition = satellite.getCurrentFootprint();
      } else {
        var d = JulianDate.toDate(time);
        var now = d.getTime();
        var pos = satellite.getPosition(now);
        var footprintPosition = satellite.getFootprint(now);
      }
      if (satellite.sensor.type !== "rectangle") {
        satellite.lastPosition = pos;
        return pos;
      }
      //卫星前进的方向矢量。
      var velocity = new Cartesian3(0, 0, 0);
      Cartesian3.subtract(pos, satellite.lastPosition, velocity);
      //如果卫星的位置没变化,直接返回上次的位置
      if (velocity.x === 0 || velocity.y === 0 || velocity.z === 0) {
        return satellite.lastPosition;
      }
      var satllitePosition = pos;
      // 朝向矢量
      var vector = new Cartesian3(0, 0, 0);
      Cartesian3.subtract(pos, footprintPosition, vector);
      var r = Cartesian3.distance(footprintPosition, pos);
      var angle2Z = Math.acos(vector.z / r) + 3.1415926;
      //z unit
      var zunit = new Cartesian3(0, 0, 1);
      var axis = new Cartesian3(0, 0, 0);
      Cartesian3.cross(zunit, vector, axis);
      // var naxis = new Cartesian3(0, 0, 0);
      // Cartesian3.normalize(axis, naxis);
      // var x = Math.sin(angle2Z / 2) * naxis.x;
      // var y = Math.sin(angle2Z / 2) * naxis.y;
      // var z = Math.sin(angle2Z / 2) * naxis.z;
      // var w = Math.cos(angle2Z / 2);
      // var rot = new Quaternion(x, y, z, w);
      var rot = Quaternion.fromAxisAngle(axis, angle2Z);
      //下面的代码使得CCD传感器跟前进方向垂直
      if (satellite.lastPosition !== undefined) {
        //y方向被rot矩阵旋转了， 要求出旋转后的Y方向。
        var forwardAxis = new Cartesian3(1, 0, 0);
        var m = Matrix3.fromQuaternion(rot, new Matrix3());
        var newForwardDirection = Matrix3.multiplyByVector(
          m,
          forwardAxis,
          new Cartesian3()
        );
        //求 velocity 和 newY 的夹角
        try {
          var angle = Cartesian3.angleBetween(velocity, newForwardDirection);
          // 求四元数
          Cartesian3.cross(velocity, newForwardDirection, axis);
          var rot1 = Quaternion.fromAxisAngle(
            axis,
            -angle,
            new Quaternion(0, 0, 0, 0)
          );
          rot = Quaternion.multiply(rot1, rot, rot);
        } catch (err) {
          console.log(velocity);
          console.log(newY);
        }
      }
      // 设置视锥的位置,Primitive没有callbackProperty
      var modelMatrix = Matrix4.fromTranslationQuaternionRotationScale(
        pos,
        rot,
        new Cartesian3(r, r, r) // scale
      );
      satellite.CCDFrustumBody.modelMatrix = modelMatrix;
      satellite.CCDFrustumOutline.modelMatrix = modelMatrix;
      satellite.lastPosition = pos;
      satellite.oldRotation = rot;
      return pos;
    }, false),
    label: {
      //文字标签
      text: satellite.name,
      font: "500 30px Helvetica", // 15pt monospace
      scale: 0.5,
      style: LabelStyle.FILL,
      fillColor: Color.WHITE,
      pixelOffset: new Cartesian2(-8, -35), //偏移量
      showBackground: true,
      backgroundColor: color,
    },
    billboard: {
      //图标
      image: "./static/SATELLITE.png",
      width: 50,
      height: 50,
    },
    path: new PathGraphics({
      width: 3,
    }),
  });

  //add track entity
  satellite.orbitTrack = viewer.entities.add({
    name: "orbitTrack of " + satellite.name,
    id: satellite.entityTrack_id,
    polyline: new PolylineGraphics({
      width: 1.5,
      material: color,
      positions: new CallbackProperty(function (time, result) {
        //TODO
        if (satellite.mode == "simulation") {
          return satellite.getTrackPositons(time, result);
        } else {
          var now = new Date();
          var nowJ = JulianDate.fromDate(now);
          return satellite.getTrackPositons(nowJ, result);
        }
      }, false),
    }),
  });

  //add frustum
  satellite.frustum = viewer.entities.add({
    id: satellite.viewFrustum_id,
    orientation: new CallbackProperty((time, result) => {
      var satllitePosition = satellite.getCurrentPostion();
      var footprintPosition = satellite.getCurrentFootprint();
      if (satellite.mode == "simulation") {
        var d = JulianDate.toDate(time);
        var now = d.getTime();
        footprintPosition = satellite.getFootprint(now);
        satllitePosition = satellite.getPosition(now);
      }
      // 朝向矢量
      var vector = new Cartesian3(0, 0, 0);
      Cartesian3.subtract(satllitePosition, footprintPosition, vector);
      var r = Cartesian3.distance(footprintPosition, satllitePosition);
      var angle2Z = Math.acos(vector.z / r);
      //z unit
      var zunit = new Cartesian3(0, 0, 1);
      var axis = new Cartesian3(0, 0, 0);
      var naxis = new Cartesian3(0, 0, 0);
      Cartesian3.cross(zunit, vector, axis);
      Cartesian3.normalize(axis, naxis);
      var x = Math.sin(angle2Z / 2) * naxis.x;
      var y = Math.sin(angle2Z / 2) * naxis.y;
      var z = Math.sin(angle2Z / 2) * naxis.z;
      var w = Math.cos(angle2Z / 2);
      var q = new Quaternion(x, y, z, w);
      return q;
    }, false),

    cylinder: {
      length: new CallbackProperty((time, result) => {
        var startPosition = satellite.getCurrentFootprint();
        var stopPosition = satellite.getCurrentPostion();
        if (satellite.mode == "simulation") {
          var d = JulianDate.toDate(time);
          var now = d.getTime();
          startPosition = satellite.getFootprint(now);
          stopPosition = satellite.getPosition(now);
        }
        return Cartesian3.distance(startPosition, stopPosition);
      }, false),
      topRadius: 0.0, // 起点
      // bottomRadius: 130000.0,
      // todo 根据缩放大小动态修改底部半径
      bottomRadius: satellite.footPrintRadius,
      material: new Color.fromCssColorString("rgba(82,255,211,0.3)"),
    },
    position: new CallbackProperty((time, result) => {
      var startPosition = satellite.getCurrentFootprint();
      var stopPosition = satellite.getCurrentPostion();
      if (satellite.mode == "simulation") {
        var d = JulianDate.toDate(time);
        var now = d.getTime();
        startPosition = satellite.getFootprint(now);
        stopPosition = satellite.getPosition(now);
      }
      // 圆锥体位置以中点位置为准
      var res = new Cartesian3(0, 0, 0);
      Cartesian3.midpoint(startPosition, stopPosition, res);
      return res;
    }, false),
  });

  satelliteArrayList[satellite.name] = satellite;
}

function getSatelliteNameList() {
  return Object.keys(satelliteInfos);
}

function getSateTLEllitebyName(name) {
  // return satellite_tle_map[name];
  return satelliteInfos[this.name]["tle"];
}

function getSatellitebyName(name) {
  return satelliteArrayList[name];
}

function getSatelliteNameInScene() {
  var ret = [];
  for (let key in satelliteArrayList) {
    ret.push(key);
  }
  return ret;
}

function removeSatellite(satName, viewer) {
  var s = satelliteArrayList[satName];
  if (typeof s === "undefined") return;
  viewer.entities.removeById(s.entity_id);
  viewer.entities.removeById(s.footprint_id);
  viewer.entities.removeById(s.viewFrustum_id);
  viewer.entities.removeById(s.entityTrack_id);
  viewer.scene.primitives.remove(s.CCDFrustumBody);
  viewer.scene.primitives.remove(s.CCDFrustumOutline);
  delete satelliteArrayList[satName];
}

export {
  setTrackExaggeration,
  setTrackTimeDisplayDur,
  Satellite,
  setSatellitesInfos,
  getSatellitebyName,
  add2Scene,
  getSatelliteNameInScene,
  getSateTLEllitebyName,
  removeSatellite,
  getSatelliteNameList,
};
export default Satellite;
