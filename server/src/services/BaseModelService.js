import mongoose from 'mongoose'
import { config } from '../../configs'
import { generatePanels } from '../panel'
require('mongoose-schema-jsonschema')(mongoose)

/**
 * Service that can be used as a base for all the Model specific services. Offers the basic CRUD operations in a generic way
 */
class BaseModelService {
  constructor (model, key) {
    this.model = model
    this.modelName = model.modelName.toLowerCase()
    this.key = key || '_id'
    this.model_json = model.jsonSchema()
    if (config.adminPanel) {
      // generation
      generatePanels(this.model_json)
    }
  }

  /**
   * @description Inserts a new document into the MongoDB
   * @param  {object} data The data of the document
   * @return {Promise}
   */
  create (data) {
    return new Promise((resolve, reject) => {
      this.model.create(data, (err, savedModel) => {
        if (err) {
          return reject(err)
        }
        return resolve(savedModel)
      })
    })
  }

  read (query) {
    const filter = {}
    filter[this.key] = query
    return new Promise((resolve, reject) => {
      this.model.findOne(filter, (err, fetchedModel) => {
        if (err) {
          return reject(err)
        }
        return resolve(fetchedModel)
      })
    })
  }

  readOne (query) {
    return new Promise((resolve, reject) => {
      this.model.findOne(query, (err, fetchedModel) => {
        if (err) {
          return reject(err)
        }
        return resolve(fetchedModel)
      })
    })
  }

  readAll () {
    return new Promise((resolve, reject) => {
      this.model.find({}).lean().exec((err, fetchedModels) => {
        if (err) {
          return reject(err)
        }
        return resolve(fetchedModels)
      })
    })
  }

  update (query, data) {
    const filter = {}
    filter[this.key] = query

    return new Promise((resolve, reject) => {
      this.model.findOne(filter, (err, fetchedModel) => {
        if (err) {
          return reject(err)
        }

        for (const attribute in data) {
          if (
            data.hasOwnProperty(attribute) &&
            attribute !== this.key &&
            attribute !== '_id'
          ) {
            fetchedModel[attribute] = data[attribute]
          }
        }

        fetchedModel.save((err, savedModel) => {
          if (err) {
            return reject(err)
          }
          return resolve(savedModel)
        })
      })
    })
  }

  delete (query) {
    const filter = {}
    filter[this.key] = query

    return new Promise((resolve, reject) => {
      this.model.deleteOne(filter, err => {
        if (err) {
          return reject(err)
        }
        return resolve()
      })
    })
  }
}

export default BaseModelService
