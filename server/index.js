const express = require("express");
const app = express();
const port = 4000;
const connection = require("./database");
const Filmes = require("./models/filmes");
const cors = require("cors");

connection.authenticate().then(console.log("Conexao com Banco de Dados Realizada!"))
.catch((err) => {
    console.log("Erro: " + err + " ao conectar com DB.");
});

app.use(express.json());
app.use(cors());


//GET ALL


app.get("/filmes", async (req, res) => {
    
    await Filmes.findAll().then((filmes) => {
        res.status(200).json(filmes);
    }).catch((err) => {
        res.status(401).json({message: "Erro: " + filmes});
    });

});

//POST
app.post("/filmes", (req, res) => {
   
    const {nome, ano, descricao} = req.body;
    
    Filmes.create({
        title: nome,
        year: ano,
        description: descricao
    }).then(() => {
        res.status(200).json({message: "Filme Inserido com Sucesso"})
    }).catch((err) => {
        res.status(500).json({message: "Erro ao inserir filme... Tente Novamente"});
    })
});

//DELETE

app.delete("/filmes/:id", (req,res) => {
    
    let id = req.params.id;
    
    Filmes.destroy({where: {id:id}})
    .then( res.status(200).json({message: "filme excluido"}))
    .catch((err) => res.status(500).json({message: "erro ao excluir "+err}));

});



app.get("/", (req, res) => {
    res.status(200).json({message:"Bem Vindo a Minha API :)"});
})

app.listen(port, (req, res) => {
    console.log("API Rodando na porta: " + port);
});