const http = require("http");

const makePostRequestGenerator = require("./util/makePostRequestGenerator");
const makeGetRequestGenerator = require("./util/makeGetRequestGenerator");

function onsed() {
  const allRequests = [];
  const requestListener = function (req, res) {
    allRequests.forEach((request) => {
      request(req, res);
    });

    // let data = "";
    // req.on("data", (chunk) => {
    //   data += chunk;
    // });
    // req.on("end", () => {
    //   console.log(data);
    //   res.end();
    // });
  };

  const server = http.createServer(requestListener);

  return {
    // GET Request
    makeGetRequest: makeGetRequestGenerator(allRequests),
    // POST Request
    makePostRequest: makePostRequestGenerator(allRequests),
    // .listen() method
    listen(PORT, HOST, callback) {
      server.listen(PORT, HOST, callback);
    },
  };
}

module.exports = onsed;
