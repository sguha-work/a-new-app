var UserService = require('./scripts/UserScript.js');

UserService.utilities = new UserService.methods();
module.exports = {
    getUserIdFromUserEmail: function (userEmail) {
        return UserService.utilities.getUserIdFromUserEmail(userEmail);
    }
}
