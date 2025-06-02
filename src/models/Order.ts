import { Model, Sequelize, DataTypes } from "sequelize";
import { sequelize } from "@/config/db";
import { OrderAttributes, OrderCreationAttributes } from "@/types/order";

export class Order extends Model<OrderCreationAttributes, OrderAttributes> {
  public id!: number;
  public userId!: number;
  public status!: "pending" | "shipped" | "delivered" | "cancelled";
  public shippingAddress!: string;
  public readonly shippedAt!: Date | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
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
      type: DataTypes.ENUM("pending", "shipped", "delivered"),
      defaultValue: "pending",
      validate: { isIn: [["pending", "shipped", "delivered"]] },
    },
    shippingAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shippedAt: {
      type: DataTypes.DATE,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: "Orders",
  }
);
