const http = require('http')
const makePostRequestGenerator = require('./util/makePostRequestGenerator')

let port, host
port = 8000
host = 'localhost'

const allRequests = []
const makePostRequest = makePostRequestGenerator(allRequests)

const requestListener = function (req, res) {
    allRequests.forEach(request => {
        request(req, res);
    })
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

const makeGetRequest = (url, callback) => {
    allRequests.push(function (req, res) {
        if (url === req.url && req.method === 'GET'){
            callback(req, res);
        }
    })
}

makeGetRequest('/test', function (req, res) {
    res.writeHead(200);
    res.end("My test");
})

makePostRequest('/post', function (req, res) {
    res.writeHead(200);
    res.end("My post test");
})