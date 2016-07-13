  import Jasmine from 'jasmine'
// var jasmine = new Jasmine();
// //jasmine.loadConfigFile('./support/jasmine.json')
// //  jasmine.execute();

// //var jasmine = require('jasmine');
var api = require("../api.js");
var baseUrl = "http://localhost:3003";
var request = require("request");

describe("Get all movies", function() {
  describe("GET /movie", function() {
    it("returns status code 200", function(done) {
      request.get(baseUrl + "/movie", function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
        console.log('teste');
      });
    });

    // it("returns Hello World", function(done) {
    //   request.get(base_url, function(error, response, body) {
    //     expect(body).toBe("Hello World");
    //     helloWorld.closeServer();
    //     done();
    //   });
    // });
  });
});