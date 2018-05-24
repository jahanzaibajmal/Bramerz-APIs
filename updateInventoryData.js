'use strict'

const fs = require('fs');

const updateInventoryData = ()=>{
const collectionTxt = fs.readFileSync('collectionJSON.txt');
const productTxt = fs.readFileSync('productJSON.txt');

if(collectionTxt=='' || productJSON==''){
    return "First Get Data <br> localhost:8000/getProductData <br> localhost:8000/getCollectionData";
}
else{
    var collectionJSON = JSON.parse(collectionTxt);

    var productJSON = JSON.parse(productTxt);

    for(let data in collectionJSON.data){
        const update = collectionJSON.data[data].productSKU;
        productJSON.find((product,i)=>{
            
        
            if(product.SKU==update){
                if(product.Stock > 0){
                    collectionJSON.data[data].inventoryQuantity = product.Stock;
                    
                }
                collectionJSON.data[data].productPrice = product.Price;

            }
    });
    }
    fs.writeFileSync('collectionJSON.txt',collectionJSON);
    return collectionJSON;
    }
}

module.exports = updateInventoryData;