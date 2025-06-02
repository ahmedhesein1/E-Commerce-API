import { Optional } from "sequelize";

export interface OrderAttributes {
  id: number;
  userId: number;
  total: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
  shippingAddress: string;
  shippedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderCreationAttributes
  extends Optional<
    OrderAttributes,
    "id" | "createdAt" | "updatedAt" | "shippedAt"
  > {}
