import { mainRoutes } from './mainRoutes.js'
import { crudRoutes } from './crudRoutes'
import { listRoutes } from '../utils/listRoutes'

export default app => {
  app.use(mainRoutes.path, mainRoutes.router)
  app.use(crudRoutes.path, crudRoutes.router)
}

listRoutes(mainRoutes, crudRoutes)
