# etcd-result-objectify
Objectify the results of a recursive etcd query.

[![Build Status](https://travis-ci.org/mmalecki/etcd-result-objectify.svg?branch=master)](https://travis-ci.org/mmalecki/etcd-result-objectify)

For example, a structure like:

```
- foo
  - bar: baz
  - oof
    - baz: rab
```

changes into:

```js
{
  foo: {
    bar: "baz",
    oof: {
      baz: "rab"
    }
  }
}
```

## Installation
```sh
npm install etcd-result-objectify
```

## Usage
```js
var Etcd = require('node-etcd')
var etcdResultObjectify = require('etcd-result-objectify')

var etcd = new Etcd()

etcd.get('foo', { recursive: true }, function(err, result) {
  if (err) throw err
  console.dir(etcdResultObjectify(result))
})
```
