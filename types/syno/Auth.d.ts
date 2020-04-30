import API from "./API";

export = Auth;

declare class Auth extends API {
    login(sessionName?: any, done?: any): any;

    logout(sessionName?: any, done?: any): any;

    error(code?: any): any;

}


