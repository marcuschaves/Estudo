$(() => {
  const data = [];
  const pontoDeControle = ["A", "B", "C"];

  while (data.length < 1000) {
    let grupoControle = pontoDeControle[Math.floor(Math.random() * 3)];
    let aprovados = Math.floor(Math.random() * 100);
    let reprovados = Math.floor(Math.random() * 20);

    data.push({
      cdFilial: Math.floor(Math.random() * 12) + 1,
      dsGrupoPC: grupoControle,
      dsPontoControle: grupoControle,
      Data: new Date(),
      aprovados,
      reprovados,
      reprovacao: reprovados / (aprovados + reprovados),
    });
  }
  const pieChart = $("#pieChart")
    .dxPieChart({
      title: "Reprovação",
      commonSeriesSettings: {
        argumentField: "cdFilial",
      },
      series: [
        
        {
          valueField: "aprovados",
          name: "Aprovados"
        },
        {
          valueField: "reprovacao",
          name: "Reprovacao"
        },
      ],
    })
    .dxPieChart('instance');

  const chart = $("#chart")
    .dxChart({
      title:"Não conformidade",
      name: "Índice de reprovação",
      showBorders: true,
      palette: "soft",
      commonSeriesSettings: {
        argumentField: "cdFilial",
        type: "stackedBar",
      },
      series: [
        {
          valueField: "aprovados",
          name: "Aprovados",
        },
        {
          valueField: "reprovados",
          name: "Reprovados",
        },
      ],
    })
    .dxChart("instance");

    const chartVader = $("#chartVader")
    .dxChart({
      title:"Não conformidade",
      name: "Índice de reprovação",
      showBorders: true,
      palette: "soft",
      commonSeriesSettings: {
        argumentField: "cdFilial",
        type: "stackedBar",
      },
      series: [
        {
          valueField: "aprovados",
          name: "Aprovados",
        },
        {
          valueField: "reprovados",
          name: "Reprovados",
        },
      ],
    })
    .dxChart("instance");
  $("#dataGrid").dxDataGrid({
    dataSource: data,
    showBorders: true,
    rowAlternationEnabled: true,
    selection: {
      mode: "single",
    },
    paging: {
      pageSize: 6,
    },
    pager: {
      showNavigationButtons: true,
    },
    columns: [
      {
        dataField: "cdFilial",
      },
      {
        dataField: "dsGrupoPC",
      },
      {
        dataField: "Data",
        dataType: "date",
      },
      {
        dataField: "dsPontoControle",
      },
      {
        dataField: "aprovados",
      },
      {
        dataField: "reprovados",
      },
      {
        dataField: "reprovacao",
        dataType: "number",
        customizeText: (options) => {
          return `${(options.value * 100).toFixed(2)}%`;
        },
      },
    ],
    onSelectionChanged(selectedItems) {
      const { dsPontoControle } = selectedItems.selectedRowsData.pop();
      let dt = data.filter((f) => f.dsPontoControle === dsPontoControle);

      let dataSource = dt.map((item) => ({
        cdFilial: item.cdFilial,
        aprovados: item.aprovados,
        reprovados: item.reprovados,
        reprovacao: item.reprovacao,
      }));

      if (dataSource) {
        chart.option({
          dataSource,
        });
        pieChart.option({
          dataSource,
        });
        chartVader.option({
          dataSource,
        })
      }
    },
  });
});
