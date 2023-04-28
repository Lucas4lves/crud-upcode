const TreinoModel = require("../models/Treino");

class TreinoController {

    static async cadastrar(req, res){
        let { tipo, series, repeticoes} = req.body;

        if(!tipo){
            return res.status(400).json({erro: true, msg: "O campo tipo não pode ficar em branco"});
        }

        if(!series){
            return res.status(400).json({erro: true, msg: "O campo tipo não pode ficar em branco"});
        }

        if(!repeticoes){
            return res.status(400).json({erro: true, msg: "O campo tipo não pode ficar em branco"});
        }

        let novoTreino = await TreinoModel.create({
            tipo,
            series,
            repeticoes
        })

        return res.status(201).json({resultado: novoTreino});

    }
}

module.exports = TreinoController;