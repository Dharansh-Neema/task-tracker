const mongoose = require('mongoose');

const db_connection = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB Connected successfully"))
    .catch((err) => console.log(err));
}

module.exports = db_connection;