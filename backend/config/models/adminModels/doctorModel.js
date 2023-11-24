const dbConnection = require("../../dbConnection");
const {DataTypes} = require("sequelize");

// const EducationQualification = dbConnection.define("EducationQualification", {
    
    
// });
// EducationQualification.sync({})

const Doctor = dbConnection.define("Doctors", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    doctor_name: {
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
    education_1:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    institution: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.STRING,
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
    about_2: {
        type: DataTypes.TEXT,
        allowNull: true
    },
});
Doctor.sync()
// Doctor.hasMany(EducationQualification);
// EducationQualification.belongsTo(Doctor, {targetKey: "id", foreignKey: "doctorId"});

module.exports = Doctor
