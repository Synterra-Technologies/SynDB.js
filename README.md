# SynDB

## Usage

You can use SynDB to store and retrieve data in a database, And it is very easy to use.

## Description

SynDB is a database that is json based, It is lightweight and fast, And it is easy to use.

## Getting Started

### Dependencies

* [Node.js](http://nodejs.org/)
### Installing

```js
$ npm install -g syndb.js
```

### Exmaple

```js
const syndb = require('syndb.js');
const db = syndb('test.db');

db.set('key', 'value');
db.get('key'); // 'value'
db.delete('key');
db.getFile('key'); // 'value'
db.getData()
db.create_list('key');
db.push('key', 'value');
db.pop('key');
db.get_list('key');
```

## Authors

Contributors names and contact info

DeveloperJosh
[discord](https://discord.gg/321750582912221184)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details