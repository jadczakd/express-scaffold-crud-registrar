import express from 'express'
import { productController } from '../controllers/ProductController'
import { userController } from '../controllers/UserController'
const router = express.Router()

function crudRegistrar (router, controller, methods = ['get', 'post', 'update', 'put', 'readAll']) {
  methods.forEach(method => {
    let url = ''
    switch (method) {
      case 'get':
      case 'update':
      case 'delete':
        url = `/${controller.resourceName.toLowerCase()}/:id`
        break
      default:
        url = `/${controller.resourceName.toLowerCase()}`
    }
    router[method](url, controller[method])
  })
}

[productController, userController].forEach(controller => {
  crudRegistrar(router, controller, ['get', 'post'])
})

export const crudRoutes = {
  path: '/crud',
  router
}
