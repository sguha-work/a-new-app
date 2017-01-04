module.exports = {
    
  /**
   * @description - This function checks if the request method is POST or not, if other it returns true as 
   * the request mast be blocked
   * 
   * @params request {Object} - The request object which need to be tested
   * 
   * @return {Boolean} - true if request need to be blocked, false if request is alright
   */ 
  restrictIfNotPostMethod: function(request) {
      if (request.method.toUpperCase() === 'POST') {
          return false;
      } else {
          return true;
      }
  }  
};