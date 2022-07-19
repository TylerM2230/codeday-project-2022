// === START framework code ===
const http = require("http");

let port, host;
port = 8000;
host = "localhost";

const allRequests = [];

const requestListener = (req, res) => {
  allRequests.forEach((request) => {
    request(req, res);
  });
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

const makeGetRequest = (url, callback) => {
  allRequests.push((req, res) => {
    if (url === req.url && req.method === "GET") {
      callback(req, res);
    }
  });
};

const makeDeleteRequest = (url, callback) => {
  allRequests.push((req, res) => {
    if (url === req.url && req.method === "DELETE") {
      callback(req, res);
    }
  });
};
// === END framework code ===

// --- Runner Code ---

makeGetRequest("/", (req, res) => {
  res.writeHead(200);
  res.end("home");
});

//GET request
makeGetRequest("/test", (req, res) => {
  res.writeHead(200);
  res.end("My test");
});

//DELETE request
makeDeleteRequest("/test", (req, res) => {
  res.writeHead(200);
  res.end("Delete request recieved");
});
