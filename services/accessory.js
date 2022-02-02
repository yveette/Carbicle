const Accessoty = require('../models/Accessory');

function mapToViewModel(accessory) {
    return {
        id: accessory._id,
        name: accessory.name,
        description: accessory.description,
        imageUrl: accessory.imageUrl,
        price: accessory.price,
    }
}

async function getAll() {
    const data = await Accessoty.find({});
    return data.map(mapToViewModel);
}

async function createAccessory(accessory) {
    await Accessoty.create(accessory);
}

module.exports = () => (req, res, next) => {
    req.accessory = {
        createAccessory,
        getAll
    };
    next();
}