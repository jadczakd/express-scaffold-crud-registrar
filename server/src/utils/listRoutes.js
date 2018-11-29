function space (x) {
  var res = ''
  while (x--) res += ' '
  return res
}

export function listRoutes () {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].router.stack instanceof Array) {
      let currentPath = arguments[i].path
      arguments[i].router.stack.forEach(function (a) {
        var route = a.route
        if (route) {
          route.stack.forEach(function (r) {
            var method = r.method.toUpperCase()
            console.log(method, space(8 - method.length), currentPath + route.path)
          })
        }
      })
    }
  }
}
