define(["exports","./Cartesian2-716c2715","./when-208fe5b0","./Check-d18af7c4","./Transforms-f1816abc","./Math-3ba16bed","./GeometryAttribute-0ee94cf1"],function(t,m,M,X,n,Y,l){"use strict";var S=Math.cos,w=Math.sin,O=Math.sqrt,a={computePosition:function(t,n,a,e,r,o,s){var i=n.radiiSquared,h=t.nwCorner,g=t.boundingRectangle,u=h.latitude-t.granYCos*e+r*t.granXSin,c=S(u),C=w(u),l=i.z*C,d=h.longitude+e*t.granYSin+r*t.granXCos,n=c*S(d),h=c*w(d),c=i.x*n,i=i.y*h,C=O(c*n+i*h+l*C);o.x=c/C,o.y=i/C,o.z=l/C,a&&(a=t.stNwCorner,M.defined(a)?(u=a.latitude-t.stGranYCos*e+r*t.stGranXSin,d=a.longitude+e*t.stGranYSin+r*t.stGranXCos,s.x=(d-t.stWest)*t.lonScalar,s.y=(u-t.stSouth)*t.latScalar):(s.x=(d-g.west)*t.lonScalar,s.y=(u-g.south)*t.latScalar))}},d=new l.Matrix2,R=new m.Cartesian3,f=new m.Cartographic,p=new m.Cartesian3,_=new n.GeographicProjection;function G(t,n,a,e,r,o,s){var i=Math.cos(n),h=e*i,g=a*i,u=Math.sin(n),c=e*u,C=a*u;R=_.project(t,R),R=m.Cartesian3.subtract(R,p,R);i=l.Matrix2.fromRotation(n,d);R=l.Matrix2.multiplyByVector(i,R,R),R=m.Cartesian3.add(R,p,R),--o,--s;e=(t=_.unproject(R,t)).latitude,a=e+o*C,u=e-h*s,n=e-h*s+o*C,i=Math.max(e,a,u,n),e=Math.min(e,a,u,n),a=t.longitude,u=a+o*g,n=a+s*c,o=a+s*c+o*g;return{north:i,south:e,east:Math.max(a,u,n,o),west:Math.min(a,u,n,o),granYCos:h,granYSin:c,granXCos:g,granXSin:C,nwCorner:t}}a.computeOptions=function(t,n,a,e,r,o,s){var i=t.east,h=t.west,g=t.north,u=t.south,c=!1,C=!1;g===Y.CesiumMath.PI_OVER_TWO&&(c=!0),u===-Y.CesiumMath.PI_OVER_TWO&&(C=!0);var l,d=g-u,M=(S=i<h?Y.CesiumMath.TWO_PI-h+i:i-h)/((l=Math.ceil(S/n)+1)-1),S=d/((w=Math.ceil(d/n)+1)-1),d=m.Rectangle.northwest(t,o),n=m.Rectangle.center(t,f);0===a&&0===e||(n.longitude<d.longitude&&(n.longitude+=Y.CesiumMath.TWO_PI),p=_.project(n,p));var w,o=S,n=M,r=m.Rectangle.clone(t,r),C={granYCos:o,granYSin:0,granXCos:n,granXSin:0,nwCorner:d,boundingRectangle:r,width:l,height:w,northCap:c,southCap:C};if(0!==a){d=G(d,a,M,S,0,l,w),g=d.north,u=d.south,i=d.east,h=d.west;if(g<-Y.CesiumMath.PI_OVER_TWO||g>Y.CesiumMath.PI_OVER_TWO||u<-Y.CesiumMath.PI_OVER_TWO||u>Y.CesiumMath.PI_OVER_TWO)throw new X.DeveloperError("Rotated rectangle is invalid.  It crosses over either the north or south pole.");C.granYCos=d.granYCos,C.granYSin=d.granYSin,C.granXCos=d.granXCos,C.granXSin=d.granXSin,r.north=g,r.south=u,r.east=i,r.west=h}return 0!==e&&(a-=e,w=G(s=m.Rectangle.northwest(r,s),a,M,S,0,l,w),C.stGranYCos=w.granYCos,C.stGranXCos=w.granXCos,C.stGranYSin=w.granYSin,C.stGranXSin=w.granXSin,C.stNwCorner=s,C.stWest=w.west,C.stSouth=w.south),C},t.RectangleGeometryLibrary=a});
//# sourceMappingURL=RectangleGeometryLibrary-2356d7aa.js.map
