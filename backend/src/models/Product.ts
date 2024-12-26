import { Decimal } from "@prisma/client/runtime";

interface Product {
  id: number,
  name: string,
  price: Decimal,
  quantity: number,
  createdAt: Date,
  updatedAt: Date
}

export default Product;