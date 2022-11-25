import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Customer } from '@interfaces/customer.interface';

export type CustomerCreationAttributes = Optional<Customer, 'email' | 'localization'>;

export class CustomerModel extends Model<Customer, CustomerCreationAttributes> implements Customer {
  public email: string;
  public localization: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof CustomerModel {
  CustomerModel.init(
    {
      email: {
        primaryKey: true,
        type: DataTypes.STRING(100),
      },
      localization: {
        allowNull: false,
        type: DataTypes.STRING(500),
      },
    },
    {
      tableName: 'customers',
      sequelize,
    },
  );

  return CustomerModel;
}
