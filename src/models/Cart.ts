import { Model, Sequelize, DataTypes } from "sequelize";
import { CartAttributes, CartCreationAttributes } from "@/types/cart";
import { sequelize } from "@/config/db";

export class Cart extends Model<CartCreationAttributes, CartAttributes> {
  public id!: number;
  public userId!: number;
  public status!: "active" | "completed" | "abandoned" | null;
  public total!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "completed", "abandoned"),
      allowNull: false,
      validate: { isIn: [["active", "completed", "abandoned"]] },
      defaultValue: "active",
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: "Carts",
  }
);
