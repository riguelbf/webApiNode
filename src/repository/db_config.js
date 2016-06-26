import MySql from 'mysql';
import Constants from './src/config/constants.js';

let internals = {};
let externals = {};
let options = {
    multipleStatements: true
};

let dataBaseConfiguration = new Constants().get

Object.assign(options, constants.database);

var pool = MySql.createPool(options);
internals.pool = pool;

class DbConnection {

    createConnect(connectHandler) {
        pool.getConnection(function (err, connection) {
            if (err) return connectHandler(err, null);
            return connectHandler(null, connection);
        });
    }

    executeQuery(params) {
        var sql = params.sql;
        var values = params.values;
        var queryHandler = params.callback;
        this.createConnect(function (err, connection) {
            if (err) return queryHandler(err, null);
            connection.query(sql, values, function (err, rows, fields) {
                queryHandler(err, rows);
                connection.release();
            });
        });
    }

};

export default DbConnection;