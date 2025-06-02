import { Optional } from "sequelize";

export interface OrderItemAttributes {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
  subTotal: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItemCreationAttributes
  extends Optional<OrderItemAttributes, "id" | "createdAt" | "updatedAt"> {}
