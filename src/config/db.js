const Sequelize = require('sequelize')
const sequelize = new Sequelize('dgtr_cv','root','Emanuel1.',{
    dialect:'mysql',
    host:'localhost',
    port:3306
})

module.exports = sequelize;