const express = require("express");
const router = express.Router();
const Filmes = require("../models/filmes");


//GET ALL


router.get("/filmes", async (req, res) => {
    
    await Filmes.findAll().then((filmes) => {
        res.status(200).json(filmes);
    }).catch((err) => {
        res.status(401).json({message: "Erro: " + filmes});
    });

});

//POST
router.post("/filmes", (req, res) => {
   
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

router.delete("/filmes/:id", (req,res) => {
    
    let id = req.params.id;
    
    Filmes.destroy({where: {id:id}})
    .then( res.status(200).json({message: "filme excluido"}))
    .catch((err) => res.status(500).json({message: "erro ao excluir "+err}));

});






module.exports = router;
