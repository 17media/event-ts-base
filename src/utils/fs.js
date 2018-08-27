"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const fs_1 = __importDefault(require("fs"));
exports.readFile = (path = '', options) => util_1.promisify(fs_1.default.readFile)(path, options).then((buf) => buf.toString());
exports.exists = util_1.promisify(fs_1.default.exists);
exports.mkdir = util_1.promisify(fs_1.default.mkdir);
