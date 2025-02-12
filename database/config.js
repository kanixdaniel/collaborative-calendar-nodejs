const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('Connection to database successfully')
    } catch (error) {
        console.error(error);
        throw new Error('Cannot connect to database')
    }
}

module.exports = {
    dbConnection
}