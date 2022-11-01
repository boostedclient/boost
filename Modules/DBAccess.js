// Access DB
const mysql = require('mysql');
const config = require("../config.json");

var connection = mysql.createPool({
    host: config.xdb.host,
    user: config.xdb.user,
    password: config.xdb.password,
    database: config.xdb.db
});

connection.getConnection(function (err) {
    if (err)
        throw err;
});

module.exports = {
    mysql: mysql,
    con: connection
};
