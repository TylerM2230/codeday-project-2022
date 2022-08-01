const makeGetRequestGenerator = (allRequests) => {
  return (url, callback) => {
    allRequests.push(function (req, res) {
      if (url === req.url && req.method === "GET") {
        callback(req, res);
      }
    });
  };
};

module.exports = makeGetRequestGenerator;
