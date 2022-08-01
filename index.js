<<<<<<< HEAD
const onsed = require("./src/onsed");
=======
const serverFramework = require("./src/framework");
const fs = require('fs');
>>>>>>> cc4c207fd20a887d8f4b712ff7d50fe2a44232ed

const app = onsed();
const PORT = 8000;
const HOST = "localhost";

let inMemData = {"hello" : "world"};

app.makeGetRequest("/", (req, res) => {
<<<<<<< HEAD
  res.writeHead(200);
  res.end("hello world!");
=======
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
 
>>>>>>> cc4c207fd20a887d8f4b712ff7d50fe2a44232ed
});

app.makeGetRequest("/data", (req, res) => {
  res.writeHead(200);
  res.end(JSON.stringify(inMemData));
  console.log(inMemData)
});

app.makePostRequest("/data", (req, res) => {
  const data = req.data;
  inMemData = data;
  res.writeHead(200);
  res.end("POST request done");
  console.log(inMemData);
});

<<<<<<< HEAD
app.listen(PORT, HOST, () => {
=======

app.listen(PORT, () => {
>>>>>>> cc4c207fd20a887d8f4b712ff7d50fe2a44232ed
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
