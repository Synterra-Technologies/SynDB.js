const syndb = require('./syndb.js');
const db = new syndb('./database/db.json', false);
db.set("new key1dsds", "new value1");
db.create_list("new list1");
db.push("new list1", "new value");
db.save();