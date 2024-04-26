import assert from 'node:assert/strict'

const component = await import('./test.html')
assert.ok(component)

console.log('All tests passed :)')
