import { Model, Sequelize, DataTypes } from "sequelize";
import { sequelize } from "@/config/db";
import {
  OrderItemAttributes,
  OrderItemCreationAttributes,
} from "@/types/orderItem";

export class OrderItem extends Model<
  OrderItemCreationAttributes,
  OrderItemAttributes
> {
  public id!: number;
  public orderId!: number;
  public productId!: number;
  public quantity!: number;
  public price!: number;
  public subTotal!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

OrderItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    subTotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: "OrderItems",
  }
);
