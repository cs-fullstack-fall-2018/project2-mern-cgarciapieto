// A common object for accessing config values
// Gets included automatically because of its name index.js

const configValues = require('./config');

module.exports = {

    getDbConnectionString: function () {
        //mongodb://<dbuser>:<dbpassword>@ds115753.mlab.com:15753/journals
        // return 'YOUR_MONGO_URL';
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds115753.mlab.com:15753/journals';
    },


};
