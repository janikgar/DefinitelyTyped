import API = require('./API');

export = AuthenticatedAPI;

declare class AuthenticatedAPI extends API {
    request(options?: {
        api: string,
        version: string,
        path: string,
        method: string,
        params: object,
    }, done?: void): any;

}


