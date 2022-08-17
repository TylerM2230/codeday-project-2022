import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Docs.css";

const Docs = () => {
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
            <li>onsed()</li>
            <li>app.listen()</li>
            <li>app.makeGetRequest()</li>
            <li>app.makePostRequest()</li>
            <li>app.makPutRequest()</li>
            <li>app.makeDeleteRequest()</li>
            <li>app.static()</li>
          </ul>
        </div>
        <div className="col">
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
  );
};

export default Docs;
