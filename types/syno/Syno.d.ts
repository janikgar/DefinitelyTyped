import request = require('request');
import fs = require('fs');
import path = require('path');
import _ = require('lodash');

export = Syno;

declare class Syno {
    ss: any;
    dtv: any;
    vs: any;
    as: any;
    dl: any;
    fs: any;
    dsm: any;
    auth: any;
    session: any;
    request: any;

    constructor(params: {
        account: string,
        passwd: string,
        protocol?: string,
        host?: string,
        port?: string,
        apiVersion?: string, 
    });

    loadDefinitions(): object;
    createFunctionsFor(object?: any, apis?: any): void;
}


