const Sequelize = require('sequelize');

const path = 'mysql://donor:RajuRaja@1234@localhost:3306/donors';
const sequelize = new Sequelize(path, { operatorsAliases: false });

sequelize.authenticate().then(() => {
  console.log('Connection established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
}).finally(() => {
  sequelize.close();
});