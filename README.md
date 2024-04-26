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

1. Create a module loader file as follows:

```js
import { pathToFileURL } from 'node:url'
import { register } from 'node:module'

register('@riotjs/register', pathToFileURL('./'))
```

2. Require the code above by running node as follows:

```shell
node --import ./register-riot.js your-program.js
```

Where `register-riot.js` is the file where you have pasted the module loader example described above.

This loader supports only [`type=module`](https://nodejs.org/api/packages.html#packagejson-and-file-extensions) projects.

[ci-image]: https://img.shields.io/github/actions/workflow/status/riot/register/test.yml?style=flat-square
[ci-url]: https://github.com/riot/register/actions
[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]: LICENSE
[npm-version-image]: http://img.shields.io/npm/v/@riotjs/register.svg?style=flat-square
[npm-downloads-image]: http://img.shields.io/npm/dm/@riotjs/register.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@riotjs/register
