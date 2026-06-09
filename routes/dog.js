var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Dog API</title>
            </head>
            <body>
                <img id="dog-image" src="" alt="Random dog image">
                <script>
                    const request = new XMLHttpRequest();
                    request.open('GET', 'https://dog.ceo/api/breeds/image/random');
                    request.onload = function () {
                    const data = JSON.parse(request.responseText);
                    const dogImage = document.getElementById('dog-image');
                    dogImage.src = data.message;
                    };
                    request.send();
                </script>
            </body>
        </html>
    `);
});

module.exports = router;