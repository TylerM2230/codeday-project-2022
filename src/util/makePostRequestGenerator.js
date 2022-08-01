const makePostRequestGenerator = (allRequests) => {
  return (url, callback) => {
    allRequests.push(function (req, res) {
      if (url === req.url && req.method === "POST") {
        callback(req, res);
      }

      let data = "";
      req.on("data", (chunk) => {
        data += chunk;
      });
      req.on("end", () => {
        res.end();
      });
      req.data = data;
    });
  };
};

module.exports = makePostRequestGenerator;
