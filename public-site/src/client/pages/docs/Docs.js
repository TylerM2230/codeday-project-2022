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
`}</SyntaxHighlighter>
          </div>

          <div ref={appListen}>
            <h1>app.listen(PORT, HOST, callback)</h1>
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
`}</SyntaxHighlighter>
          </div>

          <div ref={appMakeGetRequest}>
            <h1>app.makeGetRequest()</h1>
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
`}</SyntaxHighlighter>
          </div>

          <div ref={appMakePostRequest}>
            <h1>app.makePostRequest()</h1>
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
`}</SyntaxHighlighter>
          </div>

          <div ref={appMakePutRequest}>
            <h1>app.makePutRequest()</h1>
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
`}</SyntaxHighlighter>
          </div>

          <div ref={appMakeDeleteRequest}>
            <h1>app.makeDeleteRequest()</h1>
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
`}</SyntaxHighlighter>
          </div>
          <div ref={appStatic}>
            <h1>app.static()</h1>
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
`}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
