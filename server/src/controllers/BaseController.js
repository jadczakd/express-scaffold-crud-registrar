import { winstonLogger } from '../utils/logger'

/**
 * Controller that can be used as a base for the most common Controller actions
 */

class BaseController {
  constructor (service, resourceName) {
    this.service = service
    this.resourceName = resourceName

    // bind class functions to its instance
    this.create = this.post.bind(this)
    this.get = this.get.bind(this)
    this.readAll = this.readAll.bind(this)
    this.delete = this.delete.bind(this)
    this.put = this.put.bind(this)
  }

  post (req, res) {
    let createdId

    return this.service
      .create(req.body)
      .then(dbResponse => {
        createdId = dbResponse._id
        res.status(201).json({ status: 'ok', response: { _id: createdId } })
      })
      .catch(err => {
        winstonLogger.error(`[${this.resourceName} CRUD/Create]- ` + err.stack)
        res.status(500).json({
          status: 'error',
          message: `There was an error trying to create ${this.resourceName}.`
        })
      })
  }

  get (req, res) {
    let documentObj
    const id = req.params.id || 1
    return this.service
      .read(id)
      .then(document => {
        documentObj = document.toObject()
        res.status(200).json({ status: 'ok', response: documentObj })
      })
      .catch(err => {
        winstonLogger.error(`[${this.resourceName} CRUD/Read]- ` + err.stack)
        res.status(500).json({
          status: 'error',
          message: `Error reading ${this.resourceName}.`
        })
      })
  }

  readAll (req, res) {
    return this.service
      .readAll()
      .then(documents => {
        res.status(200).json({ status: 'ok', response: documents })
      })
      .catch(err => {
        console.log(err)
        winstonLogger.error(`[${this.resourceName} CRUD/ReadAll]- ` + err.stack)
        res.status(500).json({
          status: 'error',
          message: `Error reading ${this.resourceName}s.`
        })
      })
  }

  delete (req, res) {
    return this.service
      .delete(req.params.id)
      .then(() => {
        res.status(200).json({ status: 'ok' })
      })
      .catch(err => {
        winstonLogger.error(`[${this.resourceName} CRUD/Delete]- ` + err.stack)
        res.status(500).json({
          status: 'error',
          message: `Error delete ${this.resourceName}.`
        })
      })
  }

  put (req, res) {
    return this.service
      .update(req.params.id, req.body)
      .then(doc => {
        res.status(200).json({ status: 'ok', response: doc })
      })
      .catch(err => {
        winstonLogger.error(`[${this.resourceName} CRUD/Update]- `, err)
        res.status(500).json({
          status: 'error',
          message: `Error updating ${this.resourceName}.`
        })
      })
  }
}

export default BaseController
