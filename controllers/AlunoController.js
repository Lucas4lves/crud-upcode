const AlunoModel = require("../models/Aluno");

class AlunoController {
    static async criarAluno(req, res)
    {
        let {nome, peso, treinoId} = req.body;

        if(!nome){
            return res.status(400).json({err: true, msg: "O campo nome precisa ser preenchido!"})
        }
        if(!peso){
            return res.status(400).json({err: true, msg: "O campo peso precisa ser preenchido!"})
        }
        if(!treinoId){
            return res.status(400).json({err: true, msg: "O campo treino precisa ser preenchido!"})
        }

        let novoAluno = await AlunoModel.create({
            nome,
            peso,
            treinoId
        })

        return res.status(200).json({resultado: novoAluno});

    } 

    static async deletarAluno(req, res) {
        let {pk} = req.body;
        
        if(!pk){
            return res.status(400).json({
                erro: true,
                msg: "O campo Id precisa ser preenchido"
            })
        }

        let alunoEncontrado = await AlunoModel.findByPk(pk)

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
        let {id, nome, peso, treino} = req.body;

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

        if(!treino){
            return res.status(400).json({
                erro: true,
                msg: "O campo Treino não pode ficar em branco!"
            })
        }

        let alunoEncontrado = AlunoModel.findByPk(id);

        alunoEncontrado.nome 

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
}

module.exports = AlunoController;

