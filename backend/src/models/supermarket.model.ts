import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { SuperMarket } from '@interfaces/supermarket.interface';

export type SuperMarketCreationAttributes = Optional<SuperMarket, 'id' | 'cityCode' | 'regionCode' | 'centerType' | 'opArea'>;

export class SuperMarketModel extends Model<SuperMarket, SuperMarketCreationAttributes> implements SuperMarket {
  public id: number;
  public cityCode: string;
  public regionCode: string;
  public centerType: string;
  public opArea: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof SuperMarketModel {
  SuperMarketModel.init(
    {
      id: {
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      cityCode: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      regionCode: {
        allowNull: false,
        type: DataTypes.STRING(200),
      },
      centerType: {
        allowNull: false,
        type: DataTypes.STRING(200),
      },
      opArea: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'supermarkets',
      sequelize,
    },
  );

  return SuperMarketModel;
}
