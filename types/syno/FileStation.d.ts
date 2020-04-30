import AuthenticatedAPI from "./AuthenticatedAPI";

declare class FileStation extends AuthenticatedAPI {
    syno: any;

    sessionName: any;

    constructor(syno?: any);

    getMethods(params?: any, done?: any): any;

    error(code?: any, api?: any): any;

}


