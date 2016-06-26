require('babel-register')({
  presets: ['es2015'],
  extensions: [".js"]
});

var Hapi = require('hapi');
var constants = require('./src/config/constants.js');

//var basicAuth = require('./src/middleware/basic-auth');
//var routes = require('./src/routes');

var options = {
    state: {
        cookies: {
            strictHeader: false
        }
    }
};

var host = 'htpp://localhost';//constants.application['host'];
var port = 3030; //constants.application['port'];
var server = new Hapi.Server();

server.connection({
    port: port
    //host: host
});

// server.pack.require('hapi-auth-basic', function (err) {
// 	server.auth.strategy('simple', 'basic', true, {
// 		validateFunc: basicAuth
// 	});
// });

server.ext('onRequest', function (request, next) {
    request.plugins.createControllerParams = function (requestParams) {
        var params = _.clone(requestParams);
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
        console.log('Server running in port #' + port);
    });
}