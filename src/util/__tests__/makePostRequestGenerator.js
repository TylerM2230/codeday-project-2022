const makePostRequestGenerator = require("../makePostRequestGenerator");

describe("makePostRequest", () => {
<<<<<<< HEAD
  // expect(1).toEqual(1)
  test("it should append allRequests when run", () => {
    const allRequests = [];
    const makePostRequest = makePostRequestGenerator(allRequests);
    makePostRequest("/post", function (req, res) {
      res.writeHead(200);
      res.end("My post test");
    });
    expect(allRequests.length).toEqual(1);
  });
});
=======
    // expect(1).toEqual(1)
    test("it should append allRequests when run", () => {
        const allRequests = []
        const makePostRequest = makePostRequestGenerator(allRequests)
        makePostRequest('/post', function (req, res) {
            res.writeHead(200);
            res.end("My post test");
        })
        expect(allRequests.length).toEqual(1)
        console.log(allRequests);
    })
})
>>>>>>> cc4c207fd20a887d8f4b712ff7d50fe2a44232ed
