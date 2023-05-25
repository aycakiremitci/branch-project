const databaseConfig = require("../config/database.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(databaseConfig.DB, databaseConfig.USER, databaseConfig.PASSWORD, {
  host: databaseConfig.HOST,
  dialect: databaseConfig.dialect,
  port: databaseConfig.port,
  operatorsAliases: false,

  pool: {
    max: databaseConfig.pool.max,
    min: databaseConfig.pool.min,
    acquire: databaseConfig.pool.acquire,
    idle: databaseConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user_model.js")(sequelize, Sequelize);
db.branches = require("./branch_model.js")(sequelize, Sequelize);

module.exports = db;
