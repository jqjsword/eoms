const landsat = `LANDSAT 7                     
1 25682U 99020A   21068.19044844  .00000030  00000-0  16272-4 0  9999
2 25682  98.0456 128.5428 0001954  96.4827 263.6607 14.57195271164791`

const terra = `TERRA
1 25994U 99068A   21067.84379514  .00000054  00000-0  22008-4 0  9993
2 25994  98.1845 144.0737 0001262  93.1769  20.9166 14.57123625128694`;

const AQUA = `AQUA
1 27424U 02022A   21067.85447104  .00000107  00000-0  33759-4 0  9993
2 27424  98.2121  10.6637 0000337 138.1155 286.0838 14.57113205  2381`;


const ziyuan = `ZIYUAN 3-1(ZY3-1)
1 38046U 12001A   21068.08566435  .00000999  00000-0  47593-4 0  9998
2 38046  97.3897 143.9944 0002730  17.5831  75.3372 15.21392945508851`;

var sentinel = `SENTINEL-6
1 46984U 20086A   21067.56186051 -.00000061  00000-0  00000-0 0  9993
2 46984  66.0433 176.7051 0007852 265.1712  94.8402 12.80929841 13698`;

var satellite_tle_map = {
    'landsat': landsat,
    'TERRA': terra,
    'AQUA': AQUA,
    '资源3': ziyuan,
    'sentinel': sentinel,
};

var satelliteNameList = ['landsat', 'TERRA', 'AQUA', '资源3', 'sentinel'];

export { satelliteNameList, satellite_tle_map };
export default satellite_tle_map;