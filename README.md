<h1 align="center">
  TS Base | TypeScript Infrastructure
</h1>
<p align="center">
  <a href="https://circleci.com/gh/17media/event-ts-base" alt="Build Status">
    <img src="https://circleci.com/gh/17media/event-ts-base.svg" />
  </a>
  <a href="https://codecov.io/gh/17media/event-ts-base" alt="Coverage">
    <img src="https://img.shields.io/codecov/c/github/17media/event-ts-base/master.svg?style=flat-square&" />
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
yarn add --dev https://github.com/17media/event-ts-base.git\#latest
```

## Initialization

```sh
yarn event-ts-base-init
```

## Version Convention

`event-ts-base`'s major version base on TypeScript's version and suffix `YY.M.D`. So it looks like `3.0.1-18.8.8`.
