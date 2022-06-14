$(() => {
  $("#chart").dxChart({
    showBorders: true,
    palette: "soft",
    commonSeriesSetting: {
      argumentField: "cdFilial",
      name: "Índice de reprovação",
      type: "stackedBar",
    },
    series: [
      {valueField: "Aprovados", name: 'Aprovados'},
      {valueField: "Reprovados", name: 'Reprovados'},
    ],

  });

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
        dataField: "Aprovados",
      },
      {
        dataField: "Reprovados",
      },
      {
        dataField: "Reprovacao",
      },
    ],
    allowColumnReordering: true,
    onSelectionChanged(selectedItems) {
      const { dsPontoControle } = selectedItems.selectedRowsData.pop();
      let dt = data.filter((f) => f.dsPontoControle === dsPontoControle);
      let dataSource = dt.map((item) => ({
        cdFilial: item.cdFilial,
        Aprovados: item.Aprovados,
        Reprovados: item.Reprovados,
      }));

      if (dataSource) {
        $("#chart").dxChart({ dataSource });
      }
    },
  });
});

/*

$(() => {
  $("#chart").dxChart({
    dataSource: data,
    showBorders: true,
    series: {
      argumentField: "dsPontoControle",
      valueField: "Reprovacao",
      name: "Índice de reprovação",
      type: "bar",
      color: "#4682B4",
    },
  });
});

$(() => {
  $("#chartVader").dxChart({
    dataSource: dataFon,
    series: {
      argumentField: "day",
      valueField: "maquina",
      name: "Não Coformidade",
      type: "bar",
      color: "#4682B4",
    },
  });
});

$(() => {
  $("#pieChart").dxPieChart({
    dataSource,
    series: {
      argumentField: "day",
      valueField: "maquina",
    },
  });
});

$(function () {
  
});

*/
