"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const fast_glob_1 = __importDefault(require("fast-glob"));
const package_json_1 = __importDefault(require("../../package.json"));
const write_1 = __importDefault(require("../utils/write"));
const JSON_1 = require("../utils/JSON");
const fs_1 = require("../utils/fs");
Promise.all([
    fast_glob_1.default('tslint.json'),
    fast_glob_1.default('*prettier*'),
    fast_glob_1.default('tsconfig.json'),
    fast_glob_1.default('.vscode/launch.json'),
]).then(([tslints, prettiers, tsconfigs, vscodeLaunchJSONs]) => __awaiter(this, void 0, void 0, function* () {
    if (prettiers.length) {
        console.log(`${chalk_1.default.cyan(prettiers[0])} is already exist.`);
    }
    else {
        write_1.default(`const base = require('${package_json_1.default.name}/prettier.config')

module.exports = Object.assign(base, {})
`).to('prettier.config.js');
    }
    if (tslints.length) {
        console.log(`${chalk_1.default.cyan('tslint.json')} is already exist.`);
    }
    else {
        write_1.default(JSON_1.stringify({ extends: [`${package_json_1.default.name}/tslint`] })).to('tslint.json');
    }
    if (tsconfigs.length) {
        console.log(`${chalk_1.default.cyan('tsconfig.json')} is already exist.`);
    }
    else {
        write_1.default(yield fs_1.readFile(`node_modules/${package_json_1.default.name}/tsconfig.json`)).to('tsconfig.json');
    }
    const pkg = JSON_1.parseJSON(yield fs_1.readFile('package.json'));
    if (!pkg.scripts) {
        pkg.scripts = {};
    }
    if (!pkg.husky || !pkg.husky.hooks || !pkg.husky.hooks['pre-commit']) {
        Object.assign(pkg, {
            husky: {
                hooks: {
                    'pre-commit': package_json_1.default.husky.hooks['pre-commit'],
                },
            },
        });
    }
    if (!pkg.jest) {
        Object.assign(pkg, {
            jest: package_json_1.default.jest,
        });
    }
    if (!pkg['lint-staged']) {
        Object.assign(pkg, {
            'lint-staged': package_json_1.default['lint-staged'],
        });
    }
    write_1.default(JSON_1.stringify(pkg)).to('package.json');
    if (vscodeLaunchJSONs.length) {
        console.log(`${chalk_1.default.cyan(vscodeLaunchJSONs[0])} is already exist.`);
    }
    else {
        if (!(yield fs_1.exists('.vscode'))) {
            yield fs_1.mkdir('.vscode');
        }
        write_1.default(`// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n${JSON_1.stringify(JSON_1.parseJSON(yield fs_1.readFile(`node_modules/${package_json_1.default.name}/.vscode/launch.json`)))}`).to('.vscode/launch.json');
    }
}));
process.on('unhandledRejection', (r) => console.log(r.stack));
