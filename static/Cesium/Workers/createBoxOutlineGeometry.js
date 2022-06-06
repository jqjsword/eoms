define(["./GeometryOffsetAttribute-d63c288d","./Transforms-f1816abc","./Cartesian2-716c2715","./Check-d18af7c4","./ComponentDatatype-549ec0d3","./when-208fe5b0","./GeometryAttribute-0ee94cf1","./GeometryAttributes-b0b294d8","./Math-3ba16bed","./RuntimeError-7f634f5d","./WebGLConstants-76bb35d1"],function(o,u,s,i,f,m,c,d,e,t,n){"use strict";var y=new s.Cartesian3;function b(e){var t=(e=m.defaultValue(e,m.defaultValue.EMPTY_OBJECT)).minimum,n=e.maximum;if(i.Check.typeOf.object("min",t),i.Check.typeOf.object("max",n),m.defined(e.offsetAttribute)&&e.offsetAttribute===o.GeometryOffsetAttribute.TOP)throw new i.DeveloperError("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._min=s.Cartesian3.clone(t),this._max=s.Cartesian3.clone(n),this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxOutlineGeometry"}b.fromDimensions=function(e){var t=(e=m.defaultValue(e,m.defaultValue.EMPTY_OBJECT)).dimensions;i.Check.typeOf.object("dimensions",t),i.Check.typeOf.number.greaterThanOrEquals("dimensions.x",t.x,0),i.Check.typeOf.number.greaterThanOrEquals("dimensions.y",t.y,0),i.Check.typeOf.number.greaterThanOrEquals("dimensions.z",t.z,0);t=s.Cartesian3.multiplyByScalar(t,.5,new s.Cartesian3);return new b({minimum:s.Cartesian3.negate(t,new s.Cartesian3),maximum:t,offsetAttribute:e.offsetAttribute})},b.fromAxisAlignedBoundingBox=function(e){return i.Check.typeOf.object("boundindBox",e),new b({minimum:e.minimum,maximum:e.maximum})},b.packedLength=2*s.Cartesian3.packedLength+1,b.pack=function(e,t,n){return i.Check.typeOf.object("value",e),i.Check.defined("array",t),n=m.defaultValue(n,0),s.Cartesian3.pack(e._min,t,n),s.Cartesian3.pack(e._max,t,n+s.Cartesian3.packedLength),t[n+2*s.Cartesian3.packedLength]=m.defaultValue(e._offsetAttribute,-1),t};var p=new s.Cartesian3,C=new s.Cartesian3,l={minimum:p,maximum:C,offsetAttribute:void 0};return b.unpack=function(e,t,n){i.Check.defined("array",e),t=m.defaultValue(t,0);var a=s.Cartesian3.unpack(e,t,p),r=s.Cartesian3.unpack(e,t+s.Cartesian3.packedLength,C),t=e[t+2*s.Cartesian3.packedLength];return m.defined(n)?(n._min=s.Cartesian3.clone(a,n._min),n._max=s.Cartesian3.clone(r,n._max),n._offsetAttribute=-1===t?void 0:t,n):(l.offsetAttribute=-1===t?void 0:t,new b(l))},b.createGeometry=function(e){var t=e._min,n=e._max;if(!s.Cartesian3.equals(t,n)){var a=new d.GeometryAttributes,r=new Uint16Array(24),i=new Float64Array(24);i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=n.x,i[4]=t.y,i[5]=t.z,i[6]=n.x,i[7]=n.y,i[8]=t.z,i[9]=t.x,i[10]=n.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=n.z,i[15]=n.x,i[16]=t.y,i[17]=n.z,i[18]=n.x,i[19]=n.y,i[20]=n.z,i[21]=t.x,i[22]=n.y,i[23]=n.z,a.position=new c.GeometryAttribute({componentDatatype:f.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:i}),r[0]=4,r[1]=5,r[2]=5,r[3]=6,r[4]=6,r[5]=7,r[6]=7,r[7]=4,r[8]=0,r[9]=1,r[10]=1,r[11]=2,r[12]=2,r[13]=3,r[14]=3,r[15]=0,r[16]=0,r[17]=4,r[18]=1,r[19]=5,r[20]=2,r[21]=6,r[22]=3,r[23]=7;n=s.Cartesian3.subtract(n,t,y),t=.5*s.Cartesian3.magnitude(n);return m.defined(e._offsetAttribute)&&(n=i.length,i=new Uint8Array(n/3),n=e._offsetAttribute===o.GeometryOffsetAttribute.NONE?0:1,o.arrayFill(i,n),a.applyOffset=new c.GeometryAttribute({componentDatatype:f.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})),new c.Geometry({attributes:a,indices:r,primitiveType:c.PrimitiveType.LINES,boundingSphere:new u.BoundingSphere(s.Cartesian3.ZERO,t),offsetAttribute:e._offsetAttribute})}},function(e,t){return m.defined(t)&&(e=b.unpack(e,t)),b.createGeometry(e)}});
//# sourceMappingURL=createBoxOutlineGeometry.js.map
