const makeGetRequestGenerator = require("../makeGetRequestGenerator");

describe("makePostRequest", () => {
  // expect(1).toEqual(1)
  test("it should append allRequests when run", () => {
    const allRequests = [];
    const makeGetRequest = makeGetRequestGenerator(allRequests);
    makeGetRequest("/get", function (req, res) {
      res.writeHead(200);
      res.end("GET test");
    });
    expect(allRequests.length).toEqual(1);
  });
});
