const test = require('tape')
const virtualSidebar = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(virtualSidebar)
})
