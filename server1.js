const http = require("https");
 

const app_id = "5bdb54e7"; // insert your APP Id
const app_key = "f8e372ddf0bcc7cc37889790eb3eec5e"; // insert your APP Key
const wordId = "ace";
const fields = "pronunciations";
const strictMatch = "false";

const options = {
  host: 'od-api.oxforddictionaries.com',
  port: '443',
  path: '/api/v2/entries/en-gb/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
  method: "GET",
  headers: {
    'app_id': app_id,
    'app_key': app_key
  }
};

http.get(options, (resp) => {
    let body = '';
    resp.on('data', (d) => {
        body += d;
    });
    resp.on('end', () => {
        let parsed = JSON.parse(body);
        console.log(parsed.results[0].lexicalEntries[0]);
    });
});