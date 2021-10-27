// Access DB
const mysql = require('mysql');
const config = require("../config.json");

var connection = mysql.createPool({
    host: config.dbx.host,
    user: config.dbx.user,
    password: config.dbx.password,
    database: config.dbx.db
});

connection.getConnection(function (err) {
    if (err)
        throw err;
});

module.exports = {
    mysql: mysql,
    con: connection
};
