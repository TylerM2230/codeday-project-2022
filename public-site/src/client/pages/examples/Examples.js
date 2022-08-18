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
              Amet non excepteur ut fugiat ullamco nostrud ea Lorem. Nostrud
              labore consequat nostrud qui officia do exercitation exercitation
              officia incididunt minim excepteur. Ut consequat quis aute
              adipisicing non amet sit esse irure ex occaecat Lorem dolore
              laboris. Non Lorem excepteur aute commodo voluptate velit nostrud
              incididunt.
            </p>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
            >{`const onsed = require('onsed')
const app = onsed()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(\`Example app listening on port \${PORT}\`)
}`}</SyntaxHighlighter>
          </div>
          <div ref={basicRouting}>
            <h1>Basic Routing</h1>
            <hr />
            <p>
              Amet non excepteur ut fugiat ullamco nostrud ea Lorem. Nostrud
              labore consequat nostrud qui officia do exercitation exercitation
              officia incididunt minim excepteur. Ut consequat quis aute
              adipisicing non amet sit esse irure ex occaecat Lorem dolore
              laboris. Non Lorem excepteur aute commodo voluptate velit nostrud
              incididunt.
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
              Amet non excepteur ut fugiat ullamco nostrud ea Lorem. Nostrud
              labore consequat nostrud qui officia do exercitation exercitation
              officia incididunt minim excepteur. Ut consequat quis aute
              adipisicing non amet sit esse irure ex occaecat Lorem dolore
              laboris. Non Lorem excepteur aute commodo voluptate velit nostrud
              incididunt.
            </p>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
            >{`app.static(*filePath*)`}</SyntaxHighlighter>
            <p>
              Amet non excepteur ut fugiat ullamco nostrud ea Lorem. Nostrud
              labore consequat nostrud qui officia do exercitation exercitation
              officia incididunt minim excepteur. Ut consequat quis aute
              adipisicing non amet sit esse irure ex occaecat Lorem dolore
              laboris. Non Lorem excepteur aute commodo voluptate velit nostrud
              incididunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;
