import request = require('request');

import fs = require('fs');

import path = require('path');

import _ = require('lodash');

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

    constructor(params?: any);

    loadDefinitions(): any;

    createFunctionsFor(object?: any, apis?: any): any;

}


