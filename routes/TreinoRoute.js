const router = require("express").Router();
const controller = require("../controllers/TreinoController");

router.post("/cadastro", controller.cadastrar);

module.exports = router;
