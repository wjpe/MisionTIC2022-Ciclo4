const mongoose = require ('mongoose');
const uri = 'mongodb://localhost:27017/grupo22';

const options = { useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB')},
    err => { console.log(err)}
); 

module.exports = mongoose;