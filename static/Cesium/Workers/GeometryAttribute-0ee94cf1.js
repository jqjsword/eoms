define(["exports","./Cartesian2-716c2715","./Check-d18af7c4","./when-208fe5b0","./Transforms-f1816abc","./WebGLConstants-76bb35d1"],function(e,T,o,a,N,t){"use strict";var r=Object.freeze({NONE:0,TRIANGLES:1,LINES:2,POLYLINES:3});function I(e,t,r,n){this[0]=a.defaultValue(e,0),this[1]=a.defaultValue(r,0),this[2]=a.defaultValue(t,0),this[3]=a.defaultValue(n,0)}I.packedLength=4,I.pack=function(e,t,r){return o.Check.typeOf.object("value",e),o.Check.defined("array",t),r=a.defaultValue(r,0),t[r++]=e[0],t[r++]=e[1],t[r++]=e[2],t[r++]=e[3],t},I.unpack=function(e,t,r){return o.Check.defined("array",e),t=a.defaultValue(t,0),(r=!a.defined(r)?new I:r)[0]=e[t++],r[1]=e[t++],r[2]=e[t++],r[3]=e[t++],r},I.clone=function(e,t){if(a.defined(e))return a.defined(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t):new I(e[0],e[2],e[1],e[3])},I.fromArray=function(e,t,r){return o.Check.defined("array",e),t=a.defaultValue(t,0),(r=!a.defined(r)?new I:r)[0]=e[t],r[1]=e[t+1],r[2]=e[t+2],r[3]=e[t+3],r},I.fromColumnMajorArray=function(e,t){return o.Check.defined("values",e),I.clone(e,t)},I.fromRowMajorArray=function(e,t){return o.Check.defined("values",e),a.defined(t)?(t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3],t):new I(e[0],e[1],e[2],e[3])},I.fromScale=function(e,t){return o.Check.typeOf.object("scale",e),a.defined(t)?(t[0]=e.x,t[1]=0,t[2]=0,t[3]=e.y,t):new I(e.x,0,0,e.y)},I.fromUniformScale=function(e,t){return o.Check.typeOf.number("scale",e),a.defined(t)?(t[0]=e,t[1]=0,t[2]=0,t[3]=e,t):new I(e,0,0,e)},I.fromRotation=function(e,t){o.Check.typeOf.number("angle",e);var r=Math.cos(e),e=Math.sin(e);return a.defined(t)?(t[0]=r,t[1]=e,t[2]=-e,t[3]=r,t):new I(r,-e,e,r)},I.toArray=function(e,t){return o.Check.typeOf.object("matrix",e),a.defined(t)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t):[e[0],e[1],e[2],e[3]]},I.getElementIndex=function(e,t){return o.Check.typeOf.number.greaterThanOrEquals("row",t,0),o.Check.typeOf.number.lessThanOrEquals("row",t,1),o.Check.typeOf.number.greaterThanOrEquals("column",e,0),o.Check.typeOf.number.lessThanOrEquals("column",e,1),2*e+t},I.getColumn=function(e,t,r){o.Check.typeOf.object("matrix",e),o.Check.typeOf.number.greaterThanOrEquals("index",t,0),o.Check.typeOf.number.lessThanOrEquals("index",t,1),o.Check.typeOf.object("result",r);var n=2*t,t=e[n],n=e[1+n];return r.x=t,r.y=n,r},I.setColumn=function(e,t,r,n){o.Check.typeOf.object("matrix",e),o.Check.typeOf.number.greaterThanOrEquals("index",t,0),o.Check.typeOf.number.lessThanOrEquals("index",t,1),o.Check.typeOf.object("cartesian",r),o.Check.typeOf.object("result",n);t*=2;return(n=I.clone(e,n))[t]=r.x,n[1+t]=r.y,n},I.getRow=function(e,t,r){o.Check.typeOf.object("matrix",e),o.Check.typeOf.number.greaterThanOrEquals("index",t,0),o.Check.typeOf.number.lessThanOrEquals("index",t,1),o.Check.typeOf.object("result",r);var n=e[t],t=e[t+2];return r.x=n,r.y=t,r},I.setRow=function(e,t,r,n){return o.Check.typeOf.object("matrix",e),o.Check.typeOf.number.greaterThanOrEquals("index",t,0),o.Check.typeOf.number.lessThanOrEquals("index",t,1),o.Check.typeOf.object("cartesian",r),o.Check.typeOf.object("result",n),(n=I.clone(e,n))[t]=r.x,n[t+2]=r.y,n};var n=new T.Cartesian2;I.getScale=function(e,t){return o.Check.typeOf.object("matrix",e),o.Check.typeOf.object("result",t),t.x=T.Cartesian2.magnitude(T.Cartesian2.fromElements(e[0],e[1],n)),t.y=T.Cartesian2.magnitude(T.Cartesian2.fromElements(e[2],e[3],n)),t};var i=new T.Cartesian2;I.getMaximumScale=function(e){return I.getScale(e,i),T.Cartesian2.maximumComponent(i)},I.multiply=function(e,t,r){o.Check.typeOf.object("left",e),o.Check.typeOf.object("right",t),o.Check.typeOf.object("result",r);var n=e[0]*t[0]+e[2]*t[1],a=e[0]*t[2]+e[2]*t[3],i=e[1]*t[0]+e[3]*t[1],t=e[1]*t[2]+e[3]*t[3];return r[0]=n,r[1]=i,r[2]=a,r[3]=t,r},I.add=function(e,t,r){return o.Check.typeOf.object("left",e),o.Check.typeOf.object("right",t),o.Check.typeOf.object("result",r),r[0]=e[0]+t[0],r[1]=e[1]+t[1],r[2]=e[2]+t[2],r[3]=e[3]+t[3],r},I.subtract=function(e,t,r){return o.Check.typeOf.object("left",e),o.Check.typeOf.object("right",t),o.Check.typeOf.object("result",r),r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2],r[3]=e[3]-t[3],r},I.multiplyByVector=function(e,t,r){o.Check.typeOf.object("matrix",e),o.Check.typeOf.object("cartesian",t),o.Check.typeOf.object("result",r);var n=e[0]*t.x+e[2]*t.y,t=e[1]*t.x+e[3]*t.y;return r.x=n,r.y=t,r},I.multiplyByScalar=function(e,t,r){return o.Check.typeOf.object("matrix",e),o.Check.typeOf.number("scalar",t),o.Check.typeOf.object("result",r),r[0]=e[0]*t,r[1]=e[1]*t,r[2]=e[2]*t,r[3]=e[3]*t,r},I.multiplyByScale=function(e,t,r){return o.Check.typeOf.object("matrix",e),o.Check.typeOf.object("scale",t),o.Check.typeOf.object("result",r),r[0]=e[0]*t.x,r[1]=e[1]*t.x,r[2]=e[2]*t.y,r[3]=e[3]*t.y,r},I.negate=function(e,t){return o.Check.typeOf.object("matrix",e),o.Check.typeOf.object("result",t),t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},I.transpose=function(e,t){o.Check.typeOf.object("matrix",e),o.Check.typeOf.object("result",t);var r=e[0],n=e[2],a=e[1],e=e[3];return t[0]=r,t[1]=n,t[2]=a,t[3]=e,t},I.abs=function(e,t){return o.Check.typeOf.object("matrix",e),o.Check.typeOf.object("result",t),t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t[3]=Math.abs(e[3]),t},I.equals=function(e,t){return e===t||a.defined(e)&&a.defined(t)&&e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]},I.equalsArray=function(e,t,r){return e[0]===t[r]&&e[1]===t[r+1]&&e[2]===t[r+2]&&e[3]===t[r+3]},I.equalsEpsilon=function(e,t,r){return r=a.defaultValue(r,0),e===t||a.defined(e)&&a.defined(t)&&Math.abs(e[0]-t[0])<=r&&Math.abs(e[1]-t[1])<=r&&Math.abs(e[2]-t[2])<=r&&Math.abs(e[3]-t[3])<=r},I.IDENTITY=Object.freeze(new I(1,0,0,1)),I.ZERO=Object.freeze(new I(0,0,0,0)),I.COLUMN0ROW0=0,I.COLUMN0ROW1=1,I.COLUMN1ROW0=2,I.COLUMN1ROW1=3,Object.defineProperties(I.prototype,{length:{get:function(){return I.packedLength}}}),I.prototype.clone=function(e){return I.clone(this,e)},I.prototype.equals=function(e){return I.equals(this,e)},I.prototype.equalsEpsilon=function(e,t){return I.equalsEpsilon(this,e,t)},I.prototype.toString=function(){return"("+this[0]+", "+this[2]+")\n("+this[1]+", "+this[3]+")"};var u={POINTS:t.WebGLConstants.POINTS,LINES:t.WebGLConstants.LINES,LINE_LOOP:t.WebGLConstants.LINE_LOOP,LINE_STRIP:t.WebGLConstants.LINE_STRIP,TRIANGLES:t.WebGLConstants.TRIANGLES,TRIANGLE_STRIP:t.WebGLConstants.TRIANGLE_STRIP,TRIANGLE_FAN:t.WebGLConstants.TRIANGLE_FAN,validate:function(e){return e===u.POINTS||e===u.LINES||e===u.LINE_LOOP||e===u.LINE_STRIP||e===u.TRIANGLES||e===u.TRIANGLE_STRIP||e===u.TRIANGLE_FAN}},c=Object.freeze(u);function s(e){e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT),o.Check.typeOf.object("options.attributes",e.attributes),this.attributes=e.attributes,this.indices=e.indices,this.primitiveType=a.defaultValue(e.primitiveType,c.TRIANGLES),this.boundingSphere=e.boundingSphere,this.geometryType=a.defaultValue(e.geometryType,r.NONE),this.boundingSphereCV=e.boundingSphereCV,this.offsetAttribute=e.offsetAttribute}s.computeNumberOfVertices=function(e){o.Check.typeOf.object("geometry",e);var t,r=-1;for(t in e.attributes)if(e.attributes.hasOwnProperty(t)&&a.defined(e.attributes[t])&&a.defined(e.attributes[t].values)){var n=e.attributes[t],n=n.values.length/n.componentsPerAttribute;if(r!==n&&-1!==r)throw new o.DeveloperError("All attribute lists must have the same number of attributes.");r=n}return r};var w=new T.Cartographic,j=new T.Cartesian3,g=new N.Matrix4,L=[new T.Cartographic,new T.Cartographic,new T.Cartographic],v=[new T.Cartesian2,new T.Cartesian2,new T.Cartesian2],A=[new T.Cartesian2,new T.Cartesian2,new T.Cartesian2],S=new T.Cartesian3,M=new N.Quaternion,P=new N.Matrix4,R=new I;s._textureCoordinateRotationPoints=function(e,t,r,n){var a=T.Rectangle.center(n,w),i=T.Cartographic.toCartesian(a,r,j),a=N.Transforms.eastNorthUpToFixedFrame(i,r,g),o=N.Matrix4.inverse(a,g),u=v,c=L;c[0].longitude=n.west,c[0].latitude=n.south,c[1].longitude=n.west,c[1].latitude=n.north,c[2].longitude=n.east,c[2].latitude=n.south;for(var s=S,f=0;f<3;f++)T.Cartographic.toCartesian(c[f],r,s),s=N.Matrix4.multiplyByPointAsVector(o,s,s),u[f].x=s.x,u[f].y=s.y;var i=N.Quaternion.fromAxisAngle(T.Cartesian3.UNIT_Z,-t,M),l=N.Matrix3.fromQuaternion(i,P),h=e.length,p=Number.POSITIVE_INFINITY,y=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY,C=Number.NEGATIVE_INFINITY;for(f=0;f<h;f++)s=N.Matrix4.multiplyByPointAsVector(o,e[f],s),s=N.Matrix3.multiplyByVector(l,s,s),p=Math.min(p,s.x),y=Math.min(y,s.y),b=Math.max(b,s.x),C=Math.max(C,s.y);var m=I.fromRotation(t,R),d=A;d[0].x=p,d[0].y=y,d[1].x=p,d[1].y=C,d[2].x=b,d[2].y=y;var O=u[0],k=u[2].x-O.x,x=u[1].y-O.y;for(f=0;f<3;f++){var E=d[f];I.multiplyByVector(m,E,E),E.x=(E.x-O.x)/k,E.y=(E.y-O.y)/x}a=d[0],n=d[1],i=d[2],t=new Array(6);return T.Cartesian2.pack(a,t),T.Cartesian2.pack(n,t,2),T.Cartesian2.pack(i,t,4),t},e.Geometry=s,e.GeometryAttribute=function(e){if(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT),!a.defined(e.componentDatatype))throw new o.DeveloperError("options.componentDatatype is required.");if(!a.defined(e.componentsPerAttribute))throw new o.DeveloperError("options.componentsPerAttribute is required.");if(e.componentsPerAttribute<1||4<e.componentsPerAttribute)throw new o.DeveloperError("options.componentsPerAttribute must be between 1 and 4.");if(!a.defined(e.values))throw new o.DeveloperError("options.values is required.");this.componentDatatype=e.componentDatatype,this.componentsPerAttribute=e.componentsPerAttribute,this.normalize=a.defaultValue(e.normalize,!1),this.values=e.values},e.GeometryType=r,e.Matrix2=I,e.PrimitiveType=c});
//# sourceMappingURL=GeometryAttribute-0ee94cf1.js.map
