const sequelize = require('../config/connection');

 //import models
 const { User, Category, Transaction, Blogposts } = require('../models');

// import seed data from .json files
const categoryData = require('./categoryData.json');
const userData = require('./userData.json');
const transactionData = require('./transactionData.json');
const blogpostData = require('./blogData.json');

// sync database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // bulk create of model instances using json data
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  await Transaction.bulkCreate(transactionData, {
    individualHooks: true,
    returning: true,
  });

  await Blogposts.bulkCreate(blogpostData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
