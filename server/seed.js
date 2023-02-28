const {users, recipes} = require('./seedData.js');

const {sequelize} = require('./db');
const {User, Recipe} = require('./models');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(users.map(user => User.create(user)));
        await Promise.all(recipes.map(item => Recipe.create(item)));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();
