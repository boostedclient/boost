// Access DB
const mysql = require('mysql');
const config = require("../config.json");

var connection = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.db
});

connection.getConnection(function (err) {
    if (err)
        throw err;
});

module.exports = {
    mysql: mysql,
    con: connection
};
