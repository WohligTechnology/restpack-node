"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
var Client = /** @class */ (function () {
    function Client(baseURL, accessToken) {
        this.baseURL = baseURL;
        this.accessToken = accessToken;
    }
    Client.prototype.request = function (path, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return new Promise(function (res, rej) {
            options = options || {};
            options.headers = options.headers || {};
            options.headers["x-access-token"] = _this.accessToken;
            request_1.default("" + _this.baseURL + path, options, function (err, response, body) {
                if (err)
                    return rej(err);
                else if (response.statusCode != 200) {
                    return rej(body);
                }
                else {
                    return res(body);
                }
            });
        });
    };
    return Client;
}());
exports.Client = Client;
