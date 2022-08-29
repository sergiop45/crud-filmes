const express = require("express");
const app = express();
const port = 4000;
const connection = require("./database");
const ControllerFilmes = require("./controllers/ControllerFilmes");
const ControllerAnimes = require("./controllers/ControllerAnimes");
const cors = require("cors");
const router = express.Router();

connection.authenticate().then(console.log("Conexao com Banco de Dados Realizada!"))
.catch((err) => {
    console.log("Erro: " + err + " ao conectar com DB.");
});

app.use(express.json());
app.use(cors());

app.use("/", ControllerFilmes);
app.use("/", ControllerAnimes);

app.get("/", (req, res) => {
    res.status(200).json({message: "Bem vindo ao BackEnd do hanmaFilmes"})
})

app.listen(port, (req, res) => {
    console.log("API Rodando na porta: " + port);
});