# @jm/eslint-config-jest

An [ESLint](http://eslint.org/) config that enforces best practices and prevents possible problems for the
[Node.js](https://nodejs.org/) environment.

It is meant as an extention to [@jm/eslint-config-base](https://github.com/Mensae/jm-eslint-config-base), but can
be used without.
By default it does not include any rules with regard to styling and formatting.

The idea is to use [prettier](https://prettier.io) for styling and so it does not include
rules that are conflicting with [prettier](https://prettier.io).

## Available configs

- `jest`, The, default, base configuration that does not include any rules with regard to styling
- `formatting`, Extention to the `jest` config that does include styling rules but only those that are not covered by [prettier](https://prettier.io).

## Installation

```sh
# inside your project's working tree
npm install @jm/eslint-config-jest --save-dev
```

## Usage

Example `.eslintrc.json` with only the base config

```json
{
  "extends": ["@jm/jest"]
}
```

Example `.eslintrc.json` with base config extended with formatting rules

```json
{
  "extends": ["@jm/jest", "@jm/eslint-config-jest/formatting"]
}
```

### Recommended usage

```json
{
  "extends": ["@jm/base", "@jm/jest"]
}
```

Or with formatting:

```json
{
  "extends": [
    "@jm/base",
    "@jm/eslint-config-base/formatting",
    "@jm/jest",
    "@jm/eslint-config-jest/formatting"
  ]
}
```
