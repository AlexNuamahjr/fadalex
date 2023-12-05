import {DataTypes} from "sequelize";
import dbConnection from "../../dbConnection.js";

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
export default Departments;
