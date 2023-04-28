const express = require("express");

const app = express();

const sequelize = require("./db");

const AlunoRoute = require("../routes/AlunoRoute");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/alunos", AlunoRoute);

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
