import {
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
} from "../../../../Source/Cesium.js";

class aoi {
  constructor(viewer, name, ul, lr) {
    this.name = name;
    var tokens = ul.split(";");
    this.west = Number(tokens[0]);
    this.north = Number(tokens[1]);
    tokens = lr.split(";");
    this.east = Number(tokens[0]);
    this.south = Number(tokens[1]);
    this.viewer = viewer;
    this.showType = "rectangle"; //none, 'rectangle', 'grid'
    this._tiles = {};
    this._gridSize = 0.5;
    this._gridSizeChanged = false;
    this._rectEntity = null;
    this._grids = [];
  }

  set gridSize(val) {
    if (this._gridSize == val) {
      return;
    }
    //----------------------------------------------
    for (let key in this._grids) {
      this.viewer.scene.primitives.remove(this._grids[key]);
    }
    this._grids = [];
    //----------------------------------------------
    for (let key in this._tiles) {
      this.viewer.entities.remove(this._tiles[key]);
    }
    this._tiles = {};
    //----------------------------------------------
    this._gridSize = val;
    this._gridSizeChanged = true;
    //----------------------------------------------
    {
      var south = this.south;
      var north = this.north;
      var west = this.west;
      var east = this.east;
      this._gridSizeChanged = false;
      let delt = this._gridSize;
      for (let lang = west; lang <= east; lang += delt) {
        let pos = [];
        for (let lat = south; lat < north; lat += delt) {
          pos.push(lang);
          pos.push(lat);
        }
        pos.push(lang);
        pos.push(north);
        var pri = this.viewer.scene.primitives.add(
          new GroundPrimitive({
            geometryInstances: new GeometryInstance({
              geometry: new CorridorGeometry({
                vertexFormat: VertexFormat.POSITION_ONLY,
                positions: Cartesian3.fromDegreesArray(pos),
                width: 8000,
              }),
              attributes: {
                color: ColorGeometryInstanceAttribute.fromColor(
                  new Color(1.0, 1.0, 0.0, 0.5)
                ),
              },
            }),
            classificationType: ClassificationType.TERRAIN,
          })
        );
        pri.show = true;
        this._grids.push(pri);
      }

      //纬度
      let langS = [];
      for (let lang = west; lang <= east; lang += delt) {
        langS.push(lang);
      }
      for (let lat = south; lat <= north; lat += delt) {
        let text = "";
        text += "" + lat + "°";
        if (lat === 0) {
          text = "";
        }
        pri = this.viewer.scene.primitives.add(
          new GroundPrimitive({
            geometryInstances: new GeometryInstance({
              geometry: new CorridorGeometry({
                vertexFormat: VertexFormat.POSITION_ONLY,
                positions: Cartesian3.fromDegreesArray(
                  langS
                    .map((long) => {
                      return [long, lat].join(",");
                    })
                    .join(",")
                    .split(",")
                    .map((item) => Number(item))
                ),
                width: 8000,
              }),
              attributes: {
                color: ColorGeometryInstanceAttribute.fromColor(
                  new Color(1.0, 1.0, 0.0, 0.5)
                ),
              },
            }),
            classificationType: ClassificationType.TERRAIN,
          })
        );
        pri.show = true;
        this._grids.push(pri);
      }
    }
    //----------------------------------------
    {
      var x_grid_num = Math.ceil((this.east - this.west) / this._gridSize);
      var y_grid_num = Math.ceil((this.north - this.south) / this._gridSize);
      for (let x = 0; x < x_grid_num; x += 1) {
        for (let y = 0; y < y_grid_num; y += 1) {
          var west = this.west + x * this._gridSize;
          var east = west + this._gridSize;
          var south = this.south + y * this._gridSize;
          var north = south + this._gridSize;
          var id = x * y_grid_num + y;
          var tileEntity = this.viewer.entities.add({
            name: this.name + "_tile" + id,
            id: this.name + "_tile" + id,
            rectangle: {
              coordinates: new Rectangle(
                CesiumMath.toRadians(west),
                CesiumMath.toRadians(south),
                CesiumMath.toRadians(east),
                CesiumMath.toRadians(north)
              ),
              material: Color.GREEN.withAlpha(0.5),
            },
          });
          tileEntity.show = false;
          this._tiles[id] = tileEntity;
        }
      }
    }
  }

  hide() {
    this._rectEntity.show = false;
    for (let i = 0; i < this._grids.length; i++) {
      this._grids[i].show = false;
    }
    for (var key in this._tiles) {
      this._tiles[key].show = false;
    }
    this.showType = "none";
  }

  resetTiles() {
    for (var key in this._tiles) {
      this._tiles[key].show = false;
    }
  }

