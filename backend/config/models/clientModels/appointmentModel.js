const dbConnection = require("../../dbConnection");
const {DataTypes} = require("sequelize");

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
    }
})
Appointment.sync();
module.exports = Appointment;
