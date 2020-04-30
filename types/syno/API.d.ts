import _ = require('lodash');
import Syno = require('./Syno');

export = API;

declare class API {
    syno: Syno;

    constructor(syno?: Syno);

    request(options?: {
        api: string,
        version: string,
        path: string,
        method: string,
        params: object,
    }, done?: void): any;

    requestAPI(args?: {
        params: object,
        done: void,
        apiInfos: {
            api: string,
            version: string,
            path: string,
            method: string,
        },
        requiredParams: Array<string>,
    }): any;

    error(code?: number): string;

}


