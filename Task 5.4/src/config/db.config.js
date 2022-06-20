import { Sequelize } from 'sequelize';

const DATABASE_NAME = 'postgres';
const USER_NAME = 'postgres';
const PASSWORD = 'sravangnitc12';

export const sequelize = new Sequelize(DATABASE_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});