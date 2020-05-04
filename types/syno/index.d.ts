// Type definitions for syno 2.2
// Project: https://github.com/kwent/syno
// Definitions by: J. Garcia <https://github.com/janikgar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import request = require('request');
import fs = require('fs');
import path = require('path');
import _ = require('lodash');

declare class Syno {
    ss: SurveillanceStation;
    dtv: VideoStationDTV;
    vs: VideoStation;
    as: AudioStation;
    dl: DownloadStation;
    fs: FileStation;
    dsm: DSM;
    auth: Auth;
    session: null;
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

declare class Auth extends API {
    login(sessionName?: any, done?: any): any;

    logout(sessionName?: any, done?: any): any;

    error(code?: any): any;

}

declare class AuthenticatedAPI extends API {
    request(options?: {
        api: string,
        version: string,
        path: string,
        method: string,
        params: object,
    }, done?: void): any;

}

import pluralize = require('pluralize');

declare class Utils {
    static underscoreToCamelize: any;
    static trimSyno: any;
    static trimSynoNamespace: any;
    static fixCamelCase: any;
    static deletePattern: any;
    static listPluralize: any;
    static createFunctionName: any;
    static optionalParamsAndDone: any;
}



declare class VideoStation extends AuthenticatedAPI {
    syno: any;
    sessionName: any;
    constructor(syno?: any);
    getMethods(params?: any, done?: any): any;
}


declare class VideoStationDTV extends AuthenticatedAPI {
    syno: any;
    sessionName: any;
    constructor(syno?: any);
    getMethods(params?: any, done?: any): any;
}

declare class DownloadStation extends AuthenticatedAPI {
    syno: any;
    sessionName: any;
    constructor(syno?: any);
    getMethods(params?: any, done?: any): any;
    error(code?: any, api?: any): any;
}

declare class DSM extends AuthenticatedAPI {
    syno: any;
    sessionName: any;
    constructor(syno?: any);
    getMethods(params?: any, done?: any): any;
}

declare class FileStation extends AuthenticatedAPI {
    syno: any;
    sessionName: any;
    constructor(syno?: any);
    getMethods(params?: any, done?: any): any;
    error(code?: any, api?: any): any;
}

declare class SurveillanceStation extends AuthenticatedAPI {
    syno: any;
    sessionName: any;
    constructor(syno?: any);
    getMethods(params?: any, done?: any): any;
    error(code?: any, api?: any): any;
}

declare class AudioStation extends AuthenticatedAPI {
    syno: any;
    sessionName: any;
    constructor(syno?: any);
    getMethods(params?: any, done?: any): any;
}
