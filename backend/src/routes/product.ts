import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/productsController";
const productRouter = express.Router()

productRouter.get('/', getAllProducts)
productRouter.post('/', createProduct)
productRouter.get('/:id', getProductById)
productRouter.put('/:id', updateProduct)
productRouter.delete('/:id', deleteProduct)

export default productRouter