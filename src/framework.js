const http = require("http");
const makePostRequestGenerator = require("./util/makePostRequestGenerator");

function framework() {
  const allRequests = [];
  // const makePostRequest = makePostRequestGenerator(allRequests);

  const requestListener = function (req, res) {
    allRequests.forEach((request) => {
      request(req, res);
    });
  };

  const server = http.createServer(requestListener);

  return {
    makePostRequest(url, callback) {
      allRequests.push(function (req, res) {
        if (url === req.url && req.method === "PUT") {
          callback(req, res);
        }
      });
    },
    
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
      //console.log(`Server is running on http://${HOST}:${PORT}`);
    },
  };
}

module.exports = framework;
