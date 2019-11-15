var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json'); //has co-folder with index.js

var db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [], products: [], sessions: [], transfers: []})
  .write()

module.exports = db;