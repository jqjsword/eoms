importScripts("tlejs.worker.js");
// importScripts('tleStr.worker.js');

const cn_TimeInterval = 300000; //单位：毫秒

self.onmessage = function(event) {
    var stNames = event.data['satelliteNames'];
    var satelliteStr = event.data['infos'];
    var startTimeStamp = event.data['startTime'];
    var endTimeStamp = event.data['endTime'];
    var satelliteInfos = JSON.parse(satelliteStr);

    /*get all interval timestamps*/
    var tsts = [];
    var start = startTimeStamp;
    while (start < endTimeStamp) {
        tsts.push(start);
        start += cn_TimeInterval;
    }
    var ret = {};
    var all = new Array();
    var percent = 0;
    for (var i = 0; i < tsts.length; i++) {
        var items = [];
        items.push(tsts[i]);
        for (var name in stNames) {
            // var tle = satellite_tle_map[stNames[name]];
            var tle = satelliteInfos[stNames[name]]['tle'];
            var latLonObj = getLatLngObj(tle, tsts[i]);
            items.push(latLonObj);
        }
        all.push(items);
        percent = 100.0 * i / tsts.length;
        if (i % 50 == 0) {
            ret['status'] = 'working';
            ret['percent'] = percent;
            ret['positions'] = all;
            self.postMessage(ret);
            all = new Array();
        } else if (i == tsts.length - 1) {
            ret['status'] = 'done';
            ret['percent'] = 100;
            ret['positions'] = all;
            self.postMessage(ret);
        }
    }
};