# @riotjs/register

Allow the import of `.riot` files importing in node.

**Note**: you can't import directly `.riot` files in [deno](https://github.com/denoland/deno/issues/1739) yet.
In that case you will need to compile your tags first

[![Build Status][ci-image]][ci-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

## Installation

```
npm i @riotjs/register @riotjs/compiler
```

## Usage

You can enable the import of `.riot` files as follows:

```shell
node --loader @riotjs/register your-app.js
```

This loader supports only [`type=module`](https://nodejs.org/api/packages.html#packagejson-and-file-extensions) projects.

[ci-image]: https://img.shields.io/github/actions/workflow/status/riot/register/test.yml?style=flat-square
[ci-url]: https://github.com/riot/register/actions
[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]: LICENSE
[npm-version-image]: http://img.shields.io/npm/v/@riotjs/register.svg?style=flat-square
[npm-downloads-image]: http://img.shields.io/npm/dm/@riotjs/register.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@riotjs/register
