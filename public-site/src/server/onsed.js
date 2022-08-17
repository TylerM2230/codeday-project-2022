const http = require("http");

const makeStaticGenerator = require("./util/makeStaticGenerator");
const makePostRequestGenerator = require("./util/makePostRequestGenerator");
const makeGetRequestGenerator = require("./util/makeGetRequestGenerator");
const makeDeleteRequestGenerator = require("./util/makeDeleteRequestGenerator");
const makePutRequestGenerator = require("./util/makePutRequestGenerator");

function onsed() {
  const allRequests = [];

  const requestListener = function (req, res) {
    allRequests.forEach((request) => {
      request(req, res);
    });
  };

  const server = http.createServer(requestListener);

  return {
    static: makeStaticGenerator(allRequests),
    // GET Request
    makeGetRequest: makeGetRequestGenerator(allRequests),
    // POST Request
    makePostRequest: makePostRequestGenerator(allRequests),
    // PUT Request
    makePutRequest: makePutRequestGenerator(allRequests),
    // DELETE Request
    makeDeleteRequest: makeDeleteRequestGenerator(allRequests),
    // .listen() method
    listen(PORT, HOST, callback) {
      server.listen(PORT, HOST, callback);
    },
  };
}

module.exports = onsed;
