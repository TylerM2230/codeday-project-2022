const makePostRequestGenerator = require("../makePostRequestGenerator")

describe("makePostRequest", () => {
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