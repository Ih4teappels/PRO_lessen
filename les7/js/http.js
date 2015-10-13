HTTP = {
    loadJSON: function(url, callback) {
        // we maken een xmlHTTPRequest aan
        var req = new XMLHttpRequest();
        // welke url moet er worden opgehaald?
        req.open('GET', url, true);

        // we voegen een 'listener' toe om te kijken of de pagina geladen is
        // je kunt ook andere events gebruiken zoals readystatechange
        req.addEventListener('load', function () {
            var jsonString = req.responseText;
            console.log(JSON.parse(jsonString));
            console.log('bestand is binnen');
            callback();
        });

        // we starten het laden van de pagina
        req.send();
        console.log('we halen het bestand op');

    }
}

