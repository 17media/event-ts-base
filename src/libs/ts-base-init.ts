import c from 'chalk';
import glob from 'fast-glob';

import packageJSON from '../../package.json';

import write from '../utils/write';
import { parseJSON, stringify } from '../utils/JSON';

import { readFile, exists, mkdir } from '../utils/fs';

Promise.all([
  glob('tslint.json'),
  glob('*prettier*'),
  glob('tsconfig.json'),
  glob('.vscode/launch.json'),
]).then(async ([tslints, prettiers, tsconfigs, vscodeLaunchJSONs]) => {
  /**
   * prettier.config.js
   */
  if (prettiers.length) {
    console.log(`${c.cyan(prettiers[0] as string)} is already exist.`);
  } else {
    write(`const base = require('${packageJSON.name}/prettier.config')

module.exports = Object.assign(base, {})
`).to('prettier.config.js');
  }

  /**
   * tslint.json
   */
  if (tslints.length) {
    console.log(`${c.cyan('tslint.json')} is already exist.`);
  } else {
    write(stringify({ extends: [`${packageJSON.name}/tslint`] })).to(
      'tslint.json',
    );
  }

  /**
   * =tsconfig.json
   */
  if (tsconfigs.length) {
    console.log(`${c.cyan('tsconfig.json')} is already exist.`);
  } else {
    write(await readFile(`node_modules/${packageJSON.name}/tsconfig.json`)).to(
      'tsconfig.json',
    );
  }

  /**
   * package.json
   */
  const pkg = parseJSON(await readFile('package.json'));
  if (!pkg.scripts) {
    pkg.scripts = {};
  }

  if (!pkg.husky || !pkg.husky.hooks || !pkg.husky.hooks['pre-commit']) {
    Object.assign(pkg, {
      husky: {
        hooks: {
          'pre-commit': packageJSON.husky.hooks['pre-commit'],
        },
      },
    });
  }

  if (!pkg.jest) {
    Object.assign(pkg, {
      jest: packageJSON.jest,
    });
  }

  if (!pkg['lint-staged']) {
    Object.assign(pkg, {
      'lint-staged': packageJSON['lint-staged'],
    });
  }

  write(stringify(pkg)).to('package.json');

  /**
   * .vscode/launch.json
   */
  if (vscodeLaunchJSONs.length) {
    console.log(`${c.cyan(vscodeLaunchJSONs[0] as string)} is already exist.`);
  } else {
    if (!(await exists('.vscode'))) {
      await mkdir('.vscode');
    }

    write(
      `// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n${stringify(
        parseJSON(
          await readFile(
            `node_modules/${packageJSON.name}/.vscode/launch.json`,
          ),
        ),
      )}`,
    ).to('.vscode/launch.json');
  }
});

process.on('unhandledRejection', (r) => console.log(r.stack));
