import AuthenticatedAPI = require('./AuthenticatedAPI')

export = AudioStation;

declare class AudioStation extends AuthenticatedAPI {
    syno: any;

    sessionName: any;

    constructor(syno?: any);

    getMethods(params?: any, done?: any): any;

}


