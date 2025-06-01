import { Optional } from "sequelize";

export interface CategoryAttributes {
  id: number;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}
export interface CategoryCreationAttributes
  extends Optional<CategoryAttributes, "id" | "createdAt" | "updatedAt"> {}
