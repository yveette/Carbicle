const Accessoty = require('../models/Accessory');
const { accessoryViewModel } = require('./util');

async function getAll() {
    const data = await Accessoty.find({});
    return data.map(accessoryViewModel);
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