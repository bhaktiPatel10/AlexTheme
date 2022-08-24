// ** Dashboard Users **//
// jQuery( document ).ready(function($)
//  {
//     var ctx2 = document.getElementById('remainingUsers');
//     var data2 = {
//         datasets: [{
//             data: [90,10],
//             backgroundColor: [ 'rgb(255,165,0)','rgb(255,209,153)']
//                 }],
//         labels: ['Remaining Users','Created Users']
//     }
//     var remainingUsers = new Chart(ctx2, {
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
    labels: ['Remaining USers','Created Users'],
    datasets: [{
      backgroundColor: [
        'rgb(255,165,0)','rgb(255,209,153)'
      ],
      data: [90,10]
    }]
  }
});

document.getElementById('js-legend').innerHTML = myChart.generateLegend();