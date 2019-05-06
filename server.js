const express = require("express");
const fetch = require("node-fetch");
const { apiId, apiKey, url } = require("./src/config");

const app = express();
const port = process.env.port || 5000;

// bodyparser middleware
app.use(express.json());

const getDefinition = wordID => {
  const uri = url + wordID;
  fetch(uri, {
    method: "GET",
    headers: { api_id: apiId, api_key: apiKey },
    mode: "no-cors"
  })
    .then(json => console.log(json))
    .catch(err => console.error(err));
};

getDefinition("ace");

app.listen(port, () => console.log(`listening to port: ${port}`));
