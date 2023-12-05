import {DataTypes} from "sequelize";
import dbConnection from "../../dbConnection.js";

const Appointment = dbConnection.define("Appointment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    },
    doctor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    time_: {
        type: DataTypes.TIME,
        allowNull: false
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});


Appointment.sync();
// module.exports = Appointment;
export default Appointment;
