import {DataTypes} from "sequelize";
import dbConnection from "../../dbConnection.js";

const Service = dbConnection.define("Service", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    service_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    service_content: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
Service.sync()
// module.exports = Service;
export default Service;
