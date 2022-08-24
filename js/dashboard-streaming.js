// ** Dashboard Straming **//
// jQuery( document ).ready(function($)
//  {
//     var ctx1 = document.getElementById('skyfall');
//     var data1 = {
//         datasets: [{
//             data: [100,100,100,100,100,100],
//             backgroundColor: ['rgb(0,139,139)'] }],
//         labels: ['Skyfall (MB)','Skyfall (MB)','Skyfall (MB)','Skyfall (MB)','Skyfall (MB)']
//     }
//     var skyfall = new Chart(ctx1, {
//         type: 'pie',
//         data: data1,
//      });

//     var ctx2 = document.getElementById('remainingStreaming');
//     var data2 = {
//         datasets: [{
//             data: [100,0],
//             backgroundColor: [ 'rgb(255,165,0)']
//                 }],
//         labels: ['Remaining Streaming (MB)','Other']
//     }
//     var remainingStreaming = new Chart(ctx2, {
//         type: 'pie',
//         data: data2,
//      });
// });



var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  options:{
  	legend:{
      display:false
    },
    tooltips: {
       bodyFontSize: 30
      },
  },
  data: {
    labels: ['Remaining Streaming (MB)','Other'],
    datasets: [{
      backgroundColor: [
        'rgb(255,165,0)','#ddd'
      ],
      data: [90,10]
    }]
  }
});

document.getElementById('js-legend').innerHTML = myChart.generateLegend();


var ctx1 = document.getElementById("myChart1").getContext('2d');
var myChart1 = new Chart(ctx1, {
  type: 'pie',
  options:{
  	legend:{
      display:false
    },
    tooltips: {
       bodyFontSize: 30
      },
  },
  data: {
    labels: ['Skyfall (MB)'],
    datasets: [{
      backgroundColor: [
        'rgb(0,139,139)',
      ],
      data: [100]
    }]
  }
});

document.getElementById('js-legend1').innerHTML = myChart1.generateLegend();
