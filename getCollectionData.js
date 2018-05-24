'use strict'

const rp = require('request-promise');
const fs = require('fs');

var options = {
    method: 'POST',
    uri: 'https://fishry-storefront-apis-stg.azurewebsites.net/products',
    body: {
        "storeID":"5D1C5A14-E411-4284-84E5-5AAB71C6934B",
        "collectionID":"302F9B61-B355-4740-9147-C6154D52DF09",
        "take":12,
        "skip":0,
        "orderBy":"alphabetical",
        "orderSequence":"DESC",
        "outOfStock":true,
        "type":[],
        "vendor":[],
        "variantFilters":{}
    },
    json: true // Automatically stringifies the body to JSON
};
const getCollectionData = async function(){
    const response = rp(options)
        .then(function (parsedBody) {
           
            return parsedBody;
        })
        .catch(function (err) {
            // POST failed...
        });
        const data = await response;
        fs.writeFileSync('collectionJSON.txt',JSON.stringify(data));
        
        return data;
    }

    module.exports = getCollectionData;

    