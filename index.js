/// <reference path="typings/tsd.d.ts" />
"use strict";
var express = require("express");
var Bunuesly;
(function (Bunuesly) {
    var App = (function () {
        function App() {
            this.configureExpressServer();
        }
        App.prototype.configureExpressServer = function () {
            this.app = express();
            this.app.get('/', function (req, res) {
                res.send('Hello World!');
            });
            this.app.listen(3000, function () {
                console.log('Example app listening on port 3000!');
            });
        };
        return App;
    }());
    Bunuesly.App = App;
})(Bunuesly || (Bunuesly = {}));
new Bunuesly.App();
