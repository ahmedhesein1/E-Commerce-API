import { Optional } from "sequelize";

export interface CartAttributes {
  id: number;
  userId: number;
  status: "active" | "completed" | "abandoned" ;
  total: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartCreationAttributes
  extends Optional<
    CartAttributes,
    "id" | "createdAt" | "updatedAt"
  > {}
