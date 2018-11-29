import { config } from '../../configs'
import { generatePanels } from './panel'

export function crudRegistrar (router, controller, methods = ['get', 'post', 'getAll', 'put', 'readAll']) {
  methods.forEach(method => {
    let url = ''
    switch (method) {
      case 'get':
      case 'put':
      case 'delete':
        url = `/${controller.resourceName.toLowerCase()}/:id`
        break
      case 'getAll':
        url = `/${controller.resourceName.toLowerCase()}`
        method = 'get'
        break
      default:
        url = `/${controller.resourceName.toLowerCase()}`
    }
    router[method](url, controller[method])
    if (config.adminPanel) {
      // generation
      generatePanels(controller.service, method, config.crudPrefix + url)
    }
  })
}
