import assert from 'node:assert/strict'

const component = await import('./test.riot')
assert.ok(component)

console.log('All tests passed :)')
