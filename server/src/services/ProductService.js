import BaseModelService from './BaseModelService'
import product from '../models/productModel.js'

class ProductService extends BaseModelService {
  constructor () {
    super(product)
  }

  /**
   * Fetches a single product from the db by its pid
   * @param  {Number} pid
   * @return {Promise}
   */
  readById (id) {
    return new Promise((resolve, reject) => {
      product.findOne({ _id: id }, (err, fetchedProduct) => {
        if (err) {
          return reject(err)
        }
        return resolve(fetchedProduct)
      })
    })
  }
}

export const productService = new ProductService()
