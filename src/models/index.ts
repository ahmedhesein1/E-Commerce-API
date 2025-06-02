import { sequelize } from "@/config/db";
import "./User";
import "./Cart";
import "./CartItem";
import "./Category";
import "./Order";
import "./OrderItem";
import "./Product";
import "./Review";
import setupAssociations from "./associations";

export * from "./User";
export * from "./Cart";
export * from "./CartItem";
export * from "./Category";
export * from "./Order";
export * from "./OrderItem";
export * from "./Product";
export * from "./Review";
