define(["exports","./Transforms-f1816abc","./Cartesian2-716c2715","./Check-d18af7c4","./when-208fe5b0","./EllipsoidTangentPlane-8e486e83","./Math-3ba16bed","./Plane-f5dfabcd"],function(a,y,O,g,E,b,P,N){"use strict";function v(a,e){this.center=O.Cartesian3.clone(E.defaultValue(a,O.Cartesian3.ZERO)),this.halfAxes=y.Matrix3.clone(E.defaultValue(e,y.Matrix3.ZERO))}v.packedLength=O.Cartesian3.packedLength+y.Matrix3.packedLength,v.pack=function(a,e,t){return g.Check.typeOf.object("value",a),g.Check.defined("array",e),t=E.defaultValue(t,0),O.Cartesian3.pack(a.center,e,t),y.Matrix3.pack(a.halfAxes,e,t+O.Cartesian3.packedLength),e},v.unpack=function(a,e,t){return g.Check.defined("array",a),e=E.defaultValue(e,0),E.defined(t)||(t=new v),O.Cartesian3.unpack(a,e,t.center),y.Matrix3.unpack(a,e+O.Cartesian3.packedLength,t.halfAxes),t};var A=new O.Cartesian3,T=new O.Cartesian3,R=new O.Cartesian3,I=new O.Cartesian3,D=new O.Cartesian3,L=new O.Cartesian3,z=new y.Matrix3,S={unitary:new y.Matrix3,diagonal:new y.Matrix3};v.fromPoints=function(a,e){if(E.defined(e)||(e=new v),!E.defined(a)||0===a.length)return e.halfAxes=y.Matrix3.ZERO,e.center=O.Cartesian3.ZERO,e;for(var t=a.length,r=O.Cartesian3.clone(a[0],A),n=1;n<t;n++)O.Cartesian3.add(r,a[n],r);var i=1/t;O.Cartesian3.multiplyByScalar(r,i,r);var s,o=0,d=0,C=0,u=0,c=0,l=0;for(n=0;n<t;n++)o+=(s=O.Cartesian3.subtract(a[n],r,T)).x*s.x,d+=s.x*s.y,C+=s.x*s.z,u+=s.y*s.y,c+=s.y*s.z,l+=s.z*s.z;o*=i,d*=i,C*=i,u*=i,c*=i,l*=i;i=z;i[0]=o,i[1]=d,i[2]=C,i[3]=d,i[4]=u,i[5]=c,i[6]=C,i[7]=c,i[8]=l;var i=y.Matrix3.computeEigenDecomposition(i,S),i=y.Matrix3.clone(i.unitary,e.halfAxes),h=y.Matrix3.getColumn(i,0,I),f=y.Matrix3.getColumn(i,1,D),m=y.Matrix3.getColumn(i,2,L),x=-Number.MAX_VALUE,p=-Number.MAX_VALUE,M=-Number.MAX_VALUE,w=Number.MAX_VALUE,g=Number.MAX_VALUE,b=Number.MAX_VALUE;for(n=0;n<t;n++)s=a[n],x=Math.max(O.Cartesian3.dot(h,s),x),p=Math.max(O.Cartesian3.dot(f,s),p),M=Math.max(O.Cartesian3.dot(m,s),M),w=Math.min(O.Cartesian3.dot(h,s),w),g=Math.min(O.Cartesian3.dot(f,s),g),b=Math.min(O.Cartesian3.dot(m,s),b);h=O.Cartesian3.multiplyByScalar(h,.5*(w+x),h),f=O.Cartesian3.multiplyByScalar(f,.5*(g+p),f),m=O.Cartesian3.multiplyByScalar(m,.5*(b+M),m),i=O.Cartesian3.add(h,f,e.center);O.Cartesian3.add(i,m,i);i=R;return i.x=x-w,i.y=p-g,i.z=M-b,O.Cartesian3.multiplyByScalar(i,.5,i),y.Matrix3.multiplyByScale(e.halfAxes,i,e.halfAxes),e};var l=new O.Cartesian3,h=new O.Cartesian3;function q(a,e,t,r,n,i,s,o,d,C,u){if(!(E.defined(n)&&E.defined(i)&&E.defined(s)&&E.defined(o)&&E.defined(d)&&E.defined(C)))throw new g.DeveloperError("all extents (minimum/maximum X/Y/Z) are required.");var c=(u=!E.defined(u)?new v:u).halfAxes;y.Matrix3.setColumn(c,0,e,c),y.Matrix3.setColumn(c,1,t,c),y.Matrix3.setColumn(c,2,r,c),(t=l).x=(n+i)/2,t.y=(s+o)/2,t.z=(d+C)/2;r=h;r.x=(i-n)/2,r.y=(o-s)/2,r.z=(C-d)/2;d=u.center,t=y.Matrix3.multiplyByVector(c,t,t);return O.Cartesian3.add(a,t,d),y.Matrix3.multiplyByScale(c,r,c),u}var U=new O.Cartographic,V=new O.Cartesian3,k=new O.Cartographic,B=new O.Cartographic,_=new O.Cartographic,W=new O.Cartographic,X=new O.Cartographic,j=new O.Cartesian3,Z=new O.Cartesian3,G=new O.Cartesian3,Y=new O.Cartesian3,F=new O.Cartesian3,H=new O.Cartesian2,J=new O.Cartesian2,K=new O.Cartesian2,Q=new O.Cartesian2,$=new O.Cartesian2,aa=new O.Cartesian3,ea=new O.Cartesian3,ta=new O.Cartesian3,ra=new O.Cartesian3,na=new O.Cartesian2,ia=new O.Cartesian3,sa=new O.Cartesian3,oa=new O.Cartesian3,da=new N.Plane(O.Cartesian3.UNIT_X,0);v.fromRectangle=function(a,e,t,r,n){if(!E.defined(a))throw new g.DeveloperError("rectangle is required");if(a.width<0||a.width>P.CesiumMath.TWO_PI)throw new g.DeveloperError("Rectangle width must be between 0 and 2*pi");if(a.height<0||a.height>P.CesiumMath.PI)throw new g.DeveloperError("Rectangle height must be between 0 and pi");if(E.defined(r)&&!P.CesiumMath.equalsEpsilon(r.radii.x,r.radii.y,P.CesiumMath.EPSILON15))throw new g.DeveloperError("Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)");if(e=E.defaultValue(e,0),t=E.defaultValue(t,0),r=E.defaultValue(r,O.Ellipsoid.WGS84),a.width<=P.CesiumMath.PI){var i=O.Rectangle.center(a,U),s=r.cartographicToCartesian(i,V),o=new b.EllipsoidTangentPlane(s,r),d=o.plane,C=i.longitude,u=a.south<0&&0<a.north?0:i.latitude,c=O.Cartographic.fromRadians(C,a.north,t,k),l=O.Cartographic.fromRadians(a.west,a.north,t,B),h=O.Cartographic.fromRadians(a.west,u,t,_),f=O.Cartographic.fromRadians(a.west,a.south,t,W),m=O.Cartographic.fromRadians(C,a.south,t,X),x=r.cartographicToCartesian(c,j),p=r.cartographicToCartesian(l,Z),M=r.cartographicToCartesian(h,G),w=r.cartographicToCartesian(f,Y),s=r.cartographicToCartesian(m,F),i=o.projectPointToNearestOnPlane(x,H),u=o.projectPointToNearestOnPlane(p,J),C=o.projectPointToNearestOnPlane(M,K),c=o.projectPointToNearestOnPlane(w,Q),h=o.projectPointToNearestOnPlane(s,$),x=-(m=Math.min(u.x,C.x,c.x)),M=Math.max(u.y,i.y),s=Math.min(c.y,h.y);return l.height=f.height=e,p=r.cartographicToCartesian(l,Z),w=r.cartographicToCartesian(f,Y),C=Math.min(N.Plane.getPointDistance(d,p),N.Plane.getPointDistance(d,w)),u=t,q(o.origin,o.xAxis,o.yAxis,o.zAxis,m,x,s,M,C,u,n)}i=0<a.south,c=a.north<0,h=i?a.south:c?a.north:0,l=O.Rectangle.center(a,U).longitude,f=O.Cartesian3.fromRadians(l,h,t,r,aa);f.z=0;p=Math.abs(f.x)<P.CesiumMath.EPSILON10&&Math.abs(f.y)<P.CesiumMath.EPSILON10?O.Cartesian3.UNIT_X:O.Cartesian3.normalize(f,ea),w=O.Cartesian3.UNIT_Z,o=O.Cartesian3.cross(p,w,ta);d=N.Plane.fromPointNormal(f,p,da);l=O.Cartesian3.fromRadians(l+P.CesiumMath.PI_OVER_TWO,h,t,r,ra);m=-(x=O.Cartesian3.dot(N.Plane.projectPointOntoPlane(d,l,na),o)),M=O.Cartesian3.fromRadians(0,a.north,c?e:t,r,ia).z,s=O.Cartesian3.fromRadians(0,a.south,i?e:t,r,sa).z;r=O.Cartesian3.fromRadians(a.east,h,t,r,oa);return q(f,o,w,p,m,x,s,M,C=N.Plane.getPointDistance(d,r),u=0,n)},v.clone=function(a,e){if(E.defined(a))return E.defined(e)?(O.Cartesian3.clone(a.center,e.center),y.Matrix3.clone(a.halfAxes,e.halfAxes),e):new v(a.center,a.halfAxes)},v.intersectPlane=function(a,e){if(!E.defined(a))throw new g.DeveloperError("box is required.");if(!E.defined(e))throw new g.DeveloperError("plane is required.");var t=a.center,r=e.normal,n=a.halfAxes,i=r.x,s=r.y,a=r.z,n=Math.abs(i*n[y.Matrix3.COLUMN0ROW0]+s*n[y.Matrix3.COLUMN0ROW1]+a*n[y.Matrix3.COLUMN0ROW2])+Math.abs(i*n[y.Matrix3.COLUMN1ROW0]+s*n[y.Matrix3.COLUMN1ROW1]+a*n[y.Matrix3.COLUMN1ROW2])+Math.abs(i*n[y.Matrix3.COLUMN2ROW0]+s*n[y.Matrix3.COLUMN2ROW1]+a*n[y.Matrix3.COLUMN2ROW2]),e=O.Cartesian3.dot(r,t)+e.distance;return e<=-n?y.Intersect.OUTSIDE:n<=e?y.Intersect.INSIDE:y.Intersect.INTERSECTING};var f=new O.Cartesian3,m=new O.Cartesian3,x=new O.Cartesian3,C=new O.Cartesian3;v.distanceSquaredTo=function(a,e){if(!E.defined(a))throw new g.DeveloperError("box is required.");if(!E.defined(e))throw new g.DeveloperError("cartesian is required.");var t=O.Cartesian3.subtract(e,a.center,l),r=a.halfAxes,n=y.Matrix3.getColumn(r,0,f),i=y.Matrix3.getColumn(r,1,m),s=y.Matrix3.getColumn(r,2,x),o=O.Cartesian3.magnitude(n),e=O.Cartesian3.magnitude(i),a=O.Cartesian3.magnitude(s);O.Cartesian3.normalize(n,n),O.Cartesian3.normalize(i,i),O.Cartesian3.normalize(s,s);r=C;r.x=O.Cartesian3.dot(t,n),r.y=O.Cartesian3.dot(t,i),r.z=O.Cartesian3.dot(t,s);var d,s=0;return r.x<-o?s+=(d=r.x+o)*d:r.x>o&&(s+=(d=r.x-o)*d),r.y<-e?s+=(d=r.y+e)*d:r.y>e&&(s+=(d=r.y-e)*d),r.z<-a?s+=(d=r.z+a)*d:r.z>a&&(s+=(d=r.z-a)*d),s};var p=new O.Cartesian3,M=new O.Cartesian3;v.computePlaneDistances=function(a,e,t,r){if(!E.defined(a))throw new g.DeveloperError("box is required.");if(!E.defined(e))throw new g.DeveloperError("position is required.");if(!E.defined(t))throw new g.DeveloperError("direction is required.");E.defined(r)||(r=new y.Interval);var n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,s=a.center,o=a.halfAxes,d=y.Matrix3.getColumn(o,0,f),C=y.Matrix3.getColumn(o,1,m),u=y.Matrix3.getColumn(o,2,x),c=O.Cartesian3.add(d,C,p);O.Cartesian3.add(c,u,c),O.Cartesian3.add(c,s,c);a=O.Cartesian3.subtract(c,e,M),o=O.Cartesian3.dot(t,a),n=Math.min(o,n),i=Math.max(o,i);return O.Cartesian3.add(s,d,c),O.Cartesian3.add(c,C,c),O.Cartesian3.subtract(c,u,c),O.Cartesian3.subtract(c,e,a),o=O.Cartesian3.dot(t,a),n=Math.min(o,n),i=Math.max(o,i),O.Cartesian3.add(s,d,c),O.Cartesian3.subtract(c,C,c),O.Cartesian3.add(c,u,c),O.Cartesian3.subtract(c,e,a),o=O.Cartesian3.dot(t,a),n=Math.min(o,n),i=Math.max(o,i),O.Cartesian3.add(s,d,c),O.Cartesian3.subtract(c,C,c),O.Cartesian3.subtract(c,u,c),O.Cartesian3.subtract(c,e,a),o=O.Cartesian3.dot(t,a),n=Math.min(o,n),i=Math.max(o,i),O.Cartesian3.subtract(s,d,c),O.Cartesian3.add(c,C,c),O.Cartesian3.add(c,u,c),O.Cartesian3.subtract(c,e,a),o=O.Cartesian3.dot(t,a),n=Math.min(o,n),i=Math.max(o,i),O.Cartesian3.subtract(s,d,c),O.Cartesian3.add(c,C,c),O.Cartesian3.subtract(c,u,c),O.Cartesian3.subtract(c,e,a),o=O.Cartesian3.dot(t,a),n=Math.min(o,n),i=Math.max(o,i),O.Cartesian3.subtract(s,d,c),O.Cartesian3.subtract(c,C,c),O.Cartesian3.add(c,u,c),O.Cartesian3.subtract(c,e,a),o=O.Cartesian3.dot(t,a),n=Math.min(o,n),i=Math.max(o,i),O.Cartesian3.subtract(s,d,c),O.Cartesian3.subtract(c,C,c),O.Cartesian3.subtract(c,u,c),O.Cartesian3.subtract(c,e,a),o=O.Cartesian3.dot(t,a),n=Math.min(o,n),i=Math.max(o,i),r.start=n,r.stop=i,r};var t=new y.BoundingSphere;v.isOccluded=function(a,e){if(!E.defined(a))throw new g.DeveloperError("box is required.");if(!E.defined(e))throw new g.DeveloperError("occluder is required.");a=y.BoundingSphere.fromOrientedBoundingBox(a,t);return!e.isBoundingSphereVisible(a)},v.prototype.intersectPlane=function(a){return v.intersectPlane(this,a)},v.prototype.distanceSquaredTo=function(a){return v.distanceSquaredTo(this,a)},v.prototype.computePlaneDistances=function(a,e,t){return v.computePlaneDistances(this,a,e,t)},v.prototype.isOccluded=function(a){return v.isOccluded(this,a)},v.equals=function(a,e){return a===e||E.defined(a)&&E.defined(e)&&O.Cartesian3.equals(a.center,e.center)&&y.Matrix3.equals(a.halfAxes,e.halfAxes)},v.prototype.clone=function(a){return v.clone(this,a)},v.prototype.equals=function(a){return v.equals(this,a)},a.OrientedBoundingBox=v});
//# sourceMappingURL=OrientedBoundingBox-45cb4e24.js.map