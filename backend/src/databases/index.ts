import Sequelize from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
import UserModel from '@models/users.model';
import SupermarketModel from '@models/supermarket.model';
import ProductModel from '@models/products.model';
import { logger } from '@utils/logger';

const sequelize = new Sequelize.Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

sequelize.authenticate();

const DB = {
  Users: UserModel(sequelize),
  Supermarkets: SupermarketModel(sequelize),
  Products: ProductModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default DB;
