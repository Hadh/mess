var chart = AmCharts.makeChart( "chartdiv", {
    "type": "serial",
    "theme": "light",
    "depth3D": 20,
    "angle": 30,
    "legend": {
      "horizontalGap": 10,
      "useGraphSettings": true,
      "markerSize": 10
    },
    "dataProvider": [ {
      "year": 2003,
      "Superficie Agricole Totale utilisé": 2.5,
      "Superficie Agricole irrigué Totale": 2.5,
      "Estimation de la population": 2.1
    },{
      "year": 2004,
      "Superficie Agricole Totale utilisé (H)": 2.6,
      "Superficie Agricole irrigué Totale": 2.7,
      "Estimation de la population": 2.2
    }, {
      "year": 2005,
      "Superficie Agricole Totale utilisé": 2.6,
      "Superficie Agricole irrigué Totale": 2.7,
      "Estimation de la population": 2.2
    }, {
      "year": 2006,
      "Superficie Agricole Totale utilisé": 2.8,
      "Superficie Agricole irrigué Totale": 2.9,
      "Estimation de la population": 2.4
    } ],
    "valueAxes": [ {
      "stackType": "regular",
      "axisAlpha": 0,
      "gridAlpha": 0
    } ],
    "graphs": [ {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Superficie Agricole Totale utilisé",
      "type": "column",
      "color": "#000000",
      "valueField": "Superficie Agricole Totale utilisé"
    }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Superficie Agricole irrigué Totale",
      "type": "column",
      "color": "#000000",
      "valueField": "Superficie Agricole irrigué Totale"
    }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Estimation de la population",
      "type": "column",
      "newStack": true,
      "color": "#000000",
      "valueField": "Estimation de la population"
    } ],
    "categoryField": "year",
    "categoryAxis": {
      "gridPosition": "start",
      "axisAlpha": 0,
      "gridAlpha": 0,
      "position": "left"
    },
    "export": {
      "enabled": true
    }
  
  } );