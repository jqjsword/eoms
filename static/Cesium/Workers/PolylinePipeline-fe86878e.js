define(["exports","./Cartesian2-716c2715","./when-208fe5b0","./Check-d18af7c4","./EllipsoidGeodesic-4bc5cec5","./EllipsoidRhumbLine-886cd793","./IntersectionTests-680c4e46","./Math-3ba16bed","./Transforms-f1816abc","./Plane-f5dfabcd"],function(a,v,g,C,e,m,w,P,T,y){"use strict";var b={numberOfPoints:function(a,e,r){e=v.Cartesian3.distance(a,e);return Math.ceil(e/r)},numberOfPointsRhumbLine:function(a,e,r){e=Math.pow(a.longitude-e.longitude,2)+Math.pow(a.latitude-e.latitude,2);return Math.max(1,Math.ceil(Math.sqrt(e/(r*r))))}},o=new v.Cartographic;b.extractHeights=function(a,e){for(var r=a.length,t=new Array(r),i=0;i<r;i++){var n=a[i];t[i]=e.cartesianToCartographic(n,o).height}return t};var A=new T.Matrix4,E=new v.Cartesian3,R=new v.Cartesian3,M=new y.Plane(v.Cartesian3.UNIT_X,0),S=new v.Cartesian3,D=new y.Plane(v.Cartesian3.UNIT_X,0),x=new v.Cartesian3,N=new v.Cartesian3,G=[];function I(a,e,r){var t=G;if(t.length=a,e===r){for(n=0;n<a;n++)t[n]=e;return t}for(var i=(r-e)/a,n=0;n<a;n++){var o=e+n*i;t[n]=o}return t}var k=new v.Cartographic,V=new v.Cartographic,L=new v.Cartesian3,_=new v.Cartesian3,O=new v.Cartesian3,B=new e.EllipsoidGeodesic,U=new m.EllipsoidRhumbLine;b.wrapLongitude=function(a,e){var r=[],t=[];if(g.defined(a)&&0<a.length){e=g.defaultValue(e,T.Matrix4.IDENTITY);var i=T.Matrix4.inverseTransformation(e,A),e=T.Matrix4.multiplyByPoint(i,v.Cartesian3.ZERO,E),n=v.Cartesian3.normalize(T.Matrix4.multiplyByPointAsVector(i,v.Cartesian3.UNIT_Y,R),R),o=y.Plane.fromPointNormal(e,n,M),i=v.Cartesian3.normalize(T.Matrix4.multiplyByPointAsVector(i,v.Cartesian3.UNIT_X,S),S),s=y.Plane.fromPointNormal(e,i,D),c=1;r.push(v.Cartesian3.clone(a[0]));for(var l=r[0],u=a.length,h=1;h<u;++h){var f,d,p=a[h];(y.Plane.getPointDistance(s,l)<0||y.Plane.getPointDistance(s,p)<0)&&(f=w.IntersectionTests.lineSegmentPlane(l,p,o,x),g.defined(f)&&(d=v.Cartesian3.multiplyByScalar(n,5e-9,N),y.Plane.getPointDistance(o,l)<0&&v.Cartesian3.negate(d,d),r.push(v.Cartesian3.add(f,d,new v.Cartesian3)),t.push(c+1),v.Cartesian3.negate(d,d),r.push(v.Cartesian3.add(f,d,new v.Cartesian3)),c=1)),r.push(v.Cartesian3.clone(a[h])),c++,l=p}t.push(c)}return{positions:r,lengths:t}},b.generateArc=function(a){var e=(a=!g.defined(a)?{}:a).positions;if(!g.defined(e))throw new C.DeveloperError("options.positions is required.");var r=e.length,t=g.defaultValue(a.ellipsoid,v.Ellipsoid.WGS84),i=g.defaultValue(a.height,0),n=Array.isArray(i);if(r<1)return[];if(1===r){var o,s=t.scaleToGeodeticSurface(e[0],_);return 0!==(i=n?i[0]:i)&&(o=t.geodeticSurfaceNormal(s,L),v.Cartesian3.multiplyByScalar(o,i,o),v.Cartesian3.add(s,o,s)),[s.x,s.y,s.z]}var c=a.minDistance;g.defined(c)||(d=g.defaultValue(a.granularity,P.CesiumMath.RADIANS_PER_DEGREE),c=P.CesiumMath.chordLength(d,t.maximumRadius));for(var l=0,u=0;u<r-1;u++)l+=b.numberOfPoints(e[u],e[u+1],c);var a=3*(l+1),h=new Array(a),f=0;for(u=0;u<r-1;u++)f=function(a,e,r,t,i,n,o,s){var c=t.scaleToGeodeticSurface(a,_),l=t.scaleToGeodeticSurface(e,O),u=b.numberOfPoints(a,e,r),c=t.cartesianToCartographic(c,k),l=t.cartesianToCartographic(l,V),h=I(u,i,n);B.setEndPoints(c,l);var f=B.surfaceDistance/u,d=s;c.height=i;var p=t.cartographicToCartesian(c,L);v.Cartesian3.pack(p,o,d),d+=3;for(var g=1;g<u;g++){var C=B.interpolateUsingSurfaceDistance(g*f,V);C.height=h[g],p=t.cartographicToCartesian(C,L),v.Cartesian3.pack(p,o,d),d+=3}return d}(e[u],e[u+1],c,t,n?i[u]:i,n?i[u+1]:i,h,f);G.length=0;var d=e[r-1],d=t.cartesianToCartographic(d,k);d.height=n?i[r-1]:i;d=t.cartographicToCartesian(d,L);return v.Cartesian3.pack(d,h,a-3),h};var q=new v.Cartographic,z=new v.Cartographic;b.generateRhumbArc=function(a){var e=(a=!g.defined(a)?{}:a).positions;if(!g.defined(e))throw new C.DeveloperError("options.positions is required.");var r=e.length,t=g.defaultValue(a.ellipsoid,v.Ellipsoid.WGS84),i=g.defaultValue(a.height,0),n=Array.isArray(i);if(r<1)return[];if(1===r){var o,s=t.scaleToGeodeticSurface(e[0],_);return 0!==(i=n?i[0]:i)&&(o=t.geodeticSurfaceNormal(s,L),v.Cartesian3.multiplyByScalar(o,i,o),v.Cartesian3.add(s,o,s)),[s.x,s.y,s.z]}for(var c,l=g.defaultValue(a.granularity,P.CesiumMath.RADIANS_PER_DEGREE),u=0,h=t.cartesianToCartographic(e[0],q),f=0;f<r-1;f++)c=t.cartesianToCartographic(e[f+1],z),u+=b.numberOfPointsRhumbLine(h,c,l),h=v.Cartographic.clone(c,q);var s=3*(u+1),d=new Array(s),p=0;for(f=0;f<r-1;f++)p=function(a,e,r,t,i,n,o,s){var a=t.cartesianToCartographic(a,k),e=t.cartesianToCartographic(e,V),c=b.numberOfPointsRhumbLine(a,e,r);a.height=0,e.height=0;var l=I(c,i,n);(U=!U.ellipsoid.equals(t)?new m.EllipsoidRhumbLine(void 0,void 0,t):U).setEndPoints(a,e);var u=U.surfaceDistance/c,h=s;a.height=i;var f=t.cartographicToCartesian(a,L);v.Cartesian3.pack(f,o,h),h+=3;for(var d=1;d<c;d++){var p=U.interpolateUsingSurfaceDistance(d*u,V);p.height=l[d],f=t.cartographicToCartesian(p,L),v.Cartesian3.pack(f,o,h),h+=3}return h}(e[f],e[f+1],l,t,n?i[f]:i,n?i[f+1]:i,d,p);G.length=0;a=e[r-1],a=t.cartesianToCartographic(a,k);a.height=n?i[r-1]:i;a=t.cartographicToCartesian(a,L);return v.Cartesian3.pack(a,d,s-3),d},b.generateCartesianArc=function(a){for(var e=b.generateArc(a),r=e.length/3,t=new Array(r),i=0;i<r;i++)t[i]=v.Cartesian3.unpack(e,3*i);return t},b.generateCartesianRhumbArc=function(a){for(var e=b.generateRhumbArc(a),r=e.length/3,t=new Array(r),i=0;i<r;i++)t[i]=v.Cartesian3.unpack(e,3*i);return t},a.PolylinePipeline=b});
//# sourceMappingURL=PolylinePipeline-fe86878e.js.map
