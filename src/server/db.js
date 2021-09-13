import { Sequelize } from 'sequelize'

const sequelize = new Sequelize (
    process.env.POSTGRES_URL ||
    "postgres://database-idealo-design.c9fyhsob8bxc.eu-central-1.rds.amazonaws.com"
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  sequelize.close()
})();