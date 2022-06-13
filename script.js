$(() => {
    $('#chart').dxChart({
        dataSource,
        showBorders: true,
        series:{
            argumentField: 'day',
            valueField: 'maquina',
            name: 'Grupo de máquina',
            type:'bar',
            color: '#4682B4',
        },
    });
});


$(function(){
    $("#dataGrid").dxDataGrid({
        dataSource: data,
        showBorders: true,
        rowAlternationEnabled: true,
        columns:[{
            dataField: "cdFilial"
        }, {
            dataField: "dsGrupoPC"
        }, {
            dataField: "Data",
            dataType: "date",
        }, {
            dataField: "dsPontoControle"
        }, {
            dataField: "Aprovados"
        }, {
            dataField: "Reprovados"
        }, {
        dataField: "Reprovacao",
    }],
        allowColumnReordering: true,
    });
});