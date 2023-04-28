const express = require("express");
const cors = require("cors");

const app = express();

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", '*');
    res.header("Access-Control-Allow-Methods", '*');
    app.use(cors());
    next();
})


const sequelize = require("./db");

const AlunoRoute = require("../routes/AlunoRoute");
const TreinoRoute = require("../routes/TreinoRoute");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/alunos", AlunoRoute);
app.use("/treinos", TreinoRoute);

const connect = async() =>{
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        console.log("Conectado, otário"); 
    } catch(err) {
        console.log(err);
    }
}

connect();


app.listen(3232, ()=>{
    console.log("App rodando na porta 3232");
})
