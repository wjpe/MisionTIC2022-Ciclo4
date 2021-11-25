
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
//const bodyparser = require ('body-parser')

const app = express();

require ('./database')

app.use(morgan('dev'))
//app.use(bodyparser.urlencoded({extended:true}))
//app.use(bodyparser.json)
app.use(express.json());
//application/x-wwww-form-urlenconded
app.use(express.urlencoded({ extended: true}));
app.use(cors())

//Rutas
app.use('/jefe', require('./routes/Jefe.route'))
app.use('/empleado', require('./routes/Empleado.route'))

//puerto

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function() {
    console.log('Example app listening on port ' + app.get('puerto'));
})