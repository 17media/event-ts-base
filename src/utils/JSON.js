"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJSON = (stringLikeJSON = '') => new Function(`return ${stringLikeJSON}`)();
exports.stringify = (jsonObj) => JSON.stringify(jsonObj, null, 2);
