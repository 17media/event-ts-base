<h1 align="center">
  TS Base | TypeScript Infrastructure
</h1>
<p align="center">
  <a href="https://github.com/17media/event-ts-base/releases">
    <img src="https://flat.badgen.net/github/release/17media/event-ts-base" />
  </a>
  <a href="https://circleci.com/gh/17media/event-ts-base" alt="Build Status">
    <img src="https://flat.badgen.net/circleci/github/17media/event-ts-base/master" />
  </a>
  <a href="https://codecov.io/gh/17media/event-ts-base" alt="Coverage">
    <img src="https://flat.badgen.net/codecov/c/github/17media/event-ts-base" />
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
- `jest` / `ts-jest` for unit testing.

## Installation

```sh
yarn add --dev github:17media/event-ts-base\#latest
```

## Initialization

```sh
yarn event-ts-base-init
```

## Version Convention

`event-ts-base`'s major version base on TypeScript's version and suffix `YY.M.D`. So it looks like `3.0.1-18.8.8`.
