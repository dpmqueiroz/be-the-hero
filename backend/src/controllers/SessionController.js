const connection = require('../database/connection');

module.exports = {
    async create (req,res){
        const id = req.body;

        const ong = await connection('ongs')
            .select('name')
            .where('id', id.id)
            .first();

        if(!ong){
            return res.status(400).json({ error:"No Ong Found with this ID"})
        }

        return res.json(ong)
    }
};