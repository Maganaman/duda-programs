(function() {
  function drawChart(container) {
    Highcharts.chart(container, {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4]
      },{
        name: 'John',
        data: [5, 7, 3]
      }]
    });
  }

  var handler = {
    // these methods must be named init and clean

    init: function(options){
      dmAPI.loadScript('https://code.highcharts.com/highcharts.js').then(function(){
        drawChart(options.container);
      });
    },

    clean: function(options) {
      options.container.innerHTML = '';
    }
  }

  dmAPI.registerExternalWidget('chart', handler)
})();
