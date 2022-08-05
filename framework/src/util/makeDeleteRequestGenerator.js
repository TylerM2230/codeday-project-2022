const makeDeleteRequestGenerator = (allRequests) => {
  return (url, callback) => {
    allRequests.push(function (req, res) {
      if (url === req.url && req.method === "DELETE") {
        callback(req, res);
      }
    });
  };
};

module.exports = makeDeleteRequestGenerator;
