'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Constants = function () {
    function Constants() {
        _classCallCheck(this, Constants);

        var env = process.env.NODE_ENV || 'development';
        var dbContants = this.getDatabaseConfig();
        var appConstants = this.getApplicationConfig();

        // if (!obj.application['host']) {
        //     throw new Error('Missing constant application.host. Check your enviroment variables NODE_HOST.');
        // } else if (!obj.application['port']) {
        //     throw new Error('Missing constant application.port. Check your enviroment variable NODE_PORT.');
        // } else if (!obj.database['host']) {
        //     throw new Error('Missing constant database.host. Check your enviroment variables.');
        // } else if (!obj.database['user']) {
        //     throw new Error('Missing constant database.user. Check your enviroment variables.');
        // } else if (!obj.database['password']) {
        //     throw new Error('Missing constant database.password. Check your enviroment variables.');
        // } else if (!obj.database['database']) {
        //     throw new Error('Missing constant database.database. Check your enviroment variables.');
        // }

        // return obj;
    }

    _createClass(Constants, [{
        key: 'buildObj',
        value: function buildObj() {
            return {
                application: {
                    url: appConstants[env]['url'],
                    host: appConstants[env]['http://localhost'],
                    port: appConstants[env]['3000']
                },
                // database: {
                //     host: dbContants[env]['host'],
                //     user: dbContants[env]['user'],
                //     password: dbContants[env]['password'],
                //     database: dbContants[env]['database']
                // },
                server: {
                    defaultHost: 'http://localhost:3030'
                }
            };
        }
    }, {
        key: 'getDatabaseConfig',
        value: function getDatabaseConfig() {
            return {
                'production': {
                    'host': process.env.DB_PRD_HOST,
                    'user': process.env.DB_PRD_USER,
                    'password': process.env.DB_PRD_PASS,
                    'database': 'hapi-todo'
                },
                'development': {
                    'host': 'localhost',
                    'user': process.env.DB_DEV_USER,
                    'password': process.env.DB_DEV_PASS,
                    'database': 'hapi-todo'
                },
                'test': {
                    'host': 'localhost',
                    'user': process.env.DB_TEST_USER,
                    'password': process.env.DB_TEST_PASS,
                    'database': 'hapi-todo-test'
                }
            };
        }
    }, {
        key: 'getApplicationConfig',
        value: function getApplicationConfig() {
            return {
                'production': {
                    'url': 'https://' + process.env.NODE_HOST + ':' + process.env.NODE_PORT,
                    'host': process.env.NODE_HOST,
                    'port': process.env.NODE_PORT
                },
                'development': {
                    'url': 'http://' + process.env.NODE_HOST + ':' + process.env.NODE_PORT,
                    'host': process.env.NODE_HOST,
                    'port': process.env.NODE_PORT
                },
                'test': {
                    'url': 'http://' + process.env.NODE_HOST + ':' + process.env.NODE_PORT,
                    'host': process.env.NODE_HOST,
                    'port': process.env.NODE_PORT
                }
            };
        }
    }]);

    return Constants;
}();

exports.default = Constants;