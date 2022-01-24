module.exports = {
    /**
     * 
     * @param {IncomingMessage} req
     * @param {ServerResponse} res
     */

    home(req, res){
        res.render('edit', {layout: false})
    } 
}