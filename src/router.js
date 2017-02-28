import React from 'react'
import { router } from 'app'
import getBasePath from './getBasePath'

const {Router, Route} = router
const _ = (L) => (_, cb) => L.then(M => cb(null, M.default))

__webpack_public_path__ = getBasePath()

export default ({ history }) => (
  <Router history={history}>
    <Route path="/"        getComponent={_(System.import('pages/shortcut'))} />
    <Route path="/about"   getComponent={_(System.import('pages/about'))} />
    <Route path="/shortcut"   getComponent={_(System.import('pages/shortcut'))} />
    <Route path="/test"   getComponent={_(System.import('pages/test'))} />
  </Router>
)
