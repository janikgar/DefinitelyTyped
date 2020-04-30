import AuthenticatedAPI from "./AuthenticatedAPI";

export = DownloadStation;

declare class DownloadStation extends AuthenticatedAPI {
    syno: any;

    sessionName: any;

    constructor(syno?: any);

    getMethods(params?: any, done?: any): any;

    error(code?: any, api?: any): any;

}


