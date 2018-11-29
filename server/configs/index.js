import fs from 'fs'
import path from 'path'
import { defaults } from './defaults'
import _ from 'lodash'

let envConfigs = {}

/* TIMEZONE */
process.env.TZ = 'UTC'

const env = process.env.NODE_ENV || 'local'
if (env) {
  const envPath = '/' + env + '.js'
  const absPath = path.resolve(path.join(__dirname, envPath))
  const fileExists = fs.existsSync(absPath)
  if (fileExists) {
    envConfigs = require('./' + env).config
  }
}

export const config = _.merge(defaults, envConfigs)
