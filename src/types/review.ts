import { Optional } from "sequelize";

export interface ReviewAttributes {
  id: number;
  userId: number;
  productId: number;
  rating: number;
  comment: string | null;
  createdAt: Date;
  updatedAt: Date;
}
export interface ReviewCreationAttributes
  extends Optional<ReviewAttributes, "id" | "createdAt" | "updatedAt"> {}
