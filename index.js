const serverFramework = require("./src/framework");

const app = serverFramework();
const PORT = 5000;
const HOST = "localhost";

let inMemData = {};

app.makeGetRequest("/", (req, res) => {
  res.writeHead(200);
  res.end("hello world");
});

app.makeGetRequest("/data", (req, res) => {
  res.writeHead(200);
  res.end(JSON.stringify(inMemData));
});

// app.makePostRequest("/data", (req, res) => {
//   const data = req.data;
//   inMemData = data;
//   res.writeHead(200);
//   res.end("POST request done");
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
