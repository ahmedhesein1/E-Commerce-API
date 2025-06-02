import { DataTypes, Sequelize, Model } from "sequelize";
import { sequelize } from "@/config/db";
import {
  CategoryAttributes,
  CategoryCreationAttributes,
} from "@/types/category";

export class Category extends Model<
  CategoryCreationAttributes,
  CategoryAttributes
> {
  public id!: number;
  public name!: string;
  public description!: string | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:true
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "Categories",
    timestamps: true,
  }
);
