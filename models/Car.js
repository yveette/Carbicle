const { Schema, model } = require('mongoose');

// TODO:
// imageUrl validation

const carSchema = new Schema({
    name: { type: String, required: true, minlength: 3 },
    description: { type: String, default: '' },
    imageUrl: { type: String, default: 'noImage.jpg' },
    price: { type: Number, required: true, min: 0 },
});

const Car = model('Car', carSchema);

module.exports = Car;