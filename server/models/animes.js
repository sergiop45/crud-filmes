const Sequelize = require("sequelize");
const connection = require("../database/index");

const Animes = connection.define("animes", {
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
    },
    linkVideo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Animes.sync({ force: false })
.then(console.log("Tabela Anime Sincronizada!"))
.catch((err) => {
    console.log("Erro tabela anime: " + err);
});

module.exports = Animes;