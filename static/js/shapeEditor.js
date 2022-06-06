import { Rectangle, defined, Color, Math as CesiumMath, VerticalOrigin, FeatureDetection, JulianDate, Matrix4, Transforms, ScreenSpaceEventType, Cartesian3, ScreenSpaceEventHandler, HeadingPitchRange, CallbackProperty } from '../../../../Source/Cesium.js';

class ShapeEditor extends ScreenSpaceEventHandler {
    constructor(canvas, viewer) {
        super(canvas);
        var ellipsoid = viewer.scene.globe.ellipsoid;
        this.viewer = viewer;
        this.rect = new Rectangle(0, 0, 0, 0);
        this.startFlag = false;
        this.enableFlag = false;
        this.callback = null;
        var that = this;
        //-----------------------------------------
        viewer.entities.add({
            name: 'editor shape',
            rectangle: {
                coordinates: new CallbackProperty(function() {
                    return that.rect;
                }, false),
                material: Color.RED.withAlpha(0.5)
            }
        });
        //-----------------------------------------
        this.setInputAction(function(movement) {
            if (!that.enableFlag) {
                return;
            }
            if (!that.startFlag) {
                return;
            }
            var cartesian = viewer.camera.pickEllipsoid(movement.endPosition, ellipsoid);
            if (cartesian) {
                var cartographic = ellipsoid.cartesianToCartographic(cartesian);
                that.rect.east = cartographic.longitude;
                that.rect.south = cartographic.latitude;
                that.viewer.scene.requestRender();
            }
        }, ScreenSpaceEventType.MOUSE_MOVE);

        //----------------------------------------
        this.setInputAction(function(event) {
                if (!that.enableFlag) {
                    return;
                }
                if (that.startFlag) {
                    if (that.callback) {
                        that.callback(that.rect.west,
                            that.rect.north,
                            that.rect.east,
                            that.rect.south);
                    }
                    that.disable();
                    return;
                }
                var cartesian = viewer.camera.pickEllipsoid(event.position, ellipsoid);
                if (cartesian) {
                    var cartographic = ellipsoid.cartesianToCartographic(cartesian);
                    that.rect.east = 0;
                    that.rect.south = 0;
                    that.rect.west = cartographic.longitude;
                    that.rect.north = cartographic.latitude;
                    that.viewer.scene.requestRender();
                }
                that.startFlag = true;
            },
            ScreenSpaceEventType.LEFT_CLICK);
    }

    enable() {
        this.enableFlag = true;
        this.viewer._container.style.cursor = "crosshair";
    }
    disable() {
        this.enableFlag = false;
        this.startFlag = false;
        this.viewer._container.style.cursor = "default";
    }

    setCallback(callback) {
        this.callback = callback;
    }

    get west() {
        return this.rect.west;
    }
    get east() {
        return this.rect.east;
    }
    get south() {
        return this.rect.south;
    }
    get north() {
        return this.rect.north;
    }

    removeShape() {
        this.rect.east = 0;
        this.rect.south = 0;
        this.rect.west = 0;
        this.rect.north = 0;
    }
}

export { ShapeEditor };