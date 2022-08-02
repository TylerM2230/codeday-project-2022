const makeDeleteRequestGenerator = require("../makeDeleteRequestGenerator");

describe("makeDeleteRequest", () => {
  // expect(1).toEqual(1)
  test("it should append allRequests when run", () => {
    const allRequests = [];
    const makeDeleteRequest = makeDeleteRequestGenerator(allRequests);
    makeDeleteRequest("/get", function (req, res) {
      res.writeHead(200);
      res.end("Delete test");
    });
    expect(allRequests.length).toEqual(1);
  });
});
