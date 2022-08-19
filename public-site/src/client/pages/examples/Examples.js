import React, { useRef } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Examples.css";

const Examples = () => {
  const helloWorld = useRef(null);
  const basicRouting = useRef(null);
  const serveStatic = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="container">
      <div className="row" style={{ paddingTop: "2%" }}>
        <div className="col-sm-2">
          <h3>
            <p>
              <u>Examples</u>
            </p>
          </h3>
          <ul className="list-unstyled">
            <li onClick={() => scrollToSection(helloWorld)}>Hello World!</li>
            <li onClick={() => scrollToSection(basicRouting)}>Basic Routing</li>
            <li onClick={() => scrollToSection(serveStatic)}>
              Serve static files
            </li>
          </ul>
        </div>
        <div className="col">
          <div ref={helloWorld}>
            <h1>Hello World!</h1>
            <hr />
            <p>
              The example below creates a web server that displays the text
              "Hello World!" on the home screen. The framework module is
              imported using the require() syntax and an instance of it is
              called and referred to as app by convention. A route for a GET
              request is then configured using the makeGetRequest() method. The
              '/' denotes the home page and the callback functions sends the
              text "Hello World!" as a response.
            </p>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
            >{`const onsed = require('onsed')
const app = onsed()
const PORT = process.env.PORT || 8080

app.makeGetRequest('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`)
}`}</SyntaxHighlighter>
          </div>
          <div ref={basicRouting}>
            <h1>Basic Routing</h1>
            <hr />
            <p>
              Basic routes can be set up by configuring the routes for each
              corresponding HTTP method. The format is as follows:
              .make(HTTP-Method)Request
            </p>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
            >{`// GET method route
app.makeGetRequest('/', (req, res) => {
  res.send('GET request to the homepage')
})
          
// POST method route
app.makePostRequest('/', (req, res) => {
  res.send('POST request to the homepage')
})

// PUT method route
app.makePutRequest('/', (req, res) => {
  res.send('PUT request to the homepage')
})

// DELETE method route
app.makeDeleteRequest('/', (req, res) => {
  res.send('DELETE request to the homepage')
})  `}</SyntaxHighlighter>
          </div>
          <div ref={serveStatic}>
            <h1>Serve static files</h1>
            <hr />
            <p>
              Static files can be served by simply utilizing the .static()
              method and giving the path to the file as an argument. In this
              instance, the given filepath refers to the static directory. When
              the content is served the file can be found at url/filename.
            </p>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
            >{`const pathToStatic = path.join(__dirname, "..", "..", "static");

if (!fs.existsSync(pathToStatic)) {
  console.error("Server offline!");                    
  process.exit(1);
}
                        
app.static(pathToStatic)`}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
