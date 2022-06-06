define(["exports","./GeometryOffsetAttribute-d63c288d","./Transforms-f1816abc","./Cartesian2-716c2715","./Check-d18af7c4","./ComponentDatatype-549ec0d3","./when-208fe5b0","./GeometryAttribute-0ee94cf1","./GeometryAttributes-b0b294d8","./VertexFormat-24041ad5"],function(e,s,y,f,o,p,c,x,b,m){"use strict";var d=new f.Cartesian3;function u(e){var t=(e=c.defaultValue(e,c.defaultValue.EMPTY_OBJECT)).minimum,a=e.maximum;if(o.Check.typeOf.object("min",t),o.Check.typeOf.object("max",a),c.defined(e.offsetAttribute)&&e.offsetAttribute===s.GeometryOffsetAttribute.TOP)throw new o.DeveloperError("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");var n=c.defaultValue(e.vertexFormat,m.VertexFormat.DEFAULT);this._minimum=f.Cartesian3.clone(t),this._maximum=f.Cartesian3.clone(a),this._vertexFormat=n,this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxGeometry"}u.fromDimensions=function(e){var t=(e=c.defaultValue(e,c.defaultValue.EMPTY_OBJECT)).dimensions;o.Check.typeOf.object("dimensions",t),o.Check.typeOf.number.greaterThanOrEquals("dimensions.x",t.x,0),o.Check.typeOf.number.greaterThanOrEquals("dimensions.y",t.y,0),o.Check.typeOf.number.greaterThanOrEquals("dimensions.z",t.z,0);t=f.Cartesian3.multiplyByScalar(t,.5,new f.Cartesian3);return new u({minimum:f.Cartesian3.negate(t,new f.Cartesian3),maximum:t,vertexFormat:e.vertexFormat,offsetAttribute:e.offsetAttribute})},u.fromAxisAlignedBoundingBox=function(e){return o.Check.typeOf.object("boundingBox",e),new u({minimum:e.minimum,maximum:e.maximum})},u.packedLength=2*f.Cartesian3.packedLength+m.VertexFormat.packedLength+1,u.pack=function(e,t,a){return o.Check.typeOf.object("value",e),o.Check.defined("array",t),a=c.defaultValue(a,0),f.Cartesian3.pack(e._minimum,t,a),f.Cartesian3.pack(e._maximum,t,a+f.Cartesian3.packedLength),m.VertexFormat.pack(e._vertexFormat,t,a+2*f.Cartesian3.packedLength),t[a+2*f.Cartesian3.packedLength+m.VertexFormat.packedLength]=c.defaultValue(e._offsetAttribute,-1),t};var t,A=new f.Cartesian3,l=new f.Cartesian3,C=new m.VertexFormat,h={minimum:A,maximum:l,vertexFormat:C,offsetAttribute:void 0};u.unpack=function(e,t,a){o.Check.defined("array",e),t=c.defaultValue(t,0);var n=f.Cartesian3.unpack(e,t,A),r=f.Cartesian3.unpack(e,t+f.Cartesian3.packedLength,l),i=m.VertexFormat.unpack(e,t+2*f.Cartesian3.packedLength,C),t=e[t+2*f.Cartesian3.packedLength+m.VertexFormat.packedLength];return c.defined(a)?(a._minimum=f.Cartesian3.clone(n,a._minimum),a._maximum=f.Cartesian3.clone(r,a._maximum),a._vertexFormat=m.VertexFormat.clone(i,a._vertexFormat),a._offsetAttribute=-1===t?void 0:t,a):(h.offsetAttribute=-1===t?void 0:t,new u(h))},u.createGeometry=function(e){var t=e._minimum,a=e._maximum,n=e._vertexFormat;if(!f.Cartesian3.equals(t,a)){var r,i,o,m=new b.GeometryAttributes;n.position&&(n.st||n.normal||n.tangent||n.bitangent)?(n.position&&((u=new Float64Array(72))[0]=t.x,u[1]=t.y,u[2]=a.z,u[3]=a.x,u[4]=t.y,u[5]=a.z,u[6]=a.x,u[7]=a.y,u[8]=a.z,u[9]=t.x,u[10]=a.y,u[11]=a.z,u[12]=t.x,u[13]=t.y,u[14]=t.z,u[15]=a.x,u[16]=t.y,u[17]=t.z,u[18]=a.x,u[19]=a.y,u[20]=t.z,u[21]=t.x,u[22]=a.y,u[23]=t.z,u[24]=a.x,u[25]=t.y,u[26]=t.z,u[27]=a.x,u[28]=a.y,u[29]=t.z,u[30]=a.x,u[31]=a.y,u[32]=a.z,u[33]=a.x,u[34]=t.y,u[35]=a.z,u[36]=t.x,u[37]=t.y,u[38]=t.z,u[39]=t.x,u[40]=a.y,u[41]=t.z,u[42]=t.x,u[43]=a.y,u[44]=a.z,u[45]=t.x,u[46]=t.y,u[47]=a.z,u[48]=t.x,u[49]=a.y,u[50]=t.z,u[51]=a.x,u[52]=a.y,u[53]=t.z,u[54]=a.x,u[55]=a.y,u[56]=a.z,u[57]=t.x,u[58]=a.y,u[59]=a.z,u[60]=t.x,u[61]=t.y,u[62]=t.z,u[63]=a.x,u[64]=t.y,u[65]=t.z,u[66]=a.x,u[67]=t.y,u[68]=a.z,u[69]=t.x,u[70]=t.y,u[71]=a.z,m.position=new x.GeometryAttribute({componentDatatype:p.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})),n.normal&&((r=new Float32Array(72))[0]=0,r[1]=0,r[2]=1,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=1,r[9]=0,r[10]=0,r[11]=1,r[12]=0,r[13]=0,r[14]=-1,r[15]=0,r[16]=0,r[17]=-1,r[18]=0,r[19]=0,r[20]=-1,r[21]=0,r[22]=0,r[23]=-1,r[24]=1,r[25]=0,r[26]=0,r[27]=1,r[28]=0,r[29]=0,r[30]=1,r[31]=0,r[32]=0,r[33]=1,r[34]=0,r[35]=0,r[36]=-1,r[37]=0,r[38]=0,r[39]=-1,r[40]=0,r[41]=0,r[42]=-1,r[43]=0,r[44]=0,r[45]=-1,r[46]=0,r[47]=0,r[48]=0,r[49]=1,r[50]=0,r[51]=0,r[52]=1,r[53]=0,r[54]=0,r[55]=1,r[56]=0,r[57]=0,r[58]=1,r[59]=0,r[60]=0,r[61]=-1,r[62]=0,r[63]=0,r[64]=-1,r[65]=0,r[66]=0,r[67]=-1,r[68]=0,r[69]=0,r[70]=-1,r[71]=0,m.normal=new x.GeometryAttribute({componentDatatype:p.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:r})),n.st&&((i=new Float32Array(48))[0]=0,i[1]=0,i[2]=1,i[3]=0,i[4]=1,i[5]=1,i[6]=0,i[7]=1,i[8]=1,i[9]=0,i[10]=0,i[11]=0,i[12]=0,i[13]=1,i[14]=1,i[15]=1,i[16]=0,i[17]=0,i[18]=1,i[19]=0,i[20]=1,i[21]=1,i[22]=0,i[23]=1,i[24]=1,i[25]=0,i[26]=0,i[27]=0,i[28]=0,i[29]=1,i[30]=1,i[31]=1,i[32]=1,i[33]=0,i[34]=0,i[35]=0,i[36]=0,i[37]=1,i[38]=1,i[39]=1,i[40]=0,i[41]=0,i[42]=1,i[43]=0,i[44]=1,i[45]=1,i[46]=0,i[47]=1,m.st=new x.GeometryAttribute({componentDatatype:p.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:i})),n.tangent&&((i=new Float32Array(72))[0]=1,i[1]=0,i[2]=0,i[3]=1,i[4]=0,i[5]=0,i[6]=1,i[7]=0,i[8]=0,i[9]=1,i[10]=0,i[11]=0,i[12]=-1,i[13]=0,i[14]=0,i[15]=-1,i[16]=0,i[17]=0,i[18]=-1,i[19]=0,i[20]=0,i[21]=-1,i[22]=0,i[23]=0,i[24]=0,i[25]=1,i[26]=0,i[27]=0,i[28]=1,i[29]=0,i[30]=0,i[31]=1,i[32]=0,i[33]=0,i[34]=1,i[35]=0,i[36]=0,i[37]=-1,i[38]=0,i[39]=0,i[40]=-1,i[41]=0,i[42]=0,i[43]=-1,i[44]=0,i[45]=0,i[46]=-1,i[47]=0,i[48]=-1,i[49]=0,i[50]=0,i[51]=-1,i[52]=0,i[53]=0,i[54]=-1,i[55]=0,i[56]=0,i[57]=-1,i[58]=0,i[59]=0,i[60]=1,i[61]=0,i[62]=0,i[63]=1,i[64]=0,i[65]=0,i[66]=1,i[67]=0,i[68]=0,i[69]=1,i[70]=0,i[71]=0,m.tangent=new x.GeometryAttribute({componentDatatype:p.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:i})),n.bitangent&&((o=new Float32Array(72))[0]=0,o[1]=1,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=1,o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=0,o[13]=1,o[14]=0,o[15]=0,o[16]=1,o[17]=0,o[18]=0,o[19]=1,o[20]=0,o[21]=0,o[22]=1,o[23]=0,o[24]=0,o[25]=0,o[26]=1,o[27]=0,o[28]=0,o[29]=1,o[30]=0,o[31]=0,o[32]=1,o[33]=0,o[34]=0,o[35]=1,o[36]=0,o[37]=0,o[38]=1,o[39]=0,o[40]=0,o[41]=1,o[42]=0,o[43]=0,o[44]=1,o[45]=0,o[46]=0,o[47]=1,o[48]=0,o[49]=0,o[50]=1,o[51]=0,o[52]=0,o[53]=1,o[54]=0,o[55]=0,o[56]=1,o[57]=0,o[58]=0,o[59]=1,o[60]=0,o[61]=0,o[62]=1,o[63]=0,o[64]=0,o[65]=1,o[66]=0,o[67]=0,o[68]=1,o[69]=0,o[70]=0,o[71]=1,m.bitangent=new x.GeometryAttribute({componentDatatype:p.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:o})),(o=new Uint16Array(36))[0]=0,o[1]=1,o[2]=2,o[3]=0,o[4]=2,o[5]=3,o[6]=6,o[7]=5,o[8]=4,o[9]=7,o[10]=6,o[11]=4,o[12]=8,o[13]=9,o[14]=10,o[15]=8,o[16]=10,o[17]=11,o[18]=14,o[19]=13,o[20]=12,o[21]=15,o[22]=14,o[23]=12,o[24]=18,o[25]=17,o[26]=16,o[27]=19,o[28]=18,o[29]=16,o[30]=20,o[31]=21,o[32]=22,o[33]=20,o[34]=22,o[35]=23):((u=new Float64Array(24))[0]=t.x,u[1]=t.y,u[2]=t.z,u[3]=a.x,u[4]=t.y,u[5]=t.z,u[6]=a.x,u[7]=a.y,u[8]=t.z,u[9]=t.x,u[10]=a.y,u[11]=t.z,u[12]=t.x,u[13]=t.y,u[14]=a.z,u[15]=a.x,u[16]=t.y,u[17]=a.z,u[18]=a.x,u[19]=a.y,u[20]=a.z,u[21]=t.x,u[22]=a.y,u[23]=a.z,m.position=new x.GeometryAttribute({componentDatatype:p.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u}),(o=new Uint16Array(36))[0]=4,o[1]=5,o[2]=6,o[3]=4,o[4]=6,o[5]=7,o[6]=1,o[7]=0,o[8]=3,o[9]=1,o[10]=3,o[11]=2,o[12]=1,o[13]=6,o[14]=5,o[15]=1,o[16]=2,o[17]=6,o[18]=2,o[19]=3,o[20]=7,o[21]=2,o[22]=7,o[23]=6,o[24]=3,o[25]=0,o[26]=4,o[27]=3,o[28]=4,o[29]=7,o[30]=0,o[31]=1,o[32]=5,o[33]=0,o[34]=5,o[35]=4);var u,a=f.Cartesian3.subtract(a,t,d),t=.5*f.Cartesian3.magnitude(a);return c.defined(e._offsetAttribute)&&(a=u.length,u=new Uint8Array(a/3),a=e._offsetAttribute===s.GeometryOffsetAttribute.NONE?0:1,s.arrayFill(u,a),m.applyOffset=new x.GeometryAttribute({componentDatatype:p.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:u})),new x.Geometry({attributes:m,indices:o,primitiveType:x.PrimitiveType.TRIANGLES,boundingSphere:new y.BoundingSphere(f.Cartesian3.ZERO,t),offsetAttribute:e._offsetAttribute})}},u.getUnitBox=function(){return t=!c.defined(t)?u.createGeometry(u.fromDimensions({dimensions:new f.Cartesian3(1,1,1),vertexFormat:m.VertexFormat.POSITION_ONLY})):t},e.BoxGeometry=u});
//# sourceMappingURL=BoxGeometry-e13849f7.js.map
