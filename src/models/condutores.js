const Sequelize = require('sequelize');
const database = require('../config/db');

const Condutores = database.define('condutores',{
    numero_carta: {
        type:Sequelize.STRING,
        primaryKey:true,
        allowNull:false,
    },
    bi: {
        type:Sequelize.INTEGER,
        allowNull:false
    },
    data_emisao: {
        type:Sequelize.DATE,
        allowNull:false
    },
    data_validade: {
        type:Sequelize.DATE,
        allowNull:false
    },
    categoria: {
        type:Sequelize.STRING,
        allowNull:true
    }
},
)

module.exports = Condutores