import {DataTypes} from "sequelize";
import dbConnection from "../../dbConnection.js";

const workingHours = dbConnection.define("Working_hours", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    day_1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time_1: {
        type: DataTypes.TIME,
        allowNull: false
    },
    day_2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time_2: {
        type: DataTypes.TIME,
        allowNull: false
    },
    weekend: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time_3: {
        type: DataTypes.TIME,
        allowNull: false
    }
});
workingHours.sync();
// module.exports = workingHours;
export default workingHours;
