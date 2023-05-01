const TreinoModel = require("../models/Treino");

class TreinoController {

    static async criarTreino(req, res){
        let { tipo, series, repeticoes, AlunoId} = req.body;

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
            repeticoes,
            AlunoId
        })

        return res.status(201).json({resultado: novoTreino});

    }

    static async editarTreino(req, res)
    {
        let { treinoId } = req.params;
        let { tipo, series, repeticoes } = req.body;

        if(!treinoId){
            return res.status(400)
                        .json({
                            erro: "true",
                            msg: "O campo treinoId não pode deixar de ser passado!"
                        })
        }

        if(!tipo){
            return res.status(400)
                        .json({
                            erro: "true",
                            msg: "O campo tipo não pode deixar de ser passado!"
                        })
        }
        if(!series){
            return res.status(400)
                        .json({
                            erro: "true",
                            msg: "O campo series não pode deixar de ser passado!"
                        })
        }
        if(!repeticoes){
            return res.status(400)
                        .json({
                            erro: "true",
                            msg: "O campo repetições não pode deixar de ser passado!"
                        })
        }

        let treinoEncontrado = await TreinoModel.findByPk(treinoId);
        if(!treinoEncontrado || treinoEncontrado.length <= 0)
        {
            return res.status(200)
                        .json({
                            erro: "true",
                            msg: "Não há um treino com o id passado"
                        })
        }

        treinoEncontrado['tipo'] = tipo;
        treinoEncontrado['series'] = series;
        treinoEncontrado['repeticoes'] = repeticoes;

        treinoEncontrado.save();

        return res.status(204).json({msg: "Item modificado com sucesso!"});
    }

    static async pegarTodosOsTreinos(req, res)
    {
        let todosOsTreinos = await TreinoModel.findAll();

        if(!todosOsTreinos || todosOsTreinos.length <= 0)
        {
            return res.status(200)
                        .json({
                            erro: "true",
                            msg: "Não foi possível encontrar treinos cadastrados!"
                        })
        }

        return res.status(200).json({
            resultado: todosOsTreinos
        })
    }

    static async deletarTreino(req, res)
    {
        let { treinoId } = req.params;

        if(!treinoId){
            return res.status(400)
                        .json({
                            erro: "true",
                            msg: "O campo treinoId não pode deixar de ser passado!"
                        }) 
        }

        let treinoEncontrado = await TreinoModel.findByPk(treinoId);
        if(!treinoEncontrado)
        {
            return res.status(400)
                        .json({
                            erro: "true",
                            msg: "Não há um treino cadastrado com esse id"
                        })
        }
        await treinoEncontrado.destroy();

        return res.status(204).json({
            msg: "Treino deletado com sucesso!"
        });
    }

}

module.exports = TreinoController;