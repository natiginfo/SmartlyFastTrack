var request = require("request");

var baseURL = "http://fasttrack.herokuapp.com";

makeRequest(baseURL + "");

function makeRequest(url) {
    console.log(url);
    request.get({
        url: url,
        headers: { 
            'Accept' : 'application/json' 
        }
    },

        function (e, r, body) {
            console.log(body);
            var obj = JSON.parse(body);
            makeRequest(baseURL + obj.next);
    });
}