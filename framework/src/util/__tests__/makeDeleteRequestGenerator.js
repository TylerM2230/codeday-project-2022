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

  test("check if the right method is implemented", () => {
    const allRequests = [];
    const makePutRequest = makePutRequestGenerator(allRequests);
    makePutRequest("/put", function (req, res) {
      res.writeHead(200);
      res.end("My put test");
    });
    let req = { url: "/put", method: "DELETE" };
    let res = { writeHead: jest.fn(), end: jest.fn() };
    allRequests[0](req, res);
    expect(res.writeHead).toHaveBeenCalled();
  });

  test("check if the wrong method is implemented", () => {
    const allRequests = [];
    const makePutRequest = makePutRequestGenerator(allRequests);
    makePutRequest("/put", function (req, res) {
      res.writeHead(200);
      res.end("My put test");
    });
    req = { url: "/put", method: "POST" };
    res = { writeHead: jest.fn(), end: jest.fn() };
    allRequests[0](req, res);
    expect(res.writeHead).not.toHaveBeenCalled();
  });
});
