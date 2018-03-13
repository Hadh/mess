var chart = AmCharts.makeChart("linechart", {
    "theme": "light",
    "type": "serial",
    "startDuration": 2,
    "dataProvider": [{
        "country": "Grand Tunis",
        "visits": 178265,
        "color": "#FF0F00"
    }, {
        "country": "Nord Est",
        "visits": 143099,
        "color": "#FF6600"
    }, {
        "country": "Nord ouest",
        "visits": 145000,
        "color": "#0D52D1"
    }, {
        "country": "Centre Est",
        "visits": 148193,
        "color": "#FCD202"
    }, {
        "country": "Centre Ouest",
        "visits": 127403,
        "color": "#F8FF01"
    }, {
        "country": "Sud Est",
        "visits": 131812,
        "color": "#333333"
    }, {
        "country": "Sud Ouest",
        "visits": 127103,
        "color": "#04D215"
    }],
    "valueAxes": [{
        "position": "left",
        "axisAlpha":0,
        "gridAlpha":0
    }],
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "colorField": "color",
        "fillAlphas": 0.85,
        "lineAlpha": 0.1,
        "type": "column",
        "topRadius":1,
        "valueField": "visits"
    }],
    "depth3D": 40,
	"angle": 30,
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha":0,
        "gridAlpha":0

    },
    "export": {
    	"enabled": true
     }

}, 0);