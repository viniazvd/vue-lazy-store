export function getMutations (target) {
  return Object
    .values(target)
    .map(coe => coe['mutations'])
    .reduce((acc, item) => Object.assign(acc, { ...acc, ...item }), {})
}

export function getStates (target) {
  return Object
    .entries(target)
    .reduce((acc, [key, item]) => Object.assign(acc, {
      ...acc,
      [key]: item.state
    }), {})
}

export function resolveSource (mutations, type) {
  return mutations[type]
}

export function hasModules (modules) {
  return Object.keys(modules).length
}

export function getModuleName (__init, type) {
  return Object
    .entries(__init)
    .reduce((acc, [key, obj]) => {
      if (Object.keys(obj.mutations).some(mutation => mutation === type)) {
        acc = key
      }

      return acc
    }, String)
}
