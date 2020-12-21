# @riotjs/register

Allow .riot files importing in node.
This module is a syntax sugar for [`@riotjs/ssr/register`](https://github.com/riot/ssr#register---to-load-riot-components-in-node) 

## Installation

``` 
npm i @riotjs/register @riotjs/compiler
```

## Usage

You can enable the `.riot` files import by simply requiring this script in the main file of your project

```js
require('@riotjs/register')
```

### Advanced usage

If you need to disable the `.riot` files import you can use the teardown function exported:

```js
const teardown = require('@riotjs/register')

// import you riot files here
const App = require('./app.riot')

// disable the .riot files import
teardown()

// this call will fail
require('./app.riot')
```

If you use `mocha` for your unit tests you can require it with the `mocha -r @riotjs/register` 


