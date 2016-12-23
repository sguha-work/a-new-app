/**
 * This package use sails-mongo, and fs to install these from your root folder run "npm install sails-mongo"
 * , "npm install fs" from your terminal.
 * 
*/ 

var MongoImpulse;

MongoImpulse = {
    sailsMongo: null,
    connection: null,
    impulse: null,
    methods: null
};

/**
 * This object's value should be set by user which will be required to connect to the database 
 * 
*/

MongoImpulse.connection = {
    mongodb: {
        adapter   : 'sails-mongo',
        host      : 'localhost',
        port      : 27017,
        user      : '',
        password  : '',
        database  : 'yourdevdb'
    }
}

// fetching the module sails-mongo
MongoImpulse.sailsMongo = require('sails-mongo');

// all private methods need to use for database
MongoImpulse.methods = (function() {
    
    var getFileName,
        instance,
        object;
    
    getFileName = (function() {
            
    });
    
    
    object = {};
    
    object.writeTofile = (function(data) {
        
    });
    
    function createInstance() {
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
    
})();

MongoImpulse.impulse = {
    
    methods: new MongoImpulse.methods.getInstance(),
    
    insertInto: function(fileName, record) {
        
    },
    
    update: function(fileName, record, condition) {
        
    },
    
    delete: function(fileName, condition) {
        
    }
};

module.exports = MongoImpulse.impulse;