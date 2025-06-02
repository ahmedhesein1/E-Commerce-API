import {
  User,
  Product,
  Cart,
  CartItem,
  Order,
  OrderItem,
  Category,
  Review,
} from "./index";
export default function setupAssociations() {
  // User Relationships
  User.hasMany(Order, { foreignKey: "userId" });
  Order.belongsTo(User, { foreignKey: "userId" });

  User.hasOne(Cart, { foreignKey: "userId" });
  Cart.belongsTo(User, { foreignKey: "userId" });

  User.hasMany(Review, { foreignKey: "userId" });
  Review.belongsTo(User, { foreignKey: "userId" });

  // Category Relationships
  Category.hasMany(Product,{foreignKey:"categoryId"})
}
