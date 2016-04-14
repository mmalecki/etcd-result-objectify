var assert = require('assert')
var etcdResultObjectify = require('../')

var testNode = {
  "key": "/registrations",
  "dir": true,
  "nodes": [
    {
    "key": "/registrations/foo",
    "value": "bar",
    "modifiedIndex": 35,
    "createdIndex": 35
  },
  {
    "key": "/registrations/zar",
    "dir": true,
    "nodes": [
      {
      "key": "/registrations/zar/far",
      "value": "bar",
      "modifiedIndex": 53,
      "createdIndex": 53
    }
    ],
    "modifiedIndex": 53,
    "createdIndex": 53
  }
  ],
  "modifiedIndex": 35,
  "createdIndex": 35
}

var testEmptyDir = {
  "key": "/empty",
  "dir": true
}

assert.deepEqual(etcdResultObjectify(testNode), {
  foo: 'bar',
  zar: {
    far: 'bar'
  }
})

assert.deepEqual(etcdResultObjectify(testEmptyDir), {})
