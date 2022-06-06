define(["./Transforms-f1816abc","./Cartesian2-716c2715","./Check-d18af7c4","./when-208fe5b0","./Math-3ba16bed","./ArcType-dc1c5aee","./arrayRemoveDuplicates-28d5a12e","./ComponentDatatype-549ec0d3","./EllipsoidGeodesic-4bc5cec5","./EllipsoidRhumbLine-886cd793","./EncodedCartesian3-7a9c1496","./GeometryAttribute-0ee94cf1","./IntersectionTests-680c4e46","./Plane-f5dfabcd","./WebMercatorProjection-3b6236c8","./RuntimeError-7f634f5d","./WebGLConstants-76bb35d1"],function(Oe,be,d,B,Ae,G,j,ke,T,V,Pe,Se,Y,r,e,a,t){"use strict";function n(e){e=B.defaultValue(e,B.defaultValue.EMPTY_OBJECT),this._ellipsoid=B.defaultValue(e.ellipsoid,be.Ellipsoid.WGS84),this._rectangle=B.defaultValue(e.rectangle,be.Rectangle.MAX_VALUE),this._projection=new Oe.GeographicProjection(this._ellipsoid),this._numberOfLevelZeroTilesX=B.defaultValue(e.numberOfLevelZeroTilesX,2),this._numberOfLevelZeroTilesY=B.defaultValue(e.numberOfLevelZeroTilesY,1)}Object.defineProperties(n.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},rectangle:{get:function(){return this._rectangle}},projection:{get:function(){return this._projection}}}),n.prototype.getNumberOfXTilesAtLevel=function(e){return this._numberOfLevelZeroTilesX<<e},n.prototype.getNumberOfYTilesAtLevel=function(e){return this._numberOfLevelZeroTilesY<<e},n.prototype.rectangleToNativeRectangle=function(e,a){d.Check.defined("rectangle",e);var t=Ae.CesiumMath.toDegrees(e.west),n=Ae.CesiumMath.toDegrees(e.south),i=Ae.CesiumMath.toDegrees(e.east),e=Ae.CesiumMath.toDegrees(e.north);return B.defined(a)?(a.west=t,a.south=n,a.east=i,a.north=e,a):new be.Rectangle(t,n,i,e)},n.prototype.tileXYToNativeRectangle=function(e,a,t,n){n=this.tileXYToRectangle(e,a,t,n);return n.west=Ae.CesiumMath.toDegrees(n.west),n.south=Ae.CesiumMath.toDegrees(n.south),n.east=Ae.CesiumMath.toDegrees(n.east),n.north=Ae.CesiumMath.toDegrees(n.north),n},n.prototype.tileXYToRectangle=function(e,a,t,n){var i=this._rectangle,r=this.getNumberOfXTilesAtLevel(t),s=this.getNumberOfYTilesAtLevel(t),t=i.width/r,r=e*t+i.west,e=(e+1)*t+i.west,t=i.height/s,s=i.north-a*t,t=i.north-(a+1)*t;return(n=!B.defined(n)?new be.Rectangle(r,t,e,s):n).west=r,n.south=t,n.east=e,n.north=s,n},n.prototype.positionToTileXY=function(e,a,t){var n=this._rectangle;if(be.Rectangle.contains(n,e)){var i=this.getNumberOfXTilesAtLevel(a),r=this.getNumberOfYTilesAtLevel(a),s=n.width/i,o=n.height/r,a=e.longitude;n.east<n.west&&(a+=Ae.CesiumMath.TWO_PI);s=(a-n.west)/s|0;i<=s&&(s=i-1);o=(n.north-e.latitude)/o|0;return(r<=o&&(o=r-1),B.defined(t))?(t.x=s,t.y=o,t):new be.Cartesian2(s,o)}};var s=new be.Cartesian3,o=new be.Cartesian3,l=new be.Cartographic,u=new be.Cartesian3,c=new be.Cartesian3,C=new Oe.BoundingSphere,p=new n,h=[new be.Cartographic,new be.Cartographic,new be.Cartographic,new be.Cartographic],g=new be.Cartesian2,Le={};function f(e){be.Cartographic.fromRadians(e.east,e.north,0,h[0]),be.Cartographic.fromRadians(e.west,e.north,0,h[1]),be.Cartographic.fromRadians(e.east,e.south,0,h[2]),be.Cartographic.fromRadians(e.west,e.south,0,h[3]);for(var a=0,t=0,n=0,i=0,r=Le._terrainHeightsMaxLevel,s=0;s<=r;++s){for(var o=!1,l=0;l<4;++l){var u=h[l];if(p.positionToTileXY(u,s,g),0===l)n=g.x,i=g.y;else if(n!==g.x||i!==g.y){o=!0;break}}if(o)break;a=n,t=i}if(0!==s)return{x:a,y:t,level:r<s?r:s-1}}Le.initialize=function(){var e=Le._initPromise;return B.defined(e)?e:(e=Oe.Resource.fetchJson(Oe.buildModuleUrl("Assets/approximateTerrainHeights.json")).then(function(e){Le._terrainHeights=e}),Le._initPromise=e)},Le.getMinimumMaximumHeights=function(e,a){if(d.Check.defined("rectangle",e),!B.defined(Le._terrainHeights))throw new d.DeveloperError("You must call ApproximateTerrainHeights.initialize and wait for the promise to resolve before using this function");a=B.defaultValue(a,be.Ellipsoid.WGS84);var t=f(e),n=Le._defaultMinTerrainHeight,i=Le._defaultMaxTerrainHeight;return B.defined(t)&&(t=t.level+"-"+t.x+"-"+t.y,t=Le._terrainHeights[t],B.defined(t)&&(n=t[0],i=t[1]),a.cartographicToCartesian(be.Rectangle.northeast(e,l),s),a.cartographicToCartesian(be.Rectangle.southwest(e,l),o),be.Cartesian3.midpoint(o,s,u),a=a.scaleToGeodeticSurface(u,c),n=B.defined(a)?(a=be.Cartesian3.distance(u,a),Math.min(n,-a)):Le._defaultMinTerrainHeight),{minimumTerrainHeight:n=Math.max(Le._defaultMinTerrainHeight,n),maximumTerrainHeight:i}},Le.getBoundingSphere=function(e,a){if(d.Check.defined("rectangle",e),!B.defined(Le._terrainHeights))throw new d.DeveloperError("You must call ApproximateTerrainHeights.initialize and wait for the promise to resolve before using this function");a=B.defaultValue(a,be.Ellipsoid.WGS84);var t=f(e),n=Le._defaultMaxTerrainHeight;B.defined(t)&&(i=t.level+"-"+t.x+"-"+t.y,i=Le._terrainHeights[i],B.defined(i)&&(n=i[1]));var i=Oe.BoundingSphere.fromRectangle3D(e,a,0);return Oe.BoundingSphere.fromRectangle3D(e,a,n,C),Oe.BoundingSphere.union(i,C,i)},Le._terrainHeightsMaxLevel=6,Le._defaultMaxTerrainHeight=9e3,Le._defaultMinTerrainHeight=-1e5,Le._terrainHeights=void 0,Le._initPromise=void 0,Object.defineProperties(Le,{initialized:{get:function(){return B.defined(Le._terrainHeights)}}});var q=[Oe.GeographicProjection,e.WebMercatorProjection],i=q.length,Ie=Math.cos(Ae.CesiumMath.toRadians(30)),m=Math.cos(Ae.CesiumMath.toRadians(150)),F=0,X=1e3;function w(e){var a=(e=B.defaultValue(e,B.defaultValue.EMPTY_OBJECT)).positions;if(!B.defined(a)||a.length<2)throw new d.DeveloperError("At least two positions are required.");if(B.defined(e.arcType)&&e.arcType!==G.ArcType.GEODESIC&&e.arcType!==G.ArcType.RHUMB)throw new d.DeveloperError("Valid options for arcType are ArcType.GEODESIC and ArcType.RHUMB.");this.width=B.defaultValue(e.width,1),this._positions=a,this.granularity=B.defaultValue(e.granularity,9999),this.loop=B.defaultValue(e.loop,!1),this.arcType=B.defaultValue(e.arcType,G.ArcType.GEODESIC),this._ellipsoid=be.Ellipsoid.WGS84,this._projectionIndex=0,this._workerName="createGroundPolylineGeometry",this._scene3DOnly=!1}Object.defineProperties(w.prototype,{packedLength:{get:function(){return 1+3*this._positions.length+1+1+1+be.Ellipsoid.packedLength+1+1}}}),w.setProjectionAndEllipsoid=function(e,a){for(var t=0,n=0;n<i;n++)if(a instanceof q[n]){t=n;break}e._projectionIndex=t,e._ellipsoid=a.ellipsoid};var y=new be.Cartesian3,v=new be.Cartesian3,E=new be.Cartesian3;function U(e,a,t,n,i){var r=Z(n,e,0,y),t=Z(n,e,t,v),a=Z(n,a,0,E),t=xe(t,r,v),r=xe(a,r,E);return be.Cartesian3.cross(r,t,i),be.Cartesian3.normalize(i,i)}var M=new be.Cartographic,_=new be.Cartesian3,O=new be.Cartesian3,b=new be.Cartesian3;function W(e,a,t,n,i,r,s,o,l,u,c){if(0!==i){var C;r===G.ArcType.GEODESIC?C=new T.EllipsoidGeodesic(e,a,s):r===G.ArcType.RHUMB&&(C=new V.EllipsoidRhumbLine(e,a,s));r=C.surfaceDistance;if(!(r<i))for(var d=U(e,a,n,s,b),i=Math.ceil(r/i),p=r/i,h=p,g=i-1,f=o.length,m=0;m<g;m++){var w=C.interpolateUsingSurfaceDistance(h,M),y=Z(s,w,t,_),v=Z(s,w,n,O);be.Cartesian3.pack(d,o,f),be.Cartesian3.pack(y,l,f),be.Cartesian3.pack(v,u,f),c.push(w.latitude),c.push(w.longitude),f+=3,h+=p}}}var A=new be.Cartographic;function Z(e,a,t,n){return be.Cartographic.clone(a,A),A.height=t,be.Cartographic.toCartesian(A,e,n)}function xe(e,a,t){return be.Cartesian3.subtract(e,a,t),be.Cartesian3.normalize(t,t),t}function k(e,a,t,n){return n=xe(e,a,n),n=be.Cartesian3.cross(n,t,n),n=be.Cartesian3.normalize(n,n),n=be.Cartesian3.cross(t,n,n)}w.pack=function(e,a,t){d.Check.typeOf.object("value",e),d.Check.defined("array",a);var n=B.defaultValue(t,0),i=e._positions,r=i.length;a[n++]=r;for(var s=0;s<r;++s){var o=i[s];be.Cartesian3.pack(o,a,n),n+=3}return a[n++]=e.granularity,a[n++]=e.loop?1:0,a[n++]=e.arcType,be.Ellipsoid.pack(e._ellipsoid,a,n),n+=be.Ellipsoid.packedLength,a[n++]=e._projectionIndex,a[n++]=e._scene3DOnly?1:0,a},w.unpack=function(e,a,t){d.Check.defined("array",e);for(var n=B.defaultValue(a,0),i=e[n++],r=new Array(i),s=0;s<i;s++)r[s]=be.Cartesian3.unpack(e,n),n+=3;var o=e[n++],l=1===e[n++],u=e[n++],c=be.Ellipsoid.unpack(e,n);n+=be.Ellipsoid.packedLength;var C=e[n++],a=1===e[n++];return(t=!B.defined(t)?new w({positions:r}):t)._positions=r,t.granularity=o,t.loop=l,t.arcType=u,t._ellipsoid=c,t._projectionIndex=C,t._scene3DOnly=a,t};var P=new be.Cartesian3,S=new be.Cartesian3,L=new be.Cartesian3,I=new be.Cartesian3;function J(e,a,t,n,i){t=xe(t,a,I),e=k(e,a,t,P),a=k(n,a,t,S);if(Ae.CesiumMath.equalsEpsilon(be.Cartesian3.dot(e,a),-1,Ae.CesiumMath.EPSILON5))return i=be.Cartesian3.cross(t,e,i),i=be.Cartesian3.normalize(i,i);i=be.Cartesian3.add(a,e,i),i=be.Cartesian3.normalize(i,i);t=be.Cartesian3.cross(t,i,L);return i=be.Cartesian3.dot(a,t)<0?be.Cartesian3.negate(i,i):i}var Q=r.Plane.fromPointNormal(be.Cartesian3.ZERO,be.Cartesian3.UNIT_Y),K=new be.Cartesian3,$=new be.Cartesian3,ee=new be.Cartesian3,ae=new be.Cartesian3,te=new be.Cartesian3,ne=new be.Cartesian3,ie=new be.Cartographic,re=new be.Cartographic,se=new be.Cartographic;w.createGeometry=function(e){var a,t,n,i,r,s=!e._scene3DOnly,o=e.loop,l=e._ellipsoid,u=e.granularity,c=e.arcType,C=new q[e._projectionIndex](l),d=F,p=X,h=e._positions,g=h.length;2===g&&(o=!1);for(var f,m,w,y=new V.EllipsoidRhumbLine(void 0,void 0,l),v=[h[0]],T=0;T<g-1;T++)t=h[T],n=h[T+1],f=Y.IntersectionTests.lineSegmentPlane(t,n,Q,ne),!B.defined(f)||be.Cartesian3.equalsEpsilon(f,t,Ae.CesiumMath.EPSILON7)||be.Cartesian3.equalsEpsilon(f,n,Ae.CesiumMath.EPSILON7)||(e.arcType===G.ArcType.GEODESIC?v.push(be.Cartesian3.clone(f)):e.arcType===G.ArcType.RHUMB&&(w=l.cartesianToCartographic(f,ie).longitude,i=l.cartesianToCartographic(t,ie),r=l.cartesianToCartographic(n,re),y.setEndPoints(i,r),m=y.findIntersectionWithLongitude(w,se),f=l.cartographicToCartesian(m,ne),!B.defined(f)||be.Cartesian3.equalsEpsilon(f,t,Ae.CesiumMath.EPSILON7)||be.Cartesian3.equalsEpsilon(f,n,Ae.CesiumMath.EPSILON7)||v.push(be.Cartesian3.clone(f)))),v.push(n);o&&(t=h[g-1],n=h[0],f=Y.IntersectionTests.lineSegmentPlane(t,n,Q,ne),!B.defined(f)||be.Cartesian3.equalsEpsilon(f,t,Ae.CesiumMath.EPSILON7)||be.Cartesian3.equalsEpsilon(f,n,Ae.CesiumMath.EPSILON7)||(e.arcType===G.ArcType.GEODESIC?v.push(be.Cartesian3.clone(f)):e.arcType===G.ArcType.RHUMB&&(w=l.cartesianToCartographic(f,ie).longitude,i=l.cartesianToCartographic(t,ie),r=l.cartesianToCartographic(n,re),y.setEndPoints(i,r),m=y.findIntersectionWithLongitude(w,se),f=l.cartographicToCartesian(m,ne),!B.defined(f)||be.Cartesian3.equalsEpsilon(f,t,Ae.CesiumMath.EPSILON7)||be.Cartesian3.equalsEpsilon(f,n,Ae.CesiumMath.EPSILON7)||v.push(be.Cartesian3.clone(f)))));var E=v.length,M=new Array(E);for(T=0;T<E;T++){var _=be.Cartographic.fromCartesian(v[T],l);_.height=0,M[T]=_}if(!((E=(M=j.arrayRemoveDuplicates(M,be.Cartographic.equalsEpsilon)).length)<2)){var O=[],b=[],A=[],k=[],P=K,S=$,L=ee,I=ae,x=te,D=M[0],N=M[1];for(P=Z(l,M[E-1],d,P),I=Z(l,N,d,I),S=Z(l,D,d,S),L=Z(l,D,p,L),x=o?J(P,S,L,I,x):U(D,N,p,l,x),be.Cartesian3.pack(x,b,0),be.Cartesian3.pack(S,A,0),be.Cartesian3.pack(L,k,0),O.push(D.latitude),O.push(D.longitude),W(D,N,d,p,u,c,l,b,A,k,O),T=1;T<E-1;++T){var P=be.Cartesian3.clone(S,P),S=be.Cartesian3.clone(I,S),R=M[T];Z(l,R,p,L),Z(l,M[T+1],d,I),J(P,S,L,I,x),a=b.length,be.Cartesian3.pack(x,b,a),be.Cartesian3.pack(S,A,a),be.Cartesian3.pack(L,k,a),O.push(R.latitude),O.push(R.longitude),W(M[T],M[T+1],d,p,u,c,l,b,A,k,O)}var H=M[E-1],z=M[E-2];if(S=Z(l,H,d,S),L=Z(l,H,p,L),x=o?(N=M[0],J(P=Z(l,z,d,P),S,L,I=Z(l,N,d,I),x)):U(z,H,p,l,x),a=b.length,be.Cartesian3.pack(x,b,a),be.Cartesian3.pack(S,A,a),be.Cartesian3.pack(L,k,a),O.push(H.latitude),O.push(H.longitude),o){for(W(H,D,d,p,u,c,l,b,A,k,O),a=b.length,T=0;T<3;++T)b[a+T]=b[T],A[a+T]=A[T],k[a+T]=k[T];O.push(D.latitude),O.push(D.longitude)}return function(e,a,t,n,i,r,s){var o,l,u,c,C,d,p=a._ellipsoid,h=t.length/3-1,g=8*h,f=4*g,m=36*h,w=new(65535<g?Uint32Array:Uint16Array)(m),y=new Float64Array(3*g),v=new Float32Array(f),T=new Float32Array(f),E=new Float32Array(f),M=new Float32Array(f),_=new Float32Array(f);s&&(u=new Float32Array(f),c=new Float32Array(f),C=new Float32Array(f),d=new Float32Array(2*g));var O=r.length/2,b=0,A=ze;A.height=0;var k=Be;k.height=0;var P=Ge,S=je;if(s)for(l=0,o=1;o<O;o++)A.latitude=r[l],A.longitude=r[l+1],k.latitude=r[l+2],k.longitude=r[l+3],P=a.project(A,P),S=a.project(k,S),b+=be.Cartesian3.distance(P,S),l+=2;var L=n.length/3;S=be.Cartesian3.unpack(n,0,S);var I,x=0;for(l=3,o=1;o<L;o++)P=be.Cartesian3.clone(S,P),S=be.Cartesian3.unpack(n,l,S),x+=be.Cartesian3.distance(P,S),l+=3;l=3;var D=0,N=0,R=0,H=0,z=!1,B=be.Cartesian3.unpack(t,0,Ye),G=be.Cartesian3.unpack(n,0,je),j=be.Cartesian3.unpack(i,0,Fe);e&&(_e=be.Cartesian3.unpack(t,t.length-6,Ve),De(j,_e,B,G)&&(j=be.Cartesian3.negate(j,j)));var V,Y,q,F,X,U,W,Z=0,J=0,Q=0;for(o=0;o<h;o++){var K=be.Cartesian3.clone(B,Ve),$=be.Cartesian3.clone(G,Ge),ee=be.Cartesian3.clone(j,qe);z&&(ee=be.Cartesian3.negate(ee,ee)),B=be.Cartesian3.unpack(t,l,Ye),G=be.Cartesian3.unpack(n,l,je),j=be.Cartesian3.unpack(i,l,Fe),z=De(j,K,B,G),A.latitude=r[D],A.longitude=r[D+1],k.latitude=r[D+2],k.longitude=r[D+3],s&&(Te=function(e,a){var t=Math.abs(e.longitude),n=Math.abs(a.longitude);{if(Ae.CesiumMath.equalsEpsilon(t,Ae.CesiumMath.PI,Ae.CesiumMath.EPSILON11)){var i=Ae.CesiumMath.sign(a.longitude);return e.longitude=i*(t-Ae.CesiumMath.EPSILON11),1}if(Ae.CesiumMath.equalsEpsilon(n,Ae.CesiumMath.PI,Ae.CesiumMath.EPSILON11)){e=Ae.CesiumMath.sign(e.longitude);return a.longitude=e*(n-Ae.CesiumMath.EPSILON11),2}}return 0}(A,k),V=a.project(A,Ke),(de=xe(Y=a.project(k,$e),V,ca)).y=Math.abs(de.y),q=ea,F=aa,0===Te||be.Cartesian3.dot(de,be.Cartesian3.UNIT_Y)>Ie?(q=Ne(a,A,ee,V,ea),F=Ne(a,k,j,Y,aa)):1===Te?(F=Ne(a,k,j,Y,aa),q.x=0,q.y=Ae.CesiumMath.sign(A.longitude-Math.abs(k.longitude)),q.z=0):(q=Ne(a,A,ee,V,ea),F.x=0,F.y=Ae.CesiumMath.sign(A.longitude-k.longitude),F.z=0));var ae=be.Cartesian3.distance($,G),te=Pe.EncodedCartesian3.fromCartesian(K,la),ne=be.Cartesian3.subtract(B,K,ta),ie=be.Cartesian3.normalize(ne,ra),re=be.Cartesian3.subtract($,K,na);re=be.Cartesian3.normalize(re,re);var se=be.Cartesian3.cross(ie,re,ra);se=be.Cartesian3.normalize(se,se);var oe=be.Cartesian3.cross(re,ee,sa);oe=be.Cartesian3.normalize(oe,oe);var le=be.Cartesian3.subtract(G,B,ia);le=be.Cartesian3.normalize(le,le);var ue=be.Cartesian3.cross(j,le,oa);ue=be.Cartesian3.normalize(ue,ue);var ce=ae/x,Ce=Z/x,de=0,pe=0,he=0;for(s&&(de=be.Cartesian3.distance(V,Y),X=Pe.EncodedCartesian3.fromCartesian(V,ua),U=be.Cartesian3.subtract(Y,V,ca),Ee=(W=be.Cartesian3.normalize(U,Ca)).x,W.x=W.y,W.y=-Ee,pe=de/b,he=J/b),I=0;I<8;I++){var ge=H+4*I,fe=N+2*I,me=ge+3,we=I<4?1:-1,ye=2===I||3===I||6===I||7===I?1:-1;be.Cartesian3.pack(te.high,v,ge),v[me]=ne.x,be.Cartesian3.pack(te.low,T,ge),T[me]=ne.y,be.Cartesian3.pack(oe,E,ge),E[me]=ne.z,be.Cartesian3.pack(ue,M,ge),M[me]=ce*we,be.Cartesian3.pack(se,_,ge);var ve=Ce*ye;0===ve&&ye<0&&(ve=9),_[me]=ve,s&&(u[ge]=X.high.x,u[ge+1]=X.high.y,u[ge+2]=X.low.x,u[ge+3]=X.low.y,C[ge]=-q.y,C[ge+1]=q.x,C[ge+2]=F.y,C[ge+3]=-F.x,c[ge]=U.x,c[ge+1]=U.y,c[ge+2]=W.x,c[ge+3]=W.y,d[fe]=pe*we,0===(ve=he*ye)&&ye<0&&(ve=9),d[fe+1]=ve)}var Te=Je,ie=Qe,re=We,ee=Ze,le=be.Rectangle.fromCartographicArray(Xe,Ue),Ee=Le.getMinimumMaximumHeights(le,p),le=Ee.minimumTerrainHeight,Ee=Ee.maximumTerrainHeight;Q+=le,Q+=Ee,Re(K,$,le,Ee,Te,re),Re(B,G,le,Ee,ie,ee);Ee=be.Cartesian3.multiplyByScalar(se,Ae.CesiumMath.EPSILON5,da);be.Cartesian3.add(Te,Ee,Te),be.Cartesian3.add(ie,Ee,ie),be.Cartesian3.add(re,Ee,re),be.Cartesian3.add(ee,Ee,ee),He(Te,ie),He(re,ee),be.Cartesian3.pack(Te,y,R),be.Cartesian3.pack(ie,y,R+3),be.Cartesian3.pack(ee,y,R+6),be.Cartesian3.pack(re,y,R+9),Ee=be.Cartesian3.multiplyByScalar(se,-2*Ae.CesiumMath.EPSILON5,da),be.Cartesian3.add(Te,Ee,Te),be.Cartesian3.add(ie,Ee,ie),be.Cartesian3.add(re,Ee,re),be.Cartesian3.add(ee,Ee,ee),He(Te,ie),He(re,ee),be.Cartesian3.pack(Te,y,R+12),be.Cartesian3.pack(ie,y,R+15),be.Cartesian3.pack(ee,y,R+18),be.Cartesian3.pack(re,y,R+21),D+=2,l+=3,N+=16,R+=24,H+=32,Z+=ae,J+=de}var Me=l=0;for(o=0;o<h;o++){for(I=0;I<ga;I++)w[l+I]=ha[I]+Me;Me+=8,l+=ga}e=pa;Oe.BoundingSphere.fromVertices(t,be.Cartesian3.ZERO,3,e[0]),Oe.BoundingSphere.fromVertices(n,be.Cartesian3.ZERO,3,e[1]);var _e=Oe.BoundingSphere.fromBoundingSpheres(e);_e.radius+=Q/(2*h);e={position:new Se.GeometryAttribute({componentDatatype:ke.ComponentDatatype.DOUBLE,componentsPerAttribute:3,normalize:!1,values:y}),startHiAndForwardOffsetX:fa(v),startLoAndForwardOffsetY:fa(T),startNormalAndForwardOffsetZ:fa(E),endNormalAndTextureCoordinateNormalizationX:fa(M),rightNormalAndTextureCoordinateNormalizationY:fa(_)};s&&(e.startHiLo2D=fa(u),e.offsetAndRight2D=fa(c),e.startEndNormals2D=fa(C),e.texcoordNormalization2D=new Se.GeometryAttribute({componentDatatype:ke.ComponentDatatype.FLOAT,componentsPerAttribute:2,normalize:!1,values:d}));return new Se.Geometry({attributes:e,indices:w,boundingSphere:_e})}(o,C,A,k,b,O,s)}};var x=new be.Cartesian3,D=new Oe.Matrix3,N=new Oe.Quaternion;function De(e,a,t,n){a=xe(t,a,x),a=be.Cartesian3.dot(a,e);if(Ie<a||a<m){t=xe(n,t,I),a=a<m?Ae.CesiumMath.PI_OVER_TWO:-Ae.CesiumMath.PI_OVER_TWO,a=Oe.Quaternion.fromAxisAngle(t,a,N),a=Oe.Matrix3.fromQuaternion(a,D);return Oe.Matrix3.multiplyByVector(a,e,e),!0}return!1}var R=new be.Cartographic,H=new be.Cartesian3,z=new be.Cartesian3;function Ne(e,a,t,n,i){var r=be.Cartographic.toCartesian(a,e._ellipsoid,H),s=be.Cartesian3.add(r,t,z),o=!1,l=e._ellipsoid,u=l.cartesianToCartographic(s,R);Math.abs(a.longitude-u.longitude)>Ae.CesiumMath.PI_OVER_TWO&&(o=!0,s=be.Cartesian3.subtract(r,t,z),u=l.cartesianToCartographic(s,R)),u.height=0;u=e.project(u,i);return(i=be.Cartesian3.subtract(u,n,i)).z=0,i=be.Cartesian3.normalize(i,i),o&&be.Cartesian3.negate(i,i),i}var oe=new be.Cartesian3,le=new be.Cartesian3;function Re(e,a,t,n,i,r){var s=be.Cartesian3.subtract(a,e,oe);be.Cartesian3.normalize(s,s);t-=F,t=be.Cartesian3.multiplyByScalar(s,t,le);be.Cartesian3.add(e,t,i);n-=X,t=be.Cartesian3.multiplyByScalar(s,n,le);be.Cartesian3.add(a,t,r)}var ue=new be.Cartesian3;function He(e,a){var t=r.Plane.getPointDistance(Q,e),n=r.Plane.getPointDistance(Q,a),i=ue;Ae.CesiumMath.equalsEpsilon(t,0,Ae.CesiumMath.EPSILON2)?(i=xe(a,e,i),be.Cartesian3.multiplyByScalar(i,Ae.CesiumMath.EPSILON2,i),be.Cartesian3.add(e,i,e)):Ae.CesiumMath.equalsEpsilon(n,0,Ae.CesiumMath.EPSILON2)&&(i=xe(e,a,i),be.Cartesian3.multiplyByScalar(i,Ae.CesiumMath.EPSILON2,i),be.Cartesian3.add(a,i,a))}var ze=new be.Cartographic,Be=new be.Cartographic,Ge=new be.Cartesian3,je=new be.Cartesian3,Ve=new be.Cartesian3,Ye=new be.Cartesian3,qe=new be.Cartesian3,Fe=new be.Cartesian3,Xe=[ze,Be],Ue=new be.Rectangle,We=new be.Cartesian3,Ze=new be.Cartesian3,Je=new be.Cartesian3,Qe=new be.Cartesian3,Ke=new be.Cartesian3,$e=new be.Cartesian3,ea=new be.Cartesian3,aa=new be.Cartesian3,ta=new be.Cartesian3,na=new be.Cartesian3,ia=new be.Cartesian3,ra=new be.Cartesian3,sa=new be.Cartesian3,oa=new be.Cartesian3,la=new Pe.EncodedCartesian3,ua=new Pe.EncodedCartesian3,ca=new be.Cartesian3,Ca=new be.Cartesian3,da=new be.Cartesian3,pa=[new Oe.BoundingSphere,new Oe.BoundingSphere],ha=[0,2,1,0,3,2,0,7,3,0,4,7,0,5,4,0,1,5,5,7,4,5,6,7,5,2,6,5,1,2,3,6,2,3,7,6],ga=ha.length;function fa(e){return new Se.GeometryAttribute({componentDatatype:ke.ComponentDatatype.FLOAT,componentsPerAttribute:4,normalize:!1,values:e})}return w._projectNormal=Ne,function(e,a){return Le.initialize().then(function(){return B.defined(a)&&(e=w.unpack(e,a)),w.createGeometry(e)})}});
//# sourceMappingURL=createGroundPolylineGeometry.js.map