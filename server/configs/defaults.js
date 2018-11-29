import path from 'path'

const config = {
  approot: path.resolve(path.join(__dirname, '/../')),
  cookieSecret: ')iG>[&f;M?a.;2LvJfd&!ye3HJn.H^',
  /* PROJECT */
  version: 1,
  envPort: 9003,
  database: 'localhost:27017/test',
  autoIndex: true,
  adminPanel: true,
  crudPrefix: '/cruds'
}

export { config as defaults }
