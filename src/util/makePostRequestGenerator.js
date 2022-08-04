const makePostRequestGenerator = (allRequests) => {
  return (url, callback) => {
    allRequests.push(function (req, res) {
      let data = "";
      req.on("data", (chunk) => {
        data += chunk;
      });
      req.on("end", () => {
        req.data = data;
        if (url === req.url && req.method === "POST") {
          callback(req, res);
        }
      });
    });
  };
};

module.exports = makePostRequestGenerator;
