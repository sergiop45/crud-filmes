const express = require("express");
const router = express.Router();
const Animes = require("../models/animes");

//RETORNA TODOS OS ANIMES

router.get("/animes", (req, res) => {
    Animes.findAll()
    .then((data) => res.status(200).json(data) )
    .catch((err) => res.status(500).json({erro: "erro ao buscar animes! erro: " + err}));
});

//RETORNAR UM ANIME

router.get("/animes/:id", (req, res) => {

    let id = req.params.id;

    Animes.findOne({where: {id: id}})
    .then((anime) => res.status(200).json(anime) )
    .catch((err) => res.status(500).json({erro: "Erro: " + err}) );

});

//CADASTRA UM ANIME

router.post("/animes", (req, res) => {

    let {title,year,description, link, imagem} = req.body;

    Animes.create({
        title: title,
        year: year,
        description: description,
        linkVideo: link,
        imagem: imagem
    })
    .then((anime) => res.status(200).json({message: "Anime Cadastrado!", anime}))
    .catch((err) => res.status(200).json({erro: "Erro Ao tentar cadastrar" + err}));

});

router.delete("/animes/:id", async (req, res) => {

    let id = req.params.id;

    await Animes.destroy({where: {id: id}})
    .then((anime) => res.status(200).json({message: "Anime deletado!", anime}))
    .catch((err) => res.status(500).json({erro: "Erro Ao deletar anime! ERRO: "+err}));

});

//ALTERA ANIME

router.patch("/animes", async (req, res) => {

    let {id, title, year, description, link, imagem} = req.body;

    await Animes.update({
        title: title,
        year: year,
        description: description,
        linkVideo: link,
        imagem: imagem
        },
        {where: {id: id}}
    )
    .then( res.status(200).json({message: "Anime Alterado!"}))
    .catch((err) => res.status(500).json({erro: "Erro Update: " + err}));

})

module.exports = router;