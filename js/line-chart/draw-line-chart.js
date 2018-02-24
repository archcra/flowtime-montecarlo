function drawLineChart(chartDivId, chartDataJsonFile) {
  $.getJSON(chartDataJsonFile, function(data) {
    console.log('data', data);
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold',
      // fields: ['variance'], // 展开字段集
      fields: ['group 5', 'group 10', 'group 20', 'group 40', 'group 41', 'group 42', 'group 43', 'group 44', 'group 60', 'group 120', 'group 240'], // 展开字段集
      key: 'city', // key字段
      value: 'temperature', // value字段
    });
    const chart = new G2.Chart({
      container: chartDivId,
      forceFit: true,
      height: window.innerHeight - 200
    });
    chart.source(dv, {
      month: {
        range: [0, 1]
      }
    });
    chart.tooltip({
      crosshairs: {
        type: 'line'
      }
    });
    chart.axis('temperature', {
      label: {
        formatter: val => {
          return val;
        }
      }
    });
    chart.line().position('probability*temperature').color('city').shape('smooth');
    chart.point().position('probability*temperature').color('city').size(4).shape('circle').style({
      stroke: 'green',
      lineWidth: 1
    });
    chart.render();
  });
}
