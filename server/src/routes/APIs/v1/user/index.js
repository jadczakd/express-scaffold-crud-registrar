import express from 'express'
import { userController } from '../../../../controllers/UserController'
const router = express.Router()

router.get('/:pid', userController.read)

export const userRoutes = {
  path: '/product',
  router
}
