import { config } from '../../configs'
import { generatePanels } from './panel'

export function crudRegistrar (router, controller, methods = ['get', 'post', 'update', 'put', 'readAll']) {
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
    if (config.adminPanel) {
      // generation
      generatePanels(controller.service, method, config.crudPrefix + url)
    }
  })
}
