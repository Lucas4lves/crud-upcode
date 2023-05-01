const router = require("express").Router();
const controller = require("../controllers/TreinoController");

router.post("/cadastro", controller.criarTreino);
router.put("/editar/:treinoId", controller.editarTreino);
router.get("/todos", controller.pegarTodosOsTreinos);
router.delete("/deletar/:treinoId", controller.deletarTreino);

module.exports = router;
