const http = require("http");
const makePostRequestGenerator = require("./util/makePostRequestGenerator");

function framework() {
  const allRequests = [];
  const makePostRequest = makePostRequestGenerator(allRequests);

  const requestListener = function (req, res) {
    allRequests.forEach((request) => {
      request(req, res);
    });
  };

  const server = http.createServer(requestListener);

  return {
    // GET Request
    makeGetRequest(url, callback) {
      allRequests.push(function (req, res) {
        if (url === req.url && req.method === "GET") {
          callback(req, res);
        }
      });
    },

    // .listen() method
    listen(PORT, HOST, callback) {
      server.listen(PORT, HOST, callback);
    },
  };
}

module.exports = framework;
