0. priprava npm balickovacieho nastroja

    npm init # inicializacia
    npm install balik --save # instalacia balika s ulozenim
    npm install balik --save-dev # instalacia balika pre development s ulozenim
    npm update # update balikov v package.json, prepise aj verzie v subore package.json
    npm install # nainstaluje baliky podla package.json (v zadanych verziach)

1. vytvorime si jednoduchu stranku

*src/entry.js*

    setTimeout(function () {
        document.getElementsByTagName("div")[0].innerHTML = 'Hacked by javascript';
    }, 1000);

*src/index.html*

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Vitajte na mojej super stránke</title>

        <script src="entry.js"></script>

        <link href="style.css" type="text/css" rel="stylesheet">

    </head>
    <body>
    <div>Ahoj svet</div>
    </body>
    </html>

*src/style.css*

    body {
        font-family: "Comic Sans MS";
    }

2. pridame do stranky pouzitie kniznice

*src/entry.js*

   function component() {
       var element = document.createElement('div');

       // Lodash, currently included via a script, is required for this line to work
       element.innerHTML = _.join(['Hello', 'webpack'], ' ');

       return element;
   }
   setTimeout(function () {
       document.getElementsByTagName("div")[0].innerHTML = 'Hacked by javascript';
       document.body.appendChild(component());
   }, 1000);

*src/index.html*

    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"></script>

3. potreba zabalenia nasho projektu do jedneho suboru

    webpack + nejake intro

    npm install webpack --save-dev

4. prva kompilacia

*webpack.config.js*

    const path = require('path');

    module.exports = {
        entry: './src/entry.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        }
    };

*package.json*

    "scripts": {
        "start": "webpack --config webpack.config.js"
    },

    npm start

5. lodash cez npm a nie cdn

    npm install lodash

*src/entry.js*

    import _ from 'lodash';

6. webpack

7.
* zmensenie kodu uglifyjs-webpack-plugin

    plugins: [
        new UglifyJSPlugin()
      ]

source: https://webpack.js.org/guides/getting-started/