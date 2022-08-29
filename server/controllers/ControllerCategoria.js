const express = require("express");
const router = express.Router();
const Categoria = require("../models/categoria");

//RETORNA TODAS AS CATEGORIAS

router.get("/categoria", (req, res) => {

    Categoria.findAll()
    .then( (data) => res.status(200).json(data) )
    .catch((err) => res.status(500).json({erro: "Erro categorias: " + err}));

});

//RETORNA UMA CATEGORIA

router.get("/categoria/:id", (req, res) => {

    let id = req.params.id;

    Categoria.findOne({where: {id: id}})
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(200).json({erro: "Erro na busca! " + err}));
});

//CADASTRA CATEGORIA

router.post("/categoria", (req, res) => {
    
    let {nome} = req.body;

    Categoria.create({
        nome: nome
    }).then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({erro: "Erro ao inserir categoria: " + err}));
});

//DELETA CATEGORIA

router.delete("/categoria/:id", (req, res) => {

    let id = req.params.id;

    Categoria.destroy({where: {id:id}} )
    .then((data) => res.status(200).json({excluido: data})) 
    .catch((err) => res.status(200).json({erro: "Erro ao deletar: " + err}));

});

//EDITAR CATEGORIA

router.patch("/categoria/:id", async (req, res) => {

    let id = req.params.id;
    let {nome} = req.body;   

    await Categoria.update(
        {
            nome: nome
        },
        {
            where: { id: id}
        }
    ).then( res.status(200).json({message: "categoria alterada!"}))
    .catch((err) => res.status(500).json({erro: err}));    
});


module.exports = router;