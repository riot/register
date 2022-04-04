const { expect } = require('chai')

describe('Autoregister Specs', () => {
  it('Riot modules can be properly imported', () => {
    expect(require('./test.riot')).to.be.ok
  })
})
