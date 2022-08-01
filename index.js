const serverFramework = require("./src/framework");
const fs = require('fs');

const app = serverFramework();
const PORT = 5000;
const HOST = "localhost";

let inMemData = {"hello" : "world"};

app.makeGetRequest("/", (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('./index.html', null, function(error, data) {
    if (error) {
      res.writeHead(404);
      res.write('File not found!');
    } 
    else {
      res.write(data);
    }
    res.end();
  });
 
});

app.makeGetRequest("/data", (req, res) => {
  res.writeHead(200);
  res.end(JSON.stringify(inMemData));
  console.log(inMemData)
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
