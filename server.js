// const express = require("express");
// const fetch = require("node-fetch");

// var req=require('request')

// const apiId = "5bdb54e7";
// const apiKey = "f8e372ddf0bcc7cc37889790eb3eec5e";


// const config = require("./src/config");

// const getD = require("./src/api/getDefinition");


// const app = express();
// const port = process.env.port || 5000;

// // bodyparser middleware
// app.use(express.json());

// const getDefinition = wordID => {
//   // var u = new URLSearchParams();
//   // u.append('api_key', apiKey);
//   // u.append('api_id', apiId);

//   // const uri = config.url + wordID;
//   // fetch(uri, {
//   //   method: "GET",
//   //   headers: { 'api_id': apiId, 'api_key': apiKey },
//   //   mode: "no-cors"
//   // })
//   //   .then(res => res.json()).then((data)=>{console.log(data)})
//   //   .catch(err => console.error(err));


//   r = req.get(config.url+wordID, headers = {"app_id": apiId, "app_key": apiKey})
// //  console.log(r)
// console.log(r);


// };


// getDefinition("ace");


// app.listen(port, () => console.log(`listening to port: ${port}`));

let Dictionary = require("oxford-dictionary");

let config = {
  app_id : "5bdb54e7",
  app_key : "f8e372ddf0bcc7cc37889790eb3eec5e",
  source_lang : "en"
};

let dict = new Dictionary(config);

let lookup = dict.find("awesome");

  lookup.then(function(res) {
      // stringify JSON object to see full structure in console log
      console.log(JSON.stringify(res, null, 4));
  },
  function(err) {
      console.log(err);
  });