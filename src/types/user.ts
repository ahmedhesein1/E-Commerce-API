import { Optional } from "sequelize";

export interface UserAttributes {
  id: number;
  name: string| null;
  email: string;
  password: string | null;
  oauthProvider: "google" | "facebook" | null;
  oauthId: string | null;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
}
export interface UserCreationAttributes
  extends Optional<UserAttributes, "id" | "createdAt" | "updatedAt"> {}
