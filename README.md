<h1 align="center">
  TS Base | TypeScript Infrastructure
</h1>
<p align="center">
  <a href="https://circleci.com/gh/17media/ts-base" alt="Build Status">
    <img src="https://circleci.com/gh/17media/ts-base.svg" />
  </a>
  <a href="https://codecov.io/gh/17media/ts-base" alt="Coverage">
    <img src="https://img.shields.io/codecov/c/github/17media/ts-base/BRANCH.svg?style=flat-square&" />
  </a>
</p>

## Infrastructure

Everything you needed for TypeScript project init. it includes:

- `tslint.json` - TSLint configs extends:
  - tslint-config-airbnb
  - tslint-config-prettier
  - tslint-plugin-prettier
  - tslint-react
- `tsconfig.json` - TypeScript setting with strict mode
- `prettier.config.js` - Prettier with precommit hook integration.
- `.vscode/launch.json` - Added `ts-node` for debugging.

## Installation

```sh
yarn add --dev github:17media/ts-base
```

## Initialization

```sh
yarn ts-base-init
```
