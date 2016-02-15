# virtual-sidebar [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Nested sidebar for virtual-dom. Takes an array and turns it into nested HTML.

## Features
- __sensible:__ creates text nodes by default which are ideal to get started
- __flexible:__ easily extensible to create more complicated elements
- __small:__ minimal code size providing minimal overhead
- __reliable:__ transforms data into nodes without any internal state

## Usage
```js
const vsidebar = require('virtual-sidebar')
const vdom = require('virtual-dom')
const hyperx = require('hyperx')

const hx = hyperx(vdom.h)

const data = [
  'main-section',
  [ 'sub-section-1', [ 'item-1', 'item-2' ] ],
  'footer-section'
]

const tree = hx`
  <section>
    ${vsidebar(vdom.h, data, { className: 'sidebar' })}
  </section>
`
console.log(vdom.create(tree).toString())
```
yields
```html
<section>
  <aside class="sidebar">
    <ul>
      <li><a href="/main-section">
        main-section
      </a></li>
      <li>
        <ul>
          <li><a href="/sub-section-1">
            sub-section-1
          </a></li>
          <li><a href="/sub-section-1/item-1">
            item-1
          </a></li>
          <li><a href="/sub-section-1/item-2">
            item-2
          </a></li>
        </ul>
      </li>
      <li><a href="/footer-section">
        footer-section
      </a></li>
    </ul>
  </aside>
</section>
```

## API
### virtualSidebar(h, opts?, data)
Create a new sidebar based on an array of data.
- __opts.map(h, name):__ use a map function that takes raw node data and
  returns an element. Useful to create more intricate nodes

## Installation
```sh
$ npm install virtual-sidebar
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/virtual-sidebar.svg?style=flat-square
[3]: https://npmjs.org/package/virtual-sidebar
[4]: https://img.shields.io/travis/yoshuawuyts/virtual-sidebar/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/virtual-sidebar
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/virtual-sidebar/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/virtual-sidebar
[8]: http://img.shields.io/npm/dm/virtual-sidebar.svg?style=flat-square
[9]: https://npmjs.org/package/virtual-sidebar
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
