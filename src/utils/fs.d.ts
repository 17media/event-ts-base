/// <reference types="node" />
import fs from 'fs';
export declare const readFile: (path?: string, options?: Object | undefined) => Promise<string>;
export declare const exists: typeof fs.exists.__promisify__;
export declare const mkdir: typeof fs.mkdir.__promisify__;
