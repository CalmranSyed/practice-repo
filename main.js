// let url = "api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=99cdda2906b9a8ab0c2ddd20f791de7c";
// let responsetxt= req.responseText;
// let state= req.readyState;
// let reqstatus = req.statusText;
// let headers = req.getAllResponseHeaders;
let req = new XMLHttpRequest();
req.open("GET", "api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=99cdda2906b9a8ab0c2ddd20f791de7c" );
if (req.readyState == 4) {
    console.log(req.readyState , req.statusText);
    console.log(headers);
}
console.log("Bad request", req.ser , req.statusText);
console.log(headers);
req.onerror = function() {
    console.log("oh no");
}
req.send();
