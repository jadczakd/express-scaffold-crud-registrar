import BaseModelService from './BaseModelService'
import user from '../models/user'

class UserService extends BaseModelService {
  constructor () {
    super(user)
  }

  /**
   * Fetches a single user from the db by its pid
   * @param  {Number} id
   * @return {Promise}
   */
  readById (id) {
    return new Promise((resolve, reject) => {
      user.findOne({ _id: id }, (err, user) => {
        if (err) {
          return reject(err)
        }
        return resolve(user)
      })
    })
  }
}

export const userService = new UserService()
