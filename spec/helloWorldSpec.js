var request = require("request");

var base_url = "http://localhost:8080/"

console.log("He

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
      console.log(response.statusCode);
        done();
      });
    });

    it("returns Hello World", function(done) {
    console.log("Heyy3");
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("Hello World");
        done();
      });
    });
  })
});
