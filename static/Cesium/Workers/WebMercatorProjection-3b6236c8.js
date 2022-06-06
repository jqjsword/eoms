define(["exports","./Cartesian2-716c2715","./when-208fe5b0","./Check-d18af7c4","./Math-3ba16bed"],function(e,a,r,n,t){"use strict";function u(e){this._ellipsoid=r.defaultValue(e,a.Ellipsoid.WGS84),this._semimajorAxis=this._ellipsoid.maximumRadius,this._oneOverSemimajorAxis=1/this._semimajorAxis}Object.defineProperties(u.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}}),u.mercatorAngleToGeodeticLatitude=function(e){return t.CesiumMath.PI_OVER_TWO-2*Math.atan(Math.exp(-e))},u.geodeticLatitudeToMercatorAngle=function(e){u.MaximumLatitude<e?e=u.MaximumLatitude:e<-u.MaximumLatitude&&(e=-u.MaximumLatitude);e=Math.sin(e);return.5*Math.log((1+e)/(1-e))},u.MaximumLatitude=u.mercatorAngleToGeodeticLatitude(Math.PI),u.prototype.project=function(e,t){var i=this._semimajorAxis,o=e.longitude*i,i=u.geodeticLatitudeToMercatorAngle(e.latitude)*i,e=e.height;return r.defined(t)?(t.x=o,t.y=i,t.z=e,t):new a.Cartesian3(o,i,e)},u.prototype.unproject=function(e,t){if(!r.defined(e))throw new n.DeveloperError("cartesian is required");var i=this._oneOverSemimajorAxis,o=e.x*i,i=u.mercatorAngleToGeodeticLatitude(e.y*i),e=e.z;return r.defined(t)?(t.longitude=o,t.latitude=i,t.height=e,t):new a.Cartographic(o,i,e)},e.WebMercatorProjection=u});
//# sourceMappingURL=WebMercatorProjection-3b6236c8.js.map
