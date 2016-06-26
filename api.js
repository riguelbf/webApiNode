import Constants from './src/config/constants.js';
import Hapi from 'hapi' ;
//var basicAuth = require('./src/middleware/basic-auth');
//var routes = require('./src/routes');

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

// server.pack.require('hapi-auth-basic', function (err) {
// 	server.auth.strategy('simple', 'basic', true, {
// 		validateFunc: basicAuth
// 	});
// });

server.ext('onRequest', function (request, next) {
    request.plugins.createControllerParams = function (requestParams) {
        var params = Object.create(requestParams);
        params.userId = request.auth.credentials.userId;
        return params;
    };
    next();
});

// Add all the routes within the routes folder
// if (routes) {
//     for (var route in routes) {
//         server.route(routes[route]);
//     }
// }

module.exports = server;

if (process.env.NODE_ENV !== 'test') {
    server.start((error) => {
        if (error) {
            throw error;
        }
        console.log('Server running in port #' + constantsConfig.application.port);
    });
}