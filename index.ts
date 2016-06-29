/// <reference path="typings/tsd.d.ts" />

import * as express from "express";

module Bunuesly {

    export class App {

        public app: express.Application;
        
        constructor() {
            this.configureExpressServer();
        }
        
        private configureExpressServer(){
            this.app = express();

            this.app.get('/', function (req, res) {
                res.send('Barriga llena corazon contento con Buñuesly');
            });

            this.app.listen(3000, function () {
                console.log('Example app listening on port 3000!');
            });    
        }
    }
}

new Bunuesly.App();