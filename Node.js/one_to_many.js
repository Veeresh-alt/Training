const Sequelize = require('sequelize');
const path = 'mysql://root@localhost:3306/demo';
const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let User = sequelize.define('user', {
    name: Sequelize.STRING,
});

let Task = sequelize.define('task', {
    description: Sequelize.STRING,
});

User.hasMany(Task);

async function createTables() {

    await User.sync();
    await Task.sync();

    console.log('done');
    sequelize.close();
}

createTables();