const dotenv = require('dotenv');


dotenv.config({path: './config.env'})

const mongoose = require('mongoose');
const app = require('./app')
console.log(app.get('env'))
console.log(process.env)

mongoose.connect(process.env.CONN_STR, {
    // useNewUrlParser: true // This option is no longer needed
}).then((conn) => {
    console.log(conn);
    console.log('DB Connection Successful');
}).catch((error) => {
    console.log('Some error has occured');
});






// Create Server
const port  = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('server has started ');
})
