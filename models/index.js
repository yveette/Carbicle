const mongoose = require('mongoose');

const Car = require('./Car');

const connectionString = 'mongodb://localhost:27017/carbicle';

async function init() {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected!');

        await Car.create({
            "name": "VW Golf 1.9 TDI 90ps High-Line",
            "description": "THE PRICE IS NON-NEGOTIABLE!!! Newly imported, 202 799 km, 90hp diesel. Manual transmission.",
            "imageUrl": "11642697845129757_i2.jpg",
            "price": 2699
        });

        mongoose.connection.on('error', (err) => {
            console.error('Database error');
            console.error(err);
        })
    } catch (err) {
        console.error('Error connecting to database');
        process.exit(1);
    }
}

module.exports = init;