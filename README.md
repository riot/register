# @riotjs/register

Allow `.riot` files importing in node.

**Notice**: you can't import directly `.riot` files in [deno](https://github.com/denoland/deno/issues/1739) yet.
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

You can enable the `.riot` files import by simply preloading this module

```shell
node --loader @riotjs/register your-app.js
```

If you use `mocha` for your unit tests you can require it with the `mocha -r @riotjs/register`

[ci-image]: https://img.shields.io/github/actions/workflow/status/riot/register/test.yml?style=flat-square
[ci-url]: https://github.com/riot/register/actions
[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]: LICENSE
[npm-version-image]: http://img.shields.io/npm/v/@riotjs/register.svg?style=flat-square
[npm-downloads-image]: http://img.shields.io/npm/dm/@riotjs/register.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@riotjs/register