  show(showType) {
    if (showType == this.showType) {
      return;
    }
    if (showType == "rectangle") {
      this._rectEntity.show = true;
      for (let i = 0; i < this._grids.length; i++) {
        this._grids[i].show = false;
      }
    } else if (showType == "grid") {
      this._rectEntity.show = false;
      for (let i = 0; i < this._grids.length; i++) {
        this._grids[i].show = true;
      }
    } else if (showType == "rectangle_grid") {
      this._rectEntity.show = true;
      console.log("have " + this._grids.length + " grids");
      for (let i = 0; i < this._grids.length; i++) {
        this._grids[i].show = true;
      }
    }
    this.showType = showType;
  }
  setTileSunCoverStatus(id, status) {
    var tile = this._tiles[id];
    if (status == "cover") {
      tile.show = true;
      tile.rectangle.material = Color.GREEN.withAlpha(0.5);
    } else if (status == "uncover") {
      tile.show = true;
      tile.rectangle.material = Color.BLACK.withAlpha(0.8);
    } else {
      tile.show = false;
    }
  }
}

var AOIArrayList = new Map();

function add2Scene(aoi) {
  aoi._rectEntity = aoi.viewer.entities.add({
    name: aoi.name,
    id: aoi.name,
    rectangle: {
      coordinates: new Rectangle(
        CesiumMath.toRadians(aoi.west),
        CesiumMath.toRadians(aoi.south),
        CesiumMath.toRadians(aoi.east),
        CesiumMath.toRadians(aoi.north)
      ),
      material: Color.RED.withAlpha(0.5),
    },
  });
  {
    var south = aoi.south;
    var north = aoi.north;
    var west = aoi.west;
    var east = aoi.east;
    aoi._gridSizeChanged = false;
    let delt = aoi._gridSize;
    for (let lang = west; lang <= east; lang += delt) {
      let pos = [];
      for (let lat = south; lat < north; lat += delt) {
        pos.push(lang);
        pos.push(lat);
      }
      pos.push(lang);
      pos.push(north);
      var pri = aoi.viewer.scene.primitives.add(
        new GroundPrimitive({
          geometryInstances: new GeometryInstance({
            geometry: new CorridorGeometry({
              vertexFormat: VertexFormat.POSITION_ONLY,
              positions: Cartesian3.fromDegreesArray(pos),
              width: 8000,
            }),
            attributes: {
              color: ColorGeometryInstanceAttribute.fromColor(
                new Color(1.0, 1.0, 0.0, 0.5)
              ),
            },
          }),
          classificationType: ClassificationType.TERRAIN,
        })
      );
      pri.show = false;
      aoi._grids.push(pri);
    }

    //纬度
    let langS = [];
    for (let lang = west; lang <= east; lang += delt) {
      langS.push(lang);
    }
    for (let lat = south; lat <= north; lat += delt) {
      let text = "";
      text += "" + lat + "°";
      if (lat === 0) {
        text = "";
      }
      pri = aoi.viewer.scene.primitives.add(
        new GroundPrimitive({
          geometryInstances: new GeometryInstance({
            geometry: new CorridorGeometry({
              vertexFormat: VertexFormat.POSITION_ONLY,
              positions: Cartesian3.fromDegreesArray(
                langS
                  .map((long) => {
                    return [long, lat].join(",");
                  })
                  .join(",")
                  .split(",")
                  .map((item) => Number(item))
              ),
              width: 8000,
            }),
            attributes: {
              color: ColorGeometryInstanceAttribute.fromColor(
                new Color(1.0, 1.0, 0.0, 0.5)
              ),
            },
          }),
          classificationType: ClassificationType.TERRAIN,
        })
      );
      pri.show = false;
      aoi._grids.push(pri);
    }
  }
  //----------------------------------------
  {
    var x_grid_num = Math.ceil((aoi.east - aoi.west) / aoi._gridSize);
    var y_grid_num = Math.ceil((aoi.north - aoi.south) / aoi._gridSize);
    for (let x = 0; x < x_grid_num; x += 1) {
      for (let y = 0; y < y_grid_num; y++) {
        var west = aoi.west + x * aoi._gridSize;
        var east = west + aoi._gridSize;
        var south = aoi.south + y * aoi._gridSize;
        var north = south + aoi._gridSize;
        var id = x * y_grid_num + y;
        var tileEntity = aoi.viewer.entities.add({
          name: aoi.name + "_tile" + id,
          id: aoi.name + "_tile" + id,
          rectangle: {
            coordinates: new Rectangle(
              CesiumMath.toRadians(west),
              CesiumMath.toRadians(south),
              CesiumMath.toRadians(east),
              CesiumMath.toRadians(north)
            ),
            material: Color.GREEN.withAlpha(0.5),
          },
        });
        tileEntity.show = false;
        aoi._tiles[id] = tileEntity;
      }
    }
  }

  AOIArrayList[aoi.name] = aoi;
}

function removeFromScene(aoi) {
  for (let key in aoi._grids) {
    aoi.viewer.scene.primitives.remove(aoi._grids[key]);
  }
  for (let key in aoi._tiles) {
    aoi.viewer.entities.remove(aoi._tiles[key]);
  }
  aoi.viewer.entities.remove(aoi._rectEntity);
  return;
}

function removeAOI(name) {
  var s = AOIArrayList[name];
  if (typeof s === "undefined") return;
  removeFromScene(s);
  delete AOIArrayList[name];
  return;
}

function getAOIbyName(name) {
  return AOIArrayList[name];
}

function getAOINameList() {
  return Object.keys(AOIArrayList);
}

export { aoi, removeAOI, getAOIbyName, getAOINameList, add2Scene };
