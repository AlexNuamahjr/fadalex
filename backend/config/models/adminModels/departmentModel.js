const {DataTypes} = require("sequelize");
const dbConnection = require("../../dbConnection");

const Departments = dbConnection.define("Departments", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    department_title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    department_content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})
Departments.sync();
module.exports = Departments;
