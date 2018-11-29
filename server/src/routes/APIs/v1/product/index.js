import express from 'express'
import { productController } from '../../../../controllers/ProductController'
const router = express.Router()

router.get('/:pid', productController.read)

export const productRoutes = {
  path: '/product',
  router
}
