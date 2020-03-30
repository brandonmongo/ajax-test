let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
   console.log(JSON.parse(this.responseText)); 
}
};

xhr.open("GET", "https://swapi.co/api/");

xhr.send();
