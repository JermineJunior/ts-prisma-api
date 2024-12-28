import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProductById, getProductByName, updateProduct } from "../controllers/productsController";
const productRouter = express.Router()

productRouter.get('/', getAllProducts)
productRouter.post('/', createProduct)
productRouter.get('/:name', getProductByName)
productRouter.get('/:id', getProductById)
productRouter.put('/search', updateProduct)
productRouter.delete('/:id', deleteProduct)

export default productRouter