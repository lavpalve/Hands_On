fetch("https://reqres.in/api/user").then(function(response){
    return response.json();
}).then(function(result){
    //console.log(result.data);
    var mainTable = document.querySelector('tbody');
    console.log(mainTable);
    for(var i=0;i<result.data.length;i++){
        var tableRow = document.createElement('tr');
        tableRow.innerHTML = `<td>${result.data[i].id}</td>`+
                            `<td>${result.data[i].name}</td>`+
                            `<td>${result.data[i].year}</td>`+
                            `<td>${result.data[i].color}</td>`+
                            `<td>${result.data[i].pantone_value}</td>`;
        mainTable.appendChild(tableRow);
    }
});