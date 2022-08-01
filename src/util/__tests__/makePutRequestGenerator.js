const makePutRequestGenerator = require("../makePutRequestGenerator");

describe("makePutRequest", () => {
  // expect(1).toEqual(1)
  test("it should append allRequests when run", () => {
    const allRequests = [];
    const makePutRequest = makePutRequestGenerator(allRequests);
    makePutRequest("/put", function (req, res) {
      res.writeHead(200);
      res.end("My put test");
    });
    expect(allRequests.length).toEqual(1);
    console.log(allRequests.length);
    console.log(allRequests[0].toString());
    let req = { url: "/put", method: "PUT" };
    let res = { writeHead: jest.fn(), end: jest.fn() };
    allRequests[0](req, res);
    expect(res.writeHead).toHaveBeenCalled();
    req = { url: "/put", method: "POST" };
    res = { writeHead: jest.fn(), end: jest.fn() };
    allRequests[0](req, res);
    expect(res.writeHead).not.toHaveBeenCalled();
  });
});
