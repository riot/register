const { expect } = require('chai')
const register = require('../')

describe('Core Specs', () => {
  const unregister = register({
    exts: ['.riot', '.tag']
  })

  it('Riot modules can be properly imported', () => {
    expect(require('./test.riot')).to.be.ok
  })

  it('Can require legacy .tag file', () => {
    expect(require('./legacy.tag')).to.be.ok
  })

  it('Tear down function works as expected', () => {
    unregister()
    expect(() => require('./test.riot')).to.throw
  })
})
