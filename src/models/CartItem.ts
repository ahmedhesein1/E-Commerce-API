import { Model, Sequelize, DataTypes } from "sequelize";
import { sequelize } from "@/config/db";
import {
  CartItemAttributes,
  CartItemCreationAttributes,
} from "@/types/cartItem";
export class CartItem extends Model<
  CartItemCreationAttributes,
  CartItemAttributes
> {
  public id!: number;
  public cartId!: number;
  public productId!: number;
  public quantity!: number;
  public subTotal!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CartItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cartId: {
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
      validate: {
        min: 1,
      },
    },
    subTotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: "CartItems",
  }
);
