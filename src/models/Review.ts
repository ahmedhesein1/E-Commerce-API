import { Model, Sequelize, DataTypes } from "sequelize";
import { sequelize } from "@/config/db";
import { ReviewAttributes, ReviewCreationAttributes } from "@/types/review";

export class Review extends Model<ReviewCreationAttributes, ReviewAttributes> {
  public id!: number;
  public userId!: number;
  public productId!: number;
  public rating!: number;
  public comment!: string | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Review.init(
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
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
      },
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: "Reviews",
    indexes: [
      {
        unique: true,
        fields: ["userId", "productId"],
      },
      {
        fields: ["productId"],
      },
    ],
  }
);
