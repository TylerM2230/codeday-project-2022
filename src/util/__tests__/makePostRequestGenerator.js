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
    })
<<<<<<< HEAD

    test("check if the right method is implemented", () => {
        const allRequests = []
        const makePostRequest = makePostRequestGenerator(allRequests)
        makePostRequest('/post', function (req, res) {
            res.writeHead(200);
            res.end("My post test");
        })
        let req = {url : "/post", method : "POST"}
        let res = {writeHead : jest.fn(), end : jest.fn()}
        allRequests[0](req, res)
        expect(res.writeHead).toHaveBeenCalled()
    })
    
    test("check if the wrong method is implemented", () => {
        const allRequests = []
        const makePostRequest = makePostRequestGenerator(allRequests)
        makePostRequest('/post', function (req, res) {
            res.writeHead(200);
            res.end("My post test");
        })
        req = {url : "/post", method : "GET"}
        res = {writeHead : jest.fn(), end : jest.fn()}
        allRequests[0](req, res)
        expect(res.writeHead).not.toHaveBeenCalled()
    })
    

})
=======
})
>>>>>>> cc4c207fd20a887d8f4b712ff7d50fe2a44232ed
>>>>>>> main
