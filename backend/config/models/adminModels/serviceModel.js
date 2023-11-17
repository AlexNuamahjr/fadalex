const dbConnection =  require("../../dbConnection");
const {DataTypes} = require("sequelize")

const Service = dbConnection.define("Service", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    service_title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    service_content: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
Service.sync()
module.exports = Service
