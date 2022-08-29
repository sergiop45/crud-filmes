const express = require("express");
const router = express.Router();
const Filmes = require("../models/filmes");


//GET ALL


router.get("/filmes", async (req, res) => {
    
    await Filmes.findAll().then((filmes) => {
        res.status(200).json(filmes);
    }).catch((err) => {
        res.status(401).json({message: "Erro: " + err});
    });

});

//RETORNA UM FILME

router.get("/filmes/:id", async (req, res) => {

    let id = req.params.id;

    await Filmes.findOne({where: {id: id}})
    .then((data) => res.status(200).json({filme: data}))
    .catch((err) => res.status(500).json({message: "Erro: " + err}));

})

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

//EDITA UM FILME

router.patch("/filmes/:id", (req, res) => {
    
    let id = req.params.id;
    let {title, year, description} = req.body;

    Filmes.update(
        {
            
            title: title,            
            year: year,
            description: description
        }
        ,
        {
            where: { id: id}
        }
    ).then( res.status(200).json({message: "Filme atualizado!"}))
    .catch((err) => res.status(200).json({erro: "Erro update: " + err }));

});



module.exports = router;
