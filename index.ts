/// <reference path="typings/tsd.d.ts" />

import * as express from "express";

module Bunuesly {

    export class App {

        private _app: express.Application;
        private _title: 'Buñuesly: Barriga llena corazon contento';
        private _consoleLogStarterMsg: 'App listening on port 3000!';
        
        constructor(port: number) {
            this._app = express();
            this.configureExpressServer(port);
        }
        
        private configureExpressServer(port: number){
            this._app.get('/', (req, res) => { res.send(this._title) });
            this._app.listen(port, () => { console.log(this._consoleLogStarterMsg) });    
        }
    }
}

new Bunuesly.App(3000);