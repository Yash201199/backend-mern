
const mongoose = require('mongoose');

const connectiondb = process.env.DATABASE;







mongoose.connect(connectiondb , {
    useNewUrlParser: true,
    // userCreateIndex: true,
    useUnifiedTopology:true,
    // userFindAndModify:false
}).then(() => {
   
        console.log(`connection sucessfull`);
    })
    .catch((err) => console.log('no connection'));