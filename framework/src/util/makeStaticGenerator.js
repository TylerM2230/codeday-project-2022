const fs = require('fs');
const path = require('path');
const mime = require('mime');


const makeStaticGenerator = (allRequests) => {
  return (staticPath) => {
    allRequests.push(function (req, res) {
      const fileLocation = path.join(staticPath, req.url);

      if (fs.existsSync(fileLocation)) {
        fs.readFile(fileLocation, null, function (error, data) {
          if (!error && data)  {
            res.writeHead(200, { "Content-Type": mime.getType(fileLocation) });

            res.write(data);
            res.end();
          }
        });
      }


    })
  }}

module.exports = makeStaticGenerator
