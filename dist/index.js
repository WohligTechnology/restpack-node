"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var html2pdf_1 = __importDefault(require("./html2pdf"));
exports.HTML2PDF = html2pdf_1.default;
var screenshot_1 = __importDefault(require("./screenshot"));
exports.Screenshot = screenshot_1.default;
exports.default = {
    /** Create a new HTML to PDF API Client with supplied user access token */
    html2pdf: function (accessToken) { return new html2pdf_1.default(accessToken); },
    /** Create a new Screenshot Client with supplied user access token */
    screenshot: function (accessToken) { return new screenshot_1.default(accessToken); }
};
