import AuthenticatedAPI from "./AuthenticatedAPI";

export = VideoStation;

declare class VideoStation extends AuthenticatedAPI {
    syno: any;

    sessionName: any;

    constructor(syno?: any);

    getMethods(params?: any, done?: any): any;

}


