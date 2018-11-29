import { userService } from './../services/UserService'
import BaseController from './BaseController'

/**
 * Controller that handles the User API actions
 */
class UserController extends BaseController {
  constructor () {
    super(userService, 'User')
  }
}

export const userController = new UserController()
