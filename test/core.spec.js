import { expect } from 'chai'
import teardown from '..'

describe('Core Specs', () => {
  it('Riot modules can be properly imported', () => {
    expect(require('./test.riot')).to.be.ok
  })

  it('Tear down function works as expected', () => {
    teardown()
    expect(() => require('./test.riot')).to.throw
  })
})
