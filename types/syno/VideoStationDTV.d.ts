import AuthenticatedAPI from "./AuthenticatedAPI";

export = VideoStationDTV;

declare class VideoStationDTV extends AuthenticatedAPI {
    syno: any;

    sessionName: any;

    constructor(syno?: any);

    getMethods(params?: any, done?: any): any;

}


