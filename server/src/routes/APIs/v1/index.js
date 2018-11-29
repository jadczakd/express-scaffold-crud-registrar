import express from 'express'
import { productRoutes } from './product'
import { userRoutes } from './user'

const router = express.Router()

router.use(productRoutes.path, productRoutes.router)
router.use(userRoutes.path, userRoutes.router)

export const v1Routes = {
  path: '/v1',
  router
}
