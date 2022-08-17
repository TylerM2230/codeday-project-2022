import './API_Demo.css';
import API_Demo from './API_Demo';
import API_Headers from './API_Head';

const GetBody = `const onsed = require("framework");

const app = onsed();

app.makeGetRequest("/my-first-get", (req, res) => {
  res.writeHead(200);
  res.end(“hello world”);
});`

const PostBody = `app.makePostRequest("/my-first-post", (req, res) => {
  const data = req.data;
  res.writeHead(200);
  res.end(“post”);
});`

const PutBody = `app.makePutRequest(“/put”, (req, res) => {
  res.writeHead(200);
  res.end(“put”);
});`

const DeleteBody = `app.makeDeleteRequest("/delete", (req, res) => {
  res.writeHead(200);
  res.end(“delete”);
});`

function API_Doc() {  
  return (
    <div>
      <API_Headers title = "API"/>
      <div className='API-Test'>
      <API_Demo header="Setup" body={GetBody} />

      <API_Demo header="Make a Post" body ={PostBody} />

      <API_Demo header="Modify Data" body ={PutBody} />

      <API_Demo header="Delete Data" body ={DeleteBody} />
      </div>

    </div>  
  );
}
export default API_Doc;