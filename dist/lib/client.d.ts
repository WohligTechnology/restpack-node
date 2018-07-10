import request from "request";
export declare class Client {
    baseURL: String;
    accessToken: String;
    constructor(baseURL: String, accessToken: String);
    request(path: String, options?: request.CoreOptions): Promise<{}>;
}
