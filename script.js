$(() => {
    $("#chart").dxChart({
        showBorders: true,
        palette: 'soft',
        series: {
          argumentField: "cdFilial",
          valueField: "indiceReprovacao",
          name: "Índice de reprovação",
          type: "stackedBar",
        },
      });

    $("#dataGrid").dxDataGrid({
        dataSource: data,
        showBorders: true,
        rowAlternationEnabled: true,
        selection: {
            mode: 'single',
        },
        paging: {
          pageSize: 6,
        },
        pager: {
          showNavigationButtons: true,
        },
        columns: [{
            dataField: "cdFilial",
          },{
            dataField: "dsGrupoPC",
          },{
            dataField: "Data",
            dataType: "date",
          },{
            dataField: "dsPontoControle",
          },{
            dataField: "Aprovados",
          },{
            dataField: "Reprovados",
          },{
            dataField: "Reprovacao",
          },
        ],
        allowColumnReordering: true,
        onSelectionChanged(selectedItems) {
            const { dsPontoControle } = selectedItems.selectedRowsData.pop();
            let dt = data.filter(f => f.dsPontoControle === dsPontoControle);
            let dataSource = dt.map(item => ({
                cdFilial: item.cdFilial,
                indiceReprovacao: ((dt.filter(s => s.cdFilial == item.cdFilial)
                                        .reduce((a, b) => a + ((b['Aprovados'] || 0) - (b['Reprovados'] || 0)), 0)))*100
            }));

            if (dataSource) {
              $('#chart').dxChart({	dataSource });
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
