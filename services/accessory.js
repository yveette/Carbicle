const Accessoty = require('../models/Accessory');

async function createAccessory(accessory) {
    await Accessoty.create(accessory);
}

module.exports = () => (req, res, next) => {
    req.accessory = {
        createAccessory,
    };
    next();
}