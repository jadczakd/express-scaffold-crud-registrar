import express from 'express'
import { config } from '../../configs'
import { productController } from '../controllers/ProductController'
import { userController } from '../controllers/UserController'
import { crudRegistrar } from '../utils/crudRegistrar'

const router = express.Router();

[productController, userController].forEach(controller => {
  crudRegistrar(router, controller, ['get', 'post', 'put', 'getAll', 'delete'])
})

export const crudRoutes = {
  path: config.crudPrefix,
  router
}
