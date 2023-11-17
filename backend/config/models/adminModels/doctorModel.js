const dbConnection = require("../../dbConnection");
const {DataTypes} = require("sequelize");

const EducationQualification = dbConnection.define("EducationQualification", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    education_1:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    institution: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    about: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    education_2:{
        type: DataTypes.STRING,
        allowNull: true
    },
    institution_2: {
        type: DataTypes.STRING,
        allowNull: true
    },
    year_2: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    about: {
        type: DataTypes.TEXT,
        allowNull: true
    },
});
EducationQualification.sync();

const Doctor = dbConnection.define("Doctors", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    specialization: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brief_intro:{
        type: DataTypes.TEXT,
        allowNull: false
    },
});
Doctor.hasMany(EducationQualification);
EducationQualification.belongsTo(Doctor);
Doctor.sync();
module.exports = {
    Doctor,
    EducationQualification
}
