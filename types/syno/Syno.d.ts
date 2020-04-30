import request = require('request');
import fs = require('fs');
import path = require('path');
import _ = require('lodash');
import SurveillanceStation = require('./SurveillanceStation');
import VideoStationDTV = require('./VideoStationDTV');
import VideoStation = require('./VideoStation');
import AudioStation = require('./AudioStation');
import DownloadStation = require('./DownloadStations');
import FileStation = require('./FileStation');
import DSM = require('./DSM');
import Auth = require('./Auth');

export = Syno;

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


