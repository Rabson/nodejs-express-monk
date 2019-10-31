var monk = require('monk')


const db = monk('127.0.0.1:27017/test', function (err, res) {
    if (err)  {
        console.log("db is not connected.")
        console.log(err.message);

    } else {
        console.log("db is connected " + res._connectionURI);
    }
});


module.exports = db;