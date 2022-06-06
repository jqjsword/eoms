import GSTC from '../gstc/gstc.esm.min.js';
import { getSatelliteNameInScene, getStationNameList } from './events.js';
import { licenseKey8000 } from '../gstc/keys.js'
const GSTCID = GSTC.api.GSTCID;
// GSTC.api.dayjs.extend(window.dayjs_plugin_weekOfYear);
// GSTC.api.dayjs.extend(window.dayjs_plugin_advancedFormat);


var iitems = [];
const columnsFromDB = [{
        id: 'id',
        label: 'ID',
        data: ({ row }) => Number(GSTC.api.sourceID(row.id)), // show original id
        sortable: ({ row }) => Number(GSTC.api.sourceID(row.id)), // sort by id converted to number
        width: 80,
        header: {
            content: 'ID',
        },
    },
    {
        id: 'label',
        data: 'label',
        sortable: 'label',
        expander: true,
        isHTML: false,
        width: 200,
        header: {
            content: '地面站',
        },
    },
];

const hours = [{
    zoomTo: 100, // we want to display this format for all zoom levels until 100
    period: 'hour',
    periodIncrement: 1,
    format({ timeStart }) {
        return timeStart.format('HH:mm DD MMMM YYYY'); // full list of formats: https://day.js.org/docs/en/display/format
    },
}, ];

const minutes = [{
    zoomTo: 100, // we want to display this format for all zoom levels until 100
    period: 'minute',
    periodIncrement: 5,
    main: true,
    format({ timeStart, vido }) {
        return vido.html `<div style="text-align:center;">${timeStart.format('HH:mm')}</div>`; // full list of formats: https://day.js.org/docs/en/display/format
    },
}, ];


function formatDateTime(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    var second = date.getSeconds();
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}


function formatDate(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}

var rrows = {}
$(document).ready(function() {
    $('#ganteBtn').click(function() {
        var stNames = getSatelliteNameInScene();
        if (stNames.length == 0) {
            toastr.warning('没有选择待计算的卫星!')
            return;
        }
        var facilityNames = getStationNameList();
        if (facilityNames.length == 0) {
            toastr.warning('没有选择待计算的地面站!')
            return;
        }
        var theSelDate = $('#theDate').val();
        var theSelStartTime = $('#theStartTime').val();
        var theSelEndTime = $('#theEndTime').val();
        var s = theSelDate.trim().split('-')
        var t = theSelStartTime.trim().split(':');
        var start_dt = new Date(s[0], s[1] - 1, s[2], t[0], t[1], t[2]);
        var theStartTimeStamp = start_dt.getTime();
        t = theSelEndTime.trim().split(':');
        var end_dt = new Date(s[0], s[1] - 1, s[2], t[0], t[1], t[2]);
        var theEndTimeStamp = end_dt.getTime();
        if (theEndTimeStamp < theStartTimeStamp) {
            toastr.error("结束时间晚于开始时间，请重新选择！");
            return;
        } else {
            console.log(theEndTimeStamp, theStartTimeStamp);
        }
        $.post("GetAccessTable", {
                'SatNames': stNames,
                'StationNames': facilityNames,
                'Start Time': theStartTimeStamp,
                'End Time': theEndTimeStamp,
            },
            function(data, status) {
                // console.log("Data: " + data + "\nStatus: " + status);
                var jsonObject = JSON.parse(data);
                //loop all facilities
                rrows = {};
                iitems = [];
                let rowId = 0;
                let itemId = 0;
                for (let k in jsonObject) {
                    let fid = GSTCID(String(rowId));
                    rrows[fid] = { fid, label: k, parentId: undefined, expanded: true, };
                    let stas = jsonObject[k];
                    rowId = rowId + 1;
                    //loop satellites
                    for (let st in stas) {
                        let sid = GSTCID(String(rowId));
                        rrows[sid] = { sid, label: st, parentId: fid, expanded: false, };
                        let tis = stas[st];
                        //loop time intervals
                        for (let ti in tis) {
                            var item = {
                                id: String(itemId++),
                                label: k + '-' + st,
                                rowId: String(rowId),
                                time: {
                                    start: GSTC.api.date(tis[ti]['time']).valueOf(),
                                    end: GSTC.api.date(tis[ti]['time']).add(parseInt(tis[ti]['duration']), 'second').valueOf(),
                                },
                            }
                            iitems.push(item);
                        }
                        //loop time intervals ---end
                        rowId = rowId + 1;
                    }
                }
                let ttime = {
                    zoom: 12,
                    from: GSTC.api.date(formatDate(start_dt)).startOf('day').valueOf(),
                    to: GSTC.api.date(formatDate(end_dt)).endOf('day').valueOf(),
                };

                let cchart = {
                    items: GSTC.api.fromArray(iitems),
                    calendarLevels: [hours, minutes],
                    time: ttime,
                };

                let cconfig = {
                    licenseKey: licenseKey8000,
                    list: {
                        columns: {
                            data: GSTC.api.fromArray(columnsFromDB),
                        },
                        rows: rrows,
                    },
                    chart: cchart,
                };
                let sstate = GSTC.api.stateFromConfig(cconfig);
                GSTC({
                    element: document.getElementById('gstc'),
                    state: sstate,
                });

                // state.update('config.chart.time.from', ttime.from);
                // state.update('config.chart.time.to', ttime.to);
                // state.update('config.list.rows', rrows);
                // state.update('config.chart.items', GSTC.api.fromArray(iitems));
                $('#myModal').modal('show');
            });
    });
});