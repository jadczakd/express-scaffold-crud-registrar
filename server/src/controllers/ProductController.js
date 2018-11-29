import { productService } from './../services/productService'
import BaseController from './BaseController'

/**
 * Controller that handles the Product API actions
 */
class ProductController extends BaseController {
  constructor () {
    super(productService, 'Product')
  }
}

export const productController = new ProductController()
