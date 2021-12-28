const Condutores = require('../models/condutores')
module.exports={
    async index(req,res){

        const bi = req.params.bi
        const condutores = await Condutores.findAll({
            where:{
                bi:bi
            }
        });
        if(condutores == "" || condutores == null){
            return res.status(200).send({message:"Condutor nao encontrado"});
        }
        return res.status(200).send({condutores});
    },
};