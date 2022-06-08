$(() => {
    $('#chart').dxChart({
        dataSource,
        series:{
            argumentField: 'day',
            valueField: 'oranges',
            name: 'My oranges',
            type:'bar',
            color: '#ffaa66',
        },
    });
});


$(function(){
    $("#dataGrid").dxDataGrid({
        dataSource: data,
        columns:[{
            dataField: "Filial"
        }, {
            dataField: "GrupoPC"
        }, {
            dataField: "Data",
            dataType: "date",
        }, {
            dataField: "PontoControle"
        }, {
            dataField: "Aprovados"
        }, {
            dataField: "Reprovados"
        },
    {
        dataField: "%Reprovação",
    }],
        allowColumnReordering: true,
    });
});