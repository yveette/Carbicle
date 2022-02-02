module.exports = {
    async get(req, res) {
        const id = req.params.id;

        try {
            const [car, accessories] = await Promise.all([
                req.storage.getById(id),
                req.accessory.getAll(),
            ]);

            res.render('attach', { title: 'Attach Accessory', car, accessories });
        } catch (err) {
            res.redirect('404');
        }
        res.render('attach', { title: 'Attach Accessory' });
    },
    async post(req, res) {
        const carId = req.params.id;
        const accessoryId = req.body.accessory;

        try {
            await req.storage.attachAccessory(carId, accessoryId);
            res.redirect('/');
        } catch (err) {
            console.log('Error creating accessory');
            console.log(err.message);
            res.redirect('/attach/' + carId);
        }
    }
}