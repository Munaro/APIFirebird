import { productService } from "../services/productService.js"

export const productController = {
    getProducts: async (req, res) => {
        try {
            const products = await productService.getProducts();

            return res.json(products);
        } catch (err) {
            return res.status(400).json({
                message: err.message
            })            
        }
    }
}