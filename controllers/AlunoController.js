const AlunoModel = require("../models/Aluno");
const TreinoModel = require("../models/Treino");

class AlunoController {
    static async criarAluno(req, res)
    {
        let {nome, peso} = req.body;

        if(!nome){
            return res.status(400).json({err: true, msg: "O campo nome precisa ser preenchido!"})
        }
        if(!peso){
            return res.status(400).json({err: true, msg: "O campo peso precisa ser preenchido!"})
        }

        let novoAluno = await AlunoModel.create({
            nome,
            peso,
        })

        return res.status(200).json({resultado: novoAluno});

    } 

    static async deletarAluno(req, res) {
        let {id} = req.params;
        
        if(!id){
            return res.status(400).json({
                erro: true,
                msg: "O campo Id precisa ser preenchido"
            })
        }

        let alunoEncontrado = await AlunoModel.findByPk(id)

        if(!alunoEncontrado){
            return res.status(400).json({
                erro: true,
                msg: "Um aluno com esse id não foi encontrado"
            })
        }

        alunoEncontrado.destroy();

        return res.status(204).json({
            msg: "Aluno deletado com sucesso!"
        })
        
    }

    static async editarAluno(req,res){
        let {id} = req.params; 
        let {nome, peso, treinoId} = req.body;

        if(!id){
            return res.status(400).json({
                erro: true,
                msg: "O campo id não pode ficar em branco!"
            })
        }

        if(!nome){
            return res.status(400).json({
                erro: true,
                msg: "O campo nome não pode ficar em branco!"
            })
        }

        if(!peso){
            return res.status(400).json({
                erro: true,
                msg: "O campo peso não pode ficar em branco!"
            })
        }

        if(!treinoId){
            return res.status(400).json({
                erro: true,
                msg: "O campo Treino não pode ficar em branco!"
            })
        }

        let alunoEncontrado = await AlunoModel.findByPk(id);

        if(!alunoEncontrado || alunoEncontrado.length <= 0)
        {
            return res.status(400).json({
                erro: true,
                msg: "Não foi possível encontrar um aluno com esse Id"
            })
        }

        alunoEncontrado['nome'] = nome
        alunoEncontrado['peso'] = peso
        alunoEncontrado['treinoId'] = treinoId

        await alunoEncontrado.save();

        return res.status(201).json({resultado: alunoEncontrado});

    }

    static async pegarTodos(req, res){
        let alunos = await AlunoModel.findAll();

        if(alunos.length <= 0){
            return res.status(400).json({erro: true, msg: "Não foi possível encontrar alunos"});
        }

        return res.status(200).json({
            alunos
        })
    }

    static async alunosTreino(req, res)
    {
        let join = await AlunoModel.findAll({include: TreinoModel});

        if(!join || join.length <= 0)
        {
            return res.status(200).json({
                msg: "Não foi possível encontrar um aluno com esse ID"
            })
        }

        return res.status(200).json({
            resultado: join
        })
    }
}

module.exports = AlunoController;

