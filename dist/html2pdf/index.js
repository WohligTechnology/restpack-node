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
var HTML2PDF = /** @class */ (function (_super) {
    __extends(HTML2PDF, _super);
    /**
     * Create a new HTML to PDF conversion API client
     * @param accessToken User access token
     */
    function HTML2PDF(accessToken) {
        return _super.call(this, "https://restpack.io/api/html2pdf/v4", accessToken) || this;
    }
    /**
     * Convert a web page accessible by the given URL and return the resulting document information
     * @param url URL of the target website to be converted to PDF
     * @param options API options
     */
    HTML2PDF.prototype.convert = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = options;
        opts.json = true;
        opts.url = url;
        return this.request("/convert", { method: "POST", json: opts });
    };
    /**
     * Convert a HTML snippet to PDF and return the resulting document information
     * @param url URL of the target website to be converted to PDF
     * @param options API options
     */
    HTML2PDF.prototype.convertHTML = function (html, options) {
        if (options === void 0) { options = {}; }
        var opts = options;
        opts.json = true;
        opts.html = html;
        return this.request("/convert", { method: "POST", json: opts });
    };
    /**
     * Convert a web page accessible by the given URL and return the resulting PDF document as Buffer
     * @param url URL of the target website to be converted to PDF
     * @param options API options
     */
    HTML2PDF.prototype.convertToPDF = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = options;
        opts.url = url;
        return this.request("/convert", { method: "POST", encoding: null, json: opts });
    };
    /**
     * Convert a HTML snippet to PDF and return the resulting PDF document as Buffer
     * @param url URL of the target website to be converted to PDF
     * @param options API options
     */
    HTML2PDF.prototype.convertHTMLToPDF = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = options;
        opts.url = url;
        return this.request("/convert", { method: "POST", encoding: null, json: opts });
    };
    return HTML2PDF;
}(client_1.Client));
exports.default = HTML2PDF;
