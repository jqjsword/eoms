define(["./when-208fe5b0","./PrimitivePipeline-5d59526f","./createTaskProcessorWorker","./Transforms-f1816abc","./Cartesian2-716c2715","./Check-d18af7c4","./Math-3ba16bed","./RuntimeError-7f634f5d","./ComponentDatatype-549ec0d3","./WebGLConstants-76bb35d1","./GeometryAttribute-0ee94cf1","./GeometryAttributes-b0b294d8","./GeometryPipeline-df743242","./AttributeCompression-69c5b20c","./EncodedCartesian3-7a9c1496","./IndexDatatype-d9b71b2b","./IntersectionTests-680c4e46","./Plane-f5dfabcd","./WebMercatorProjection-3b6236c8"],function(f,b,e,r,t,n,o,i,a,c,s,d,u,m,p,l,y,P,k){"use strict";var C={};return e(function(e,r){for(var t=e.subTasks,n=t.length,o=new Array(n),i=0;i<n;i++){var a=t[i],c=a.geometry,s=a.moduleName;f.defined(s)?(s=function(e){var r=C[e];return f.defined(r)||("object"==typeof exports?C[r]=r=require("Workers/"+e):require(["Workers/"+e],function(e){C[r=e]=e})),r}(s),o[i]=s(c,a.offset)):o[i]=c}return f.when.all(o,function(e){return b.PrimitivePipeline.packCreateGeometryResults(e,r)})})});
//# sourceMappingURL=createGeometry.js.map
