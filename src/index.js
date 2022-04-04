import { addHook } from 'pirates'
import compile from './compile'

// returns the teardown function
export default function register(options) {
  return addHook(compile,
    {
      exts: ['.riot'],
      ignoreNodeModules: false,
      ...options
    }
  )
}

// autoregister the .riot file import if this file gets required without any explicit require call
if (typeof module !== 'undefined' && !module.parent) {
  register()
}


