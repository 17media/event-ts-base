"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const stream_1 = __importDefault(require("stream"));
const chalk_1 = __importDefault(require("chalk"));
class Write {
    constructor(text = '') {
        this.text = text;
    }
    to(fileName = '') {
        return new Promise((resolve, reject) => {
            const sr = new stream_1.default.Readable();
            sr.push(this.text);
            sr.push(null);
            sr.pipe(fs_1.createWriteStream(fileName))
                .on('finish', (res) => {
                console.log(`Updated ${chalk_1.default.cyan(fileName)}`);
                resolve(res);
            })
                .on('error', reject);
        });
    }
}
exports.default = (text) => new Write(text);
