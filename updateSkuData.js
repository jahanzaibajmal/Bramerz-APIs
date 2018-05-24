'use strict'

const fs = require('fs');

const updateSkuData = ()=>{
const collectionTxt = fs.readFileSync('collectionJSON.txt');
const productTxt = fs.readFileSync('productJSON.txt');

if(collectionTxt=='' || productJSON==''){
    return "First Get Data <br> localhost:8000/getProductData <br> localhost:8000/getCollectionData";
}
else{
    var collectionJSON = JSON.parse(collectionTxt)

    var productJSON = JSON.parse(productTxt)

    for(let i=0; i<collectionJSON.data.length;i++){
        collectionJSON.data[i].productSKU = productJSON[i].SKU
    }
        fs.writeFileSync('collectionJSON.txt',JSON.stringify(collectionJSON));
        console.log(collectionJSON)
        return collectionJSON;

    }
}

module.exports = updateSkuData;

