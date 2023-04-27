import { databaseConn } from "../config/database.js"
import { productSql } from "../sql/productSql.js";

export const productService = {
    getProducts: async () => {
        const db = new databaseConn();
        await db.connect();

        const products = await db.query(productSql.getAllProducts());
        
        db.closeCon();

        return products
    }
}