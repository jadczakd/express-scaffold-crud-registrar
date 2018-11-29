import { mainRoutes } from './mainRoutes.js'
import { APIsRoutes } from './APIs'

export default app => {
  app.use(mainRoutes.path, mainRoutes.router)
  app.use(APIsRoutes.path, APIsRoutes.router)
}
