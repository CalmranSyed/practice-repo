let req = new XMLHttpRequest();
req.open("GET", "jsonplaceholder.typicode.com/users" );
req.responseType = "json";
req.setRequestHeader("Access-Control-Allow-Origin", "*");
req.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
req.onreadystatechange = function () {
    if (req.readyState === 4) {
        console.log(req.statusText , req.status);
        console.log(req.response);
    }
}
req.onerror = function() {
    console.log("Error");
}
req.send();
