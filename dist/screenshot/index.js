"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../lib/client");
var Screenshot = /** @class */ (function (_super) {
    __extends(Screenshot, _super);
    /**
     * Create a new HTML to PDF conversion API client
     * @param accessToken User access token
     */
    function Screenshot(accessToken) {
        return _super.call(this, "https://restpack.io/api/screenshot/v3", accessToken) || this;
    }
    /**
     * Capture a web page accessible by the given URL and return the resulting document information
     * @param url URL of the target website to be converted to PDF
     * @param options API options
     */
    Screenshot.prototype.capture = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = options;
        opts.json = true;
        opts.url = url;
        return this.request("/capture", { method: "POST", json: opts });
    };
    /**
     * Capture an HTML snippet to and return the resulting document information
     * @param url URL of the target website to be converted to PDF
     * @param options API options
     */
    Screenshot.prototype.captureHTML = function (html, options) {
        if (options === void 0) { options = {}; }
        var opts = options;
        opts.json = true;
        opts.html = html;
        return this.request("/capture", { method: "POST", json: opts });
    };
    /**
     * Capture a web page accessible by the given URL and return the resulting PDF document as Buffer
     * @param url URL of the target website to be converted to PDF
     * @param options API options
     */
    Screenshot.prototype.captureToImage = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = options;
        opts.url = url;
        return this.request("/capture", { method: "POST", encoding: null, json: opts });
    };
    /**
     * Capture an HTML snippet and return the resulting PDF document as Buffer
     * @param url URL of the target website to be converted to PDF
     * @param options API options
     */
    Screenshot.prototype.captureHTMLToImage = function (html, options) {
        if (options === void 0) { options = {}; }
        var opts = options;
        opts.html = html;
        return this.request("/capture", { method: "POST", encoding: null, json: opts });
    };
    return Screenshot;
}(client_1.Client));
exports.default = Screenshot;
