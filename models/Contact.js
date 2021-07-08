const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Contact extends Model {}

Contact.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        message: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'contact'
    }
);

module.exports = Contact;