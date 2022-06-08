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
        dataSource,
        columns:[{
            dataField: "FullName"
        }, {
            dataField: "Position"
        }, {
            dataField: "BirthDate",
            dataType: "date",

        }, "City",{
            dataField: "Country"
        },
        "Address",
        "HomePhone",
    {
        dataField: "PostalCode",
    }],
        allowColumnReordering: true,
    });
});