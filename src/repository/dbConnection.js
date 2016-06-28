import MySql from 'mysql';
import Constants from '../config/constants.js';

let options = {
    multipleStatements: true
};

let dataBaseConfiguration = new Constants().database;

Object.assign(options, dataBaseConfiguration);

var pool = MySql.createPool(options);

/**
 * Class the communication database of api
 */
class DbConnection {

    createConnect(connectHandler) {
        pool.getConnection(function (err, connection) {
            if (err) return connectHandler(err, null);
            return connectHandler(null, connection);
        });
    }
    /**
     * Execute query in database
     * @param {params} params - the parameter necessary for executing in database 
     */
    executeQuery(params) {
        let sql = params.sql;
        let values = params.values;
        let queryHandler = params.callback;
        this.createConnect(function (err, connection) {
            if (err) return queryHandler(err, null);

            values !== undefined && null
                ? execQueryWithParameter(sql, values, queryHandler, connection)
                : execQuery(sql, queryHandler, connection);
        });
    }

};


function execQueryWithParameter(sql, values, queryHandler, connection) {
    connection.query(sql, values, function (err, rows, fields) {
        queryHandler(err, rows);
        connection.release();
    });
}

function execQuery(sql, queryHandler, connection) {
    connection.query(sql, function (err, rows, fields) {
        queryHandler(err, rows);
        connection.release();
    });
}

export default DbConnection;