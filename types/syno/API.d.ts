import _ = require('lodash');

declare class API {
    syno: any;

    constructor(syno?: any);

    request(options?: any, done?: any): any;

    requestAPI(args?: any): any;

    error(code?: any): any;

}


