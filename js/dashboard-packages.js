// ** Dashboard Package Jquery ** //
// jQuery( document ).ready(function($)
//  {
//     var ctx2 = document.getElementById('remainingPackages');
//     var data2 = {
//         datasets: [{
//             data: [100],
//             backgroundColor: [ 'rgb(255,165,0)']
//                 }],
//         labels: ['Remaining packages']
//     }
//     var remainingPackages = new Chart(ctx2, {
//         type: 'pie',
//         data: data2,
//      });
// });

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  options:{
  	legend:{
      display: false
    },
    tooltips: {
       bodyFontSize: 30
      },
  },
  data: {
    labels: ['Remaining packages'],
    datasets: [{
      backgroundColor: [
        'rgb(255,165,0)'
      ],
      data: [100]
    }]
  }
});

document.getElementById('js-legend').innerHTML = myChart.generateLegend();