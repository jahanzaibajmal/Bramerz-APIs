'use strict'

const getProductData = require('./getProductData');

const getCollectionData = require('./getCollectionData');

const updateSkuData = require('./updateSkuData');

const updateInventoryData = require('./updateInventoryData');

const routes = [];

const forbidden = {
    method: 'GET',
    path: '/',
    handler: (request, response) => {
        return (Boom.forbidden('try again some time!'));
    }
};
routes.push(forbidden);

// Add the route
const getProduct = {
    method:'GET',
    path:'/getProductData',
    handler:function(request,h) {
        const data = getProductData().then(data =>{
            return data;
        });
        return data;
        
        
    }
}
routes.push(getProduct)

const getCollection = {
    method:'GET',
    path:'/getCollectionData',
    handler:function(request,h) {
        const data = getCollectionData().then(data =>{
            return data;
        });
        return data;
        
        
    }
}
routes.push(getCollection)

const updateSKU = {
    method:'GET',
    path:'/updateSKU',
    handler:function(request,h) {
        const data = updateSkuData()
        return data;
        
        
    }
}
routes.push(updateSKU)

const updateInventory = {
    method:'GET',
    path:'/updateInventory',
    handler:function(request,h) {
        const data = updateInventoryData()
        return data;
        
        
    }
}
routes.push(updateInventory)


module.exports = routes;