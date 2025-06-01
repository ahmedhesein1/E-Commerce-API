import { Model, DataTypes, Sequelize } from "sequelize";
import bcrypt from "bcrypt";
import { UserAttributes, UserCreationAttributes } from "../types/user";
import { sequelize } from "../config/db";

export class User extends Model<UserAttributes, UserCreationAttributes> {
  public id!: number;
  public name!: string | null;
  public email!: string;
  public password!: string | null;
  public oauthProvider!: "google" | "facebook" | null;
  public oauthId!: string | null;
  public role!: "user" | "admin";
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    oauthProvider: {
      type: DataTypes.ENUM("google", "facebook"),
      allowNull: true,
    },
    oauthId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
      defaultValue: "user",
      allowNull: false,
    },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  },
  {
    sequelize,
    timestamps: true,
    tableName: "Users",
    modelName: "User",
    hooks: {
      beforeCreate: async (user: User) => {
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 10);
        }
      },
      beforeUpdate: async (user: User) => {
        if (user.changed("password")) {
          user.password = await bcrypt.hash(user.password!, 10);
        }
      },
    },
  }
);
export default User;
