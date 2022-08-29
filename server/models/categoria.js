const Sequelize = require("sequelize");
const connection = require("../database/index");

const Categoria = connection.define("categoria", {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Categoria.sync({force: false})
.then( console.log("Tabela Categoria Sincronizada"))
.catch((err) =>  console.log("Erro Categoria: " + err));

module.exports = Categoria;