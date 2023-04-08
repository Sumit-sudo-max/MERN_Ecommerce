const mongoose = require('mongoose');


const connectDatabase = () =>{
    mongoose.set('strictQuery', true);
    mongoose
    .connect(process.env.DB_URI)
    .then((c) => {
        console.log(`Mongodb connect to: ${c.connection.host}`);
    })
    .catch((e) => {
        console.log(e);
    });
};



module.exports = connectDatabase;