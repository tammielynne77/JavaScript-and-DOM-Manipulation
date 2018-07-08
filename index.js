var $tbody = document.querySelector('tbody');
var $searchInput = document.querySelector('#input');
var $searchBtn = document.querySelector('#search');

$searchBtn.addEventListener('click', handleSearchButtonClick);

var filteredUfo = dataSet;

function renderTable() {
    $tbody.innerHTML = "";

    for (var i = 0; i < filteredUfo.length; i++) {
        
        var ufo = filteredUfo[i];
        var fields = Object.keys(ufo);
        
        var $row = $tbody.insertRow(i);

        for (var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = ufo[field];
        }
    }
}

function handleSearchButtonClick(){
    var filterDate = document.getElementById('input').value;

    filteredUfo = dataSet.filter(function(ufo) {
        var ufoDate = ufo.datetime;
        return ufoDate == filterDate;
    });
    
    renderTable();
}

renderTable();

