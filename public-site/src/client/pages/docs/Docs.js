import React, { useRef } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Docs.css";

const Docs = () => {
  const onsed = useRef(null);
  const appListen = useRef(null);
  const appMakeGetRequest = useRef(null);
  const appMakePostRequest = useRef(null);
  const appMakePutRequest = useRef(null);
  const appMakeDeleteRequest = useRef(null);
  const appStatic = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      <div className="row" style={{ paddingTop: "2%" }}>
        <div className="col-sm-3">
          <h3>
            <p>
              <u>Docs</u>
            </p>
          </h3>
          <ul className="list-unstyled">
            <li onClick={() => scrollToSection(onsed)}>onsed()</li>
            <li onClick={() => scrollToSection(appListen)}>app.listen()</li>
            <li onClick={() => scrollToSection(appMakeGetRequest)}>
              app.makeGetRequest()
            </li>
            <li onClick={() => scrollToSection(appMakePostRequest)}>
              app.makePostRequest()
            </li>
            <li onClick={() => scrollToSection(appMakePutRequest)}>
              app.makPutRequest()
            </li>
            <li onClick={() => scrollToSection(appMakeDeleteRequest)}>
              app.makeDeleteRequest()
            </li>
            <li onClick={() => scrollToSection(appStatic)}>app.static()</li>
          </ul>
        </div>
        <div className="col">
          <div ref={onsed}>
            <h1>onsed()</h1>
            <hr />
            <p>
              The framework may be imported using the traditional require() or
              import ES6 syntax. By convention, app is used to denote an
              instance of the framework. Each instance of the framework that's
              initialized corresponds to one web server being created.
            </p>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
            >{`const onsed = require('onsed')

//server 1
const app = onsed()

//server 2
const app_two = onsed() 
`}</SyntaxHighlighter>
          </div>

          <div ref={appListen}>
            <h1>app.listen(PORT, HOST, callback)</h1>
            <hr />
            <p>
              In order to bind the application to a certain port, .listen() is
              utilized and takes in a port number, host, and a callback function
              as arguments. In the example below, "process.env" is used to
              initially defer to environment variables for the values of PORT
              and HOST.
            </p>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
            >{`const onsed = require('onsed')
const app = onsed()
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || 'localhost'

app.listen(PORT, HOST, () => {console.log(\`Server running on port \${PORT}\`)})
`}</SyntaxHighlighter>
          </div>

          <div ref={appMakeGetRequest}>
            <h1>app.makeGetRequest(route, callback)</h1>
            <hr />
            <p>
              In order to configure routes for the GET method, the
              .makeGetRequest() method is used and takes in a string route and a
              callback function.
            </p>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
            >{`app.makeGetRequest('/', (req, res) => {
  res.send('GET request to the homepage')
})`}</SyntaxHighlighter>
          </div>

          <div ref={appMakePostRequest}>
            <h1>app.makePostRequest(route, callback)</h1>
            <hr />
            <p>
              In order to configure routes for the POST method, the
              .makePostRequest() method is used and takes in a string route and
              a callback function.
            </p>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
            >{`app.makePostRequest('/', (req, res) => {
  res.send('POST request to the homepage')
})`}</SyntaxHighlighter>
          </div>

          <div ref={appMakePutRequest}>
            <h1>app.makePutRequest(route, callback)</h1>
            <hr />
            <p>
              In order to configure routes for the PUT method, the
              .makePutRequest() method is used and takes in a string route and a
              callback function.
            </p>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
            >{`app.makePutRequest('/', (req, res) => {
  res.send('PUT request to the homepage')
})`}</SyntaxHighlighter>
          </div>

          <div ref={appMakeDeleteRequest}>
            <h1>app.makeDeleteRequest(route, callback)</h1>
            <hr />
            <p>
              In order to configure routes for the DELETE method, the
              .makeDeleteRequest() method is used and takes in a string route
              and a callback function.
            </p>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
            >{`app.makeDeleteRequest('/', (req, res) => {
  res.send('DELETE request to the homepage')
})`}</SyntaxHighlighter>
          </div>
          <div ref={appStatic}>
            <h1>app.static(filepath)</h1>
            <hr />
            <p>
              Serving static files can be accomplished by simply using .static()
              and takes in the path to the file as an argument. The
              corresponding url is then the filename.
            </p>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
            >{`const pathToBuild = path.join(__dirname, "..", "..", "build");

if (!fs.existsSync(pathToBuild)) {
    console.error(
      "Server offline!"
    );
            
    process.exit(1);
}
            
app.static(pathToBuild)
`}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
