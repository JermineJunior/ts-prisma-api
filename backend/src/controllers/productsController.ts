import { Request, Response } from 'express'
import prisma from '../prisma'
import Product from '../models/Product'

const productClient = prisma.product

export const getAllProducts = async (req: Request, res: Response) => {
  const products: Product[] = await productClient.findMany()
  res.status(200).json({ products })
}

export const createProduct = async (req: Request, res: Response) => {
  const data = req.body
  try {
    const product: Product = await productClient.create({
      data: data
    })
    res.status(201).json({ message: 'product saved', product })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const getProductById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  try {
    const product: Product = await productClient.findUnique({
      where: {
        id: id
      }
    });
    if (!product) {
      res.status(404).json({ message: 'Product Not Found' })
    } else {
      res.status(200).json({ product })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  const productId = parseInt(req.params.id)
  const data = req.body
  try {
    const newProduct = await productClient.update({
      where: { id: productId },
      data: data
    });
    res.status(201).json({ data: newProduct })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  try {
    await productClient.delete({
      where: {
        id: id
      }
    });
    res.status(200).json({ message: `product with an id ${id} was deleted succesfuly` })
  } catch (error) {
    res.status(500).json({ error })
  }
}