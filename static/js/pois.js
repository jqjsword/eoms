import {
  BillboardCollection,
  Cartesian2,
  CallbackProperty,
  Cartesian3,
  ClassificationType,
  Color,
  ColorGeometryInstanceAttribute,
  CorridorGeometry,
  defined,
  EllipsoidSurfaceAppearance,
  GeometryInstance,
  HorizontalOrigin,
  HeightReference,
  LabelStyle,
  Math as CesiumMath,
  Material,
  GroundPrimitive,
  TimeIntervalCollection,
  TimeInterval,
  Quaternion,
  SampledPositionProperty,
  JulianDate,
  PathGraphics,
  PolylineGraphics,
  Primitive,
  RectangleGeometry,
  Rectangle,
  VertexFormat,
  VerticalOrigin,
} from "../../../../Source/Cesium.js";
import viewer from "./CesiumViewer.js";
var scene = viewer.scene;

class POI {
  static POIArrayList = new Map();
  constructor(name, lon, lat, imageUrl) {
    this.name = name;
    this.lat = lat;
    this.lon = lon;
    this.image = imageUrl;
  }
  add2Scene() {
    this.billboard = viewer.entities.add({
      name: this.name,
      position: Cartesian3.fromDegrees(this.lon, this.lat, 0),
      label: {
        text: this.name,
        style: LabelStyle.FILL,
        fillColor: Color.WHITE,
        verticalOrigin: VerticalOrigin.BOTTOM,
        heightReference: HeightReference.CLAMP_TO_GROUND,
      },
      billboard: {
        image: this.image,
        height: 64,
        width: 64,
        heightReference: HeightReference.CLAMP_TO_GROUND,
        horizontalOrigin: HorizontalOrigin.CENTER,
        verticalOrigin: VerticalOrigin.BOTTOM,
      },
    });
    POI.POIArrayList[this.name] = this;
    console.log(this.billboard);
  }
  removeFromScene() {
    viewer.entities.remove(this.billboard);
    return;
  }
  static getPOIbyName(name) {
    return POI.POIArrayList[name];
  }
  static getPOINameList() {
    return Object.keys(POI.POIArrayList);
  }
}

function removePOI(name) {
  var s = POI.POIArrayList[name];
  if (typeof s === "undefined") return;
  s.removeFromScene();
  delete POI.POIArrayList[name];
  return;
}

export { POI, removePOI };
