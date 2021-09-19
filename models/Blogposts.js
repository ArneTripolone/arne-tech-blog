const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogposts extends Model { }

Blogposts.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogposts',
    }
);

module.exports = Blogposts;
