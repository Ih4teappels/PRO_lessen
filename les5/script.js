window.addEventListener("load",function(){
	
	// we maken een xmlHTTPRequest aan
    var req = new XMLHttpRequest();
    var url = "index.php";
    // welke url moet er worden opgehaald?
    // req.open('GET', 'data/student.json', true);
    req.open('GET', url, true);

    // we voegen een 'listener' toe om te kijken of de pagina geladen is
    // je kunt ook andere events gebruiken zoals readystatechange
    req.addEventListener('load', function () {
        var jsonString = req.responseText;
        console.log(JSON.parse(jsonString));
    });

    // we starten het laden van de pagina
    req.send();
	
});