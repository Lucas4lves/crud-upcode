const router = require("express").Router();
const controller = require("../controllers/AlunoController");

router.post("/cadastro", controller.criarAluno);
router.delete("/deletar", controller.deletarAluno);
router.get("/todos", controller.pegarTodos);
router.put("/editar/:id", controller.editarAluno);

module.exports = router;