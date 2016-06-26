const env = process.env.NODE_ENV || 'development';
var dbContants = null;
var appConstants = null;

class Constants {

    constructor() {

        dbContants = this.getDatabaseConfig();
        appConstants = this.getApplicationConfig();
        return this.build();
    }

    build() {
        return {
            application: {
                url: appConstants[env]['url'],
                host: appConstants[env]['host'],
                port: appConstants[env]['port'],
            },
            database: {
                host: dbContants[env]['host'],
                user: dbContants[env]['user'],
                port: dbContants[env]['port'],
                password: dbContants[env]['password'],
                database: dbContants[env]['database']
            },
            server: {
                defaultHost: 'http://localhost:3030'
            }
        };
    }

    getDatabaseConfig() {
        return {
            'production': {
                'host': process.env.DB_PRD_HOST,
                'user': process.env.DB_PRD_USER,
                'password': process.env.DB_PRD_PASS,
                'database': 'database_production'
            },
            'development': {
                'host': 'localhost:3306',
                'user': 'root',
                'password': '300999',
                'database': 'rental_movie_4All'
            },
            'test': {
                'host': 'localhost',
                'user': process.env.DB_TEST_USER,
                'password': process.env.DB_TEST_PASS,
                'database': 'database_test'
            }
        };
    }

    getApplicationConfig() {
        return {
            'production': {
                'url': 'https://' + process.env.NODE_HOST + ':' + process.env.NODE_PORT,
                'host': process.env.NODE_HOST,
                'port': process.env.NODE_PORT
            },
            'development': {
                'url': 'http://localhost:3003',
                'host': 'localhost',
                'port': '3003'
            },
            'test': {
                'url': 'http://' + process.env.NODE_HOST + ':' +
                process.env.NODE_PORT,
                'host': process.env.NODE_HOST,
                'port': process.env.NODE_PORT
            }
        };
    }
}

export default Constants;