import { Optional } from "sequelize";

export interface CartItemAttributes {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;
  subTotal: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface CartItemCreationAttributes
  extends Optional<CartItemAttributes, "id" | "createdAt" | "updatedAt"> {}
