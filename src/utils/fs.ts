import { promisify } from 'util';
import fs from 'fs';

export const readFile = (path = '', options?: Object) =>
  promisify(fs.readFile)(path, options).then((buf: Buffer) => buf.toString());

export const exists = promisify(fs.exists);
export const mkdir = promisify(fs.mkdir);
