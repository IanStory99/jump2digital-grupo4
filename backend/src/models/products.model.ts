import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Product } from '@interfaces/products.interface';

export type ProductCreationAttributes = Optional<Product, 'id' | 'category' | 'cuisine'>;

export class ProductModel extends Model<Product, ProductCreationAttributes> implements Product {
  public id: number;
  public category: string;
  public cuisine: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof ProductModel {
  ProductModel.init(
    {
      id: {
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      category: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      cuisine: {
        allowNull: false,
        type: DataTypes.STRING(200),
      },
    },
    {
      tableName: 'products',
      sequelize,
    },
  );

  return ProductModel;
}
