const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/auth',{ useNewUrlParser: true })
    .then(()=>{console.log('Db connected');})
    .catch(error=>{console.log(error)});

module.exports = mongoose;