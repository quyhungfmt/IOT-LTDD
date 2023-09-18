google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['humidity', 80],
    ['CPU', 55],
    ['Network', 68]
  ]);

  var options = {
    width: 400, height: 120,
    redFrom: 20, redTo: 100,
    yellowFrom:15, yellowTo: 90,
    minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
  
  chart.draw(data, options);

  function listenDataSensor (path,sensorName) {
    var dataSensor = firebase.database().ref("IOT/"+path+"/"+sensorName);
    dataSensor.on('value', (listenVal) => {
       let data2 = listenVal.val();
       data.setValue(0, 1,data2);
       chart.draw(data, options);      
    })
 }
 listenDataSensor('m01','Humidity')
  setInterval(function() {
    data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 1000);
  setInterval(function() {
    data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
    chart.draw(data, options);
  }, 1000);
}