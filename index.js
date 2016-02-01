const flatten = require('flatten')
const assert = require('assert')

module.exports = virtualSidebar

// Nested sidebar for virtual-dom
// (fn, [obj], obj) -> null
function virtualSidebar (h, data, opts) {
  opts = opts || {}

  const createNode = opts.map || dftMap

  assert.ok(typeof h, 'function', 'h must be a function')
  assert.ok(Array.isArray(data), 'data must be an array')
  assert.equal(typeof opts, 'object', 'opts must be an object')

  return (function createNodes (el) {
    if (Array.isArray(el)) {
      return h('ul', flatten(el.map(createNodes)))
    } else {
      return createNode(h, el)
    }
  })(data)

  function dftMap (h, el) {
    return h('li', [
      h('a', { href: '/' + el }, el)
    ])
  }
}
