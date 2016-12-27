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
    methods: null,
    fs: null,
    defaultFolderName: null,
    defaultFilePrefix: null
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
MongoImpulse.fs = require('fs');

MongoImpulse.defaultFolderName = 'data';
MongoImpulse.defaultFilePrefix = 'mongoimpulse_data_';

// all private methods need to use for database
MongoImpulse.methods = (function() {
    
    var getFileName,
        instance,
        object;
    
    
    object = {};
    
    object.writeTofile = (function(data) {
        
    });
    
    object.checkIfDirectoryExists = (function(path) {
        return new Promise(function(resolve, reject) {
            MongoImpulse.fs.readdir(path, function(error, data) {
                if(error) {
                    reject();
                } else {
                    resolve();
                }
            });    
        });
        
    });
    
    /**
	* @description - Creates an empty file on specified path
	* @param path {String} - The path where the file should be created
	* @param fileName {String} - The name of the file
	* @return {Promise} - Return a promise object with success and error callback
	*/
    object.createEmptyFile = (function(path, fileName) {
        return new Promise(function(resolve, reject) {
            
        });
    });
    
    /**
	* @description - Check if the file already exists in folder or not
	* @param path {String} - The path where the file should be created
	* @return {Promise} - Return a promise object with success callback, the resolve method will have
	*                     a parameter which is true if the file exists and false if the file doesn't     
	*/
    object.checkIfFileExists = (function(path) {
        return new Promise(function(resolve, reject) {
            MongoImpulse.fs.stat(path, function(error, stat) {
                if(error) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            });
        });
    });
    
    object.getFileName = (function() {
        return new Promise(function(resolve, reject){
            object.checkIfDirectoryExists(MongoImpulse.defaultFolderName).then(function(){
                // If the directory exists these code will be executed
                var fileName = MongoImpulse.defaultFilePrefix+(new Date()).now()+".data";
                
                object.checkIfFileExists(fileName).then(function(exists) {
                    if(exists) {
                        fileName = MongoImpulse.defaultFilePrefix+(new Date()).now()+"_2"+".data";
                        resolve(fileName)
                    } else {
                        resolve(fileName);
                    }
                });
            }, function() {
               // If  the directory is not there the these will be executed
               MongoImpulse.fs.mkdir(MongoImpulse.defaultFolderName, function(error) {
                   if(error) {
                       // if directory creating failed
                       reject(error);
                   } else {
                       // directory created
                       var fileName = MongoImpulse.defaultFilePrefix+(new Date()).now()+".data";
                       resolve(fileName);
                   }
               });
            });
        });
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