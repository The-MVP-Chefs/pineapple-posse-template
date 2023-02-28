const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const User = sequelize.define("users", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

const Recipe = sequelize.define("recipes", {
  title: Sequelize.STRING,
  price: Sequelize.NUMBER,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  image: Sequelize.STRING
});

module.exports = {
  db: sequelize,
  User,
  Recipe
};
