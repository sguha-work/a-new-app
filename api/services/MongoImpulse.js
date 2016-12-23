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

MongoImpulse.methods = (function() {
    
    var getFileName;
    
    getFileName = (function() {
        
    });
    
    this.writeTofile = (function(data) {
        
    });
    
});

MongoImpulse.impulse = {
    
    methods: new MongoImpulse.methods(),
    
    insertInto: function(fileName, record) {
        
    },
    
    update: function(fileName, record, condition) {
        
    },
    
    delete: function(fileName, condition) {
        
    }
};

module.exports = MongoImpulse.impulse;