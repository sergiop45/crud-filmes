const Sequelize = require("sequelize");
const connection = require("../database");


const Filmes = connection.define("filmes", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Filmes.sync({force: false}).then(console.log("Tabela Filmes Criada!"))
.catch((err) => console.log("Erro ao criar tabela: " + err));

module.exports = Filmes;