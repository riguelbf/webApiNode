/**
 * Start the server for api
 */
import Constants from './src/config/constants.js';
import Hapi from 'hapi';
//import DbConnection from './src/repository/dbConnection.js';
import ManageAuth from './src/middleware/manageAuth.js';
import BasicAuth from 'hapi-auth-basic';
import RoutesApi from './src/routes/routesApiRoute.js';

var options = {
    state: {
        cookies: {
            strictHeader: false
        }
    }
};

var constantsConfig = new Constants();
var server = new Hapi.Server();

server.connection({
    port: constantsConfig.application.port,
    host: constantsConfig.application.host
});

/**
 * Manage authentication user in api
 */
// server.pack.require('hapi-auth-basic', function (err) {
//     server.auth.strategy('simple', 'basic', true, {
//         validateFunc: new ManageAuth()
//     });
// });

/**
 * Manage request api
 */
// server.ext('onRequest', function (request, next) {
//     request.plugins.createControllerParams = function (requestParams) {
//         var params = Object.create(requestParams);
//         params.userId = request.auth.credentials.userId;
//         return params;
//     };
//     next();
// });

/**
 *  Add all the routes within the routes folder
 * */
let routes = new RoutesApi();
routes.forEach(function (route) {
    route.forEach(function (index) {
        server.route(index);
    });
});

module.exports = server;

if (process.env.NODE_ENV !== 'test') {
    server.start((error) => {
        if (error) {
            throw error;
        }
        console.log('Server running in port #' + constantsConfig.application.port);
    });
}