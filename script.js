$(() => {
  $("#chart").dxChart({
    dataSource: data,
    showBorders: true,
    series: {
      argumentField: "cdFilial",
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
  $("#dataGrid").dxDataGrid({
    dataSource: data,
    showBorders: true,
    rowAlternationEnabled: true,
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
  });
});
