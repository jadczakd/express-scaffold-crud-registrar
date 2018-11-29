import express from 'express'
import { v1Routes } from './v1'
const router = express.Router()

router.use(v1Routes.path, v1Routes.router)

export const APIsRoutes = {
  path: '/api',
  router
}
