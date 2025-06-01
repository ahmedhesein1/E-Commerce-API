import { DecimalDataType, ForeignKey, Optional } from "sequelize";

export interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  price: DecimalDataType;
  stock: number;
  categoryId: number;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}
export interface ProductCreationAttributes
  extends Optional<ProductAttributes, "id" | "createdAt" | "updatedAt"> {}
