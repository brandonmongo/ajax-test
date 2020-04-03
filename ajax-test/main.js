const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function getTableHeaders(obj) {
    let tableHeaders = [];

    Object.keys(obj).forEach(function(key){ 
        tableHeaders.push(`<tb>${key}</tb>`);
    });

return `<tb>${tableHeaders}</tb>`;

}

function writeToDocument(type) {
    let el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        data = data.results;
        let tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            // el.innerHTML += "<p>" + item.name + "</p>";
        });

        el.innerHTML = `<table>${tableHeaders}</table>`;
    });
}
