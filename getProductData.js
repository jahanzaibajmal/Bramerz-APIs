'use strict'

const rp = require('request-promise');

const fs = require('fs');

var options = {
    uri: 'http://52.187.119.102:8086/api/products/GetAllProducts',
    qs: {
        //access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        //'User-Agent': 'Request-Promise'
        "api_key": "Connect-KEY",
        "cache-control": "no-cache",
    },
    json: true // Automatically parses the JSON string in the response
};

const getProductData = async function(){
    const response =  rp(options)
        .then((parsedBody)=> {
            // POST succeeded...
            return parsedBody;  
            
        })
        .catch(function (err) {
            // POST failed...
        });
    
        const data = await response;
        fs.writeFileSync('productJSON.txt',JSON.stringify(data));
        return data;
    }

    module.exports = getProductData;





