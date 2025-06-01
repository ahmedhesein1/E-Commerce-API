import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432", 10),
  dialect: "postgres",
  logging: true,
});

const connectDB = async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Database connected ✅");
        await sequelize.sync({ alter: true });
        console.log("Models synced successfully ✅");
    } catch(err){
        console.error("❌ Database connection or sync failed:", err);
    }
}
export { sequelize, connectDB };