let xhr = new XMLHttpRequest();
let data;

xhr.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
   data = this.responseText; 
   SetData(JSON.parse(this.responseText));
}
};

xhr.open("GET", "https://swapi.co/api/");

xhr.send();

function SetData(jsonData) {
data = jsonData;
console.log(data);
}