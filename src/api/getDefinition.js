const fetch = require("node-fetch");
const { apiId, apiKey, url } = require("../config");


const getDefinition = (selectedMenu, wordID) => {
  const uri = url + wordID;
  // fetch(uri, {
  //   method: "GET",
  //   headers: { api_id: apiId, api_key: apiKey },
  //   mode: "no-cors"
  // })
  //   .then(json => console.log(json))
  //   .catch(err => console.error(err));

  r = req.get(url, headers = {"app_id": app_id, "app_key": app_key})
  console.log(r)

};

module.exports = getDefinition;
